import { supabase } from "@/client";
import { Database } from "@/types/database.types";

export async function updateUser(
  id: string,
  data: Partial<Database["public"]["Tables"]["users"]["Row"]>
) {
  const response = await supabase
    .from("users")
    .update(data)
    .eq("id", id)
    .select()
    .returns<Database["public"]["Tables"]["users"]["Row"][]>();

  return response;
}

export async function getUser(id: string) {
  const response = await supabase
    .from("users")
    .select("*")
    .match({ id })
    .returns<Database["public"]["Tables"]["users"]["Row"][]>();

  return response;
}
