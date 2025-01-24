import { supabase } from "@/client";
import { Database } from "@/types/database.types";

export async function getAllTotemsView() {
  const res = await supabase
    .from("totems_view")
    .select()
    .order("name", { ascending: true })
    .returns<Database["public"]["Views"]["totems_view"]["Row"][]>();

  return res;
}

export async function getTotemById(id: string) {
  const res = await supabase.from("totems_view").select().eq("id", id).single();

  return res;
}

export async function updateTotem(
  id: string,
  totem: Partial<Database["public"]["Tables"]["totems"]["Row"]>
) {
  const res = await supabase.from("totems").update(totem).eq("id", id);

  return res;
}
