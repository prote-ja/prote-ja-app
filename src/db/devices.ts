import { supabase } from "@/client";

export async function setOwner(
  mac: string,
  password: string,
  owner: string | null
) {
  const response = await supabase.functions.invoke("set-device-owner", {
    body: {
      mac,
      password,
      owner,
    },
  });

  return response;
}
