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

async function listBucketImages(bucketName) {
  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .list(null, { limit: 100 });

    if (error) {
      console.error(`❌ Error listing ${bucketName}:`, error.message);
      return;
    }

    const allFiles = [];

    function extractFiles(items, prefix = "") {
      for (const item of items) {
        if (item.id) {
          const fullPath = prefix ? `${prefix}/${item.name}` : item.name;
          allFiles.push(`"${fullPath}"`);
        }
      }
    }

    if (data) {
      extractFiles(data);
    }

    console.log(`\n📁 Bucket: ${bucketName}`);
    console.log(`   Found ${allFiles.length} files\n`);
    console.log("   Copy these paths to update-image-cache.js:\n");
    console.log(`   ${allFiles.join(",\n   ")}\n`);

    return allFiles;
  } catch (err) {
    console.error(`❌ Error:`, err.message);
  }
}

async function main() {
  console.log("🔍 Listing all images from Supabase Storage...\n");

  await listBucketImages("logos");
  await listBucketImages("News");
}

main();
