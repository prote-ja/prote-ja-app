import { supabase } from "@/client";
import { Database } from "@/types/database.types";

export async function setOwner(
  id: string,
  password: string,
  owner: string | null
) {
  const upperId = id.toUpperCase();

  const response = await supabase.functions.invoke("set-device-owner", {
    body: {
      id: upperId,
      password,
      owner,
    },
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  const data = await JSON.parse(response.data as string);

  return data.data as Database["public"]["Tables"]["devices"]["Row"];
}
