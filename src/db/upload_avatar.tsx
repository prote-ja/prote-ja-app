import { useEffect, useState } from "react";
import { supabase } from "@/client";

interface AvatarProps {
  url: string | null;
  size: number;
  onUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    filePath: string
  ) => void;
}

const Avatar: React.FC<AvatarProps> = ({ url, size, onUpload }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error: any) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(event, filePath);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size, borderRadius: "50%" }}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size, borderRadius: "50%" }}
        />
      )}
      <div style={{ width: size }}>
        {/* Botão de Upload */}
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="upload-avatar"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
};

export default Avatar;
