import { supabase } from "@/client";
import { Database } from "@/types/database.types";

export async function getAllTotemsView() {
  const res = await supabase
    .from("totems_view")
    .select()
    .returns<Database["public"]["Views"]["totems_view"]["Row"][]>();

  return res;
}
