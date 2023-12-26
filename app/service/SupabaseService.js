import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://hhhajhvibcwozhzfnrte.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default supabase;

console.log(
  "process.env.NEXT_PUBLIC_SUPABASE_KEY",
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
