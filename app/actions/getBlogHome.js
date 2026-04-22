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

let homeBlogsCache = null;
let homeBlogsCacheTimestamp = 0;
const HOME_BLOGS_CACHE_DURATION = 1 * 60 * 1000;

function getImageUrl(path) {
  if (!path) return "/help.png";
  const cleanPath = String(path).trim();
  if (cleanPath.startsWith("http")) return cleanPath;
  if (cleanPath.includes("supabase.co")) return cleanPath;
  if (!supabaseServer) return "/help.png";
  const { data } = supabaseServer.storage.from("Blogs").getPublicUrl(cleanPath);
  return data?.publicUrl || "/help.png";
}

export async function getLatestBlogsHome() {
  const now = Date.now();
  
  if (homeBlogsCache && (now - homeBlogsCacheTimestamp) < HOME_BLOGS_CACHE_DURATION) {
    return homeBlogsCache;
  }
  
  if (!supabaseServer) {
    return homeBlogsCache || [];
  }
  
  try {
    const [blogsRes, mapRes, catRes] = await Promise.all([
      supabaseServer
        .from("blogs")
        .select("blogs_id, title, slug, excerpt, image_url, published_at, primary_category_id")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(4),
      supabaseServer
        .from("blogs_category_map")
        .select("blogs_id, category_id, is_primary"),
      supabaseServer
        .from("blogs_categories")
        .select("category_id, category_name"),
    ]);

    const blogs = blogsRes.data || [];
    const mapData = mapRes.data || [];
    const catData = catRes.data || [];
    
    const catMap = {};
    catData.forEach((c) => (catMap[c.category_id] = c));

    const blogPrimaryMap = {};
    mapData.forEach((m) => {
      if (m.is_primary === true) {
        blogPrimaryMap[m.blogs_id] = m.category_id;
      }
    });

    const blogsWithImages = (blogs || []).map((item) => {
      const primaryCatId = blogPrimaryMap[item.blogs_id] || item.primary_category_id;
      const category = catMap[primaryCatId];
      
      return {
        ...item,
        slug: item.slug?.trim() || "",
        title: item.title?.trim() || "",
        excerpt: item.excerpt?.trim() || "",
        image_url: getImageUrl(item.image_url),
        categoryName: category?.category_name || '',
      };
    });

    homeBlogsCache = blogsWithImages;
    homeBlogsCacheTimestamp = now;
    return homeBlogsCache;
  } catch (err) {
    console.error("getLatestBlogsHome error:", err);
    return homeBlogsCache || [];
  }
}