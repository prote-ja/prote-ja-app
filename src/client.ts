import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/database.types";

const supabaseUrl = "https://czhgcnahnjyzimgtcrqx.supabase.co";
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
