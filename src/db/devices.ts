import { supabase } from "@/client";

export async function setOwner(mac: string, password: string) {
  const response = await supabase.functions.invoke("set-device-owner", {
    body: {
      mac,
      password,
    },
  });

  return response;
}
