import { supabase } from "@/client";
import { resizeImageWithAspect } from "@/lib/helpers";

export async function uploadAvatar(id: string, image: File) {
  const resizedImage = await resizeImageWithAspect(image, 300);

  const fileExtention = resizedImage.name.split(".").pop();
  if (!fileExtention) {
    throw new Error("Invalid file extention");
  }

  const path = `${id}/avatar.${fileExtention}`;

  const res = await supabase.storage
    .from("avatars")
    .upload(path, resizedImage, {
      cacheControl: "3600",
      upsert: true,
    });
  return res;
}

export function getImageUrl(imgPath: string) {
  return supabase.storage.from("avatars").getPublicUrl(imgPath);
}
