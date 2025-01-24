import { supabase } from "@/client";

export async function getDevicePermissionsView(id: string) {
  console.log("id", id);

  const res = await supabase
    .from("permissions_view")
    .select()
    .eq("device", id)
    .order("created_at", { ascending: false });

  console.log("res", res);
  return res;
}
