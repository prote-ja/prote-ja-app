import { supabase } from "@/client";
import { Database } from "@/types/database.types";

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

export async function updateTrackingPermission(
  id: number,
  permission: Database["public"]["Enums"]["tracker_permition"]
) {
  const response = await supabase
    .from("tracking_permissions")
    .update({
      permission: permission,
    })
    .eq("id", id)
    .select()
    .returns<Database["public"]["Tables"]["tracking_permissions"]["Row"][]>();

  return response;
}
