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

let blogDataCache = null;
let blogDataCacheTimestamp = 0;
const BLOG_DATA_CACHE_DURATION = 5 * 60 * 1000;

export async function getBlogData() {
  const now = Date.now();
  
  if (blogDataCache && (now - blogDataCacheTimestamp) < BLOG_DATA_CACHE_DURATION) {
    return blogDataCache;
  }
  
  if (!supabaseServer) {
    return blogDataCache || { trending: [], latest: [], categories: [] };
  }
  
  try {
    const [blogRes, catRes, mapRes] = await Promise.all([
      supabaseServer
        .from("blogs")
        .select(`
          blogs_id,
          title,
          slug,
          excerpt,
          image_url,
          published_at,
          trending,
          primary_category_id,
          "metaTitle",
          "metaDescription",
          blogs_categories (
            category_id,
            category_name
          )
        `)
        .eq("is_published", true),
      supabaseServer.from("blogs_categories").select("category_id, category_name"),
      supabaseServer
        .from("blogs_category_map")
        .select(`
          blogs_id,
          category_id,
          is_primary
        `),
    ]);

    const blogData = blogRes.data || [];
    const catData = catRes.data || [];
    const mapData = mapRes.data || [];
    
    const catMap = {};
    catData.forEach((c) => (catMap[c.category_id] = c));

    const blogPrimaryMap = {};
    mapData.forEach((m) => {
      if (m.is_primary === true) {
        blogPrimaryMap[m.blogs_id] = m.category_id;
      }
    });

    const merged = blogData.map((item) => {
      let imageUrl = item.image_url;
      if (imageUrl && !imageUrl.startsWith("http") && supabaseServer) {
        const { data } = supabaseServer.storage.from("Blogs").getPublicUrl(imageUrl);
        imageUrl = data?.publicUrl;
      }
      
      const primaryCatId = blogPrimaryMap[item.blogs_id] || item.primary_category_id;
      const primaryCat = catMap[primaryCatId] || item.blogs_categories;
      
      return {
        ...item,
        image_url: imageUrl,
        categorySlug: '',
        categoryName: primaryCat?.category_name || '',
        blogs_categories: primaryCat || null,
      };
    });

    const trending = merged
      .filter((item) => item.trending === true)
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      .slice(0, 6);

    const latest = merged
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    const categories = catData.sort((a, b) => a.category_name.localeCompare(b.category_name));

    blogDataCache = { trending, latest, categories };
    blogDataCacheTimestamp = now;
    return blogDataCache;
  } catch (err) {
    console.error("getBlogData error:", err);
    return blogDataCache || { trending: [], latest: [], categories: [] };
  }
}
