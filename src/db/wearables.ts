import { supabase } from "@/client";

export async function getAllWearables() {
  const res = await supabase.from("wearables").select("*");

  console.log(res);

  return null;
}
