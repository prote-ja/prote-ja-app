import { supabase } from "@/client";

export async function setOwner(
  mac: string,
  password: string,
  owner: string | null
) {
  const loweredMac = mac.toLowerCase();

  const response = await supabase.functions.invoke("set-device-owner", {
    body: {
      mac: loweredMac,
      password,
      owner,
    },
  });

  return response;
}
