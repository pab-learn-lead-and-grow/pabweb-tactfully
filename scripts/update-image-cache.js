import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, "../.env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const buckets = [
  {
    name: "logos",
    images: [
      "aicte.png",
      "amity.png",
      "jain.png",
      "manipal.png",
      "naac.png",
      "naacA+.png",
      "nirf.png",
      "nmims.png",
      "shoolini.png",
      "smu.png",
      "ugc.png",
    ],
  },
  {
    name: "News",
    images: [
      "amity.png",
      "help.png",
      "jain.png",
      "muj.png",
      "nmims.png",
      "shoolini.png",
      "smu.png",
    ],
  },
];

async function updateImageCacheControl(bucketName, imagePath) {
  try {
    const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(imagePath);
    const url = urlData.publicUrl;

    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") || "image/png";

    const { error } = await supabase.storage
      .from(bucketName)
      .upload(imagePath, buffer, {
        contentType,
        cacheControl: "31536000",
        upsert: true,
      });

    if (error) {
      console.error(`❌ Error uploading ${imagePath}:`, error.message);
    } else {
      console.log(`✅ Updated: ${bucketName}/${imagePath}`);
    }
  } catch (err) {
    console.error(`❌ Error processing ${imagePath}:`, err.message);
  }
}

async function main() {
  console.log("🚀 Starting cache control update...\n");

  for (const bucket of buckets) {
    if (bucket.images.length === 0) {
      console.log(`📁 Bucket '${bucket.name}' has no images listed. Skipping.`);
      console.log(`   → Add your image paths to the script\n`);
      continue;
    }

    console.log(`📦 Processing bucket: ${bucket.name}`);
    
    for (const imagePath of bucket.images) {
      await updateImageCacheControl(bucket.name, imagePath);
    }
    console.log("");
  }

  console.log("✨ Done! All images updated with cacheControl: 31536000 (1 year)");
}

main();
