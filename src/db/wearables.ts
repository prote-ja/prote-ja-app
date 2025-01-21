import { supabase } from "@/client";
import { Database } from "@/types/database.types";

export async function getAllWearablesView() {
  const res = await supabase
    .from("wearables_view")
    .select()
    .returns<Database["public"]["Views"]["wearables_view"]["Row"][]>();

  return res;
}
