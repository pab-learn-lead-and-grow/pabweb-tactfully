'use server';

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseServer = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;

let blogCache = null;
let blogCacheTimestamp = 0;
const BLOG_CACHE_DURATION = 5 * 60 * 1000;

function getImageUrl(path) {
  if (!path) return "/help.png";
  
  const cleanPath = String(path).trim();
  
  if (cleanPath.startsWith("http")) {
    return cleanPath;
  }
  
  if (cleanPath.includes("supabase.co")) {
    return cleanPath;
  }
  
  if (!supabaseServer) return "/help.png";
  
  const { data } = supabaseServer.storage.from("Blogs").getPublicUrl(cleanPath);
  return data?.publicUrl || "/help.png";
}

export async function getLatestBlogs() {
  const now = Date.now();
  
  if (blogCache && (now - blogCacheTimestamp) < BLOG_CACHE_DURATION) {
    return blogCache;
  }
  
  if (!supabaseServer) {
    return blogCache || [];
  }
  
  try {
    const [blogRes, mapRes] = await Promise.all([
      supabaseServer
        .from("blogs")
        .select(`
          blogs_id,
          title,
          excerpt,
          slug,
          image_url,
          published_at,
          primary_category_id,
          "metaTitle",
          "metaDescription",
          blogs_categories (
            category_id,
            category_name
          )
        `)
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(50),
      supabaseServer
        .from("blogs_category_map")
        .select(`
          blogs_id,
          category_id,
          is_primary
        `),
    ]);

    const blogData = blogRes.data || [];
    const mapData = mapRes.data || [];

    const blogPrimaryMap = {};
    mapData.forEach((m) => {
      if (m.is_primary === true) {
        blogPrimaryMap[m.blogs_id] = m.category_id;
      }
    });

    const blogsWithImages = (blogData || []).map((item) => {
      const primaryCatId = blogPrimaryMap[item.blogs_id] || item.primary_category_id;
      const primaryCat = primaryCatId ? { 
        category_name: item.blogs_categories?.category_name 
      } : null;
      
      return {
        ...item,
        slug: item.slug?.trim() || "",
        title: item.title?.trim() || "",
        excerpt: item.excerpt?.trim() || "",
        image_url: getImageUrl(item.image_url),
        categorySlug: '',
        categoryName: primaryCat?.category_name || item.blogs_categories?.category_name || '',
      };
    });

    blogCache = blogsWithImages;
    blogCacheTimestamp = now;
    return blogCache;
  } catch (err) {
    console.error("getLatestBlogs error:", err);
    return blogCache || [];
  }
}
