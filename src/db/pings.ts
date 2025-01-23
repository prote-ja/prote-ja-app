import { supabase } from "@/client";

export async function getLastPing(deviceId: string) {
  const response = await supabase
    .from("last_pings")
    .select("*")
    .eq("device_id", deviceId)
    .single();
  return response;
}
