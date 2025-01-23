import { supabase } from "@/client";
import { Database } from "@/types/database.types";

export async function getAllWearablesView() {
  const res = await supabase
    .from("wearables_view")
    .select()
    .returns<Database["public"]["Views"]["wearables_view"]["Row"][]>();

  return res;
}

export async function getWearableById(id: string) {
  const res = await supabase
    .from("wearables_view")
    .select()
    .eq("id", id)
    .single();

  return res;
}

export async function updateWearable(
  id: string,
  wearable: Partial<Database["public"]["Tables"]["wearables"]["Row"]>
) {
  const res = await supabase.from("wearables").update(wearable).eq("id", id);

  return res;
}
