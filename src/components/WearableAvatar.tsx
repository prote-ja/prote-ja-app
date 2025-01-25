import { getImageUrl } from "@/db/storage";
import { getInitials } from "@/lib/helpers";
import { Database } from "@/types/database.types";
import { FunctionComponent } from "react";

interface WearableAvatarProps {
  avatarUrl: Database["public"]["Tables"]["wearables"]["Row"]["avatar_url"];
  name: Database["public"]["Tables"]["wearables"]["Row"]["name"] | null;
}

const WearableAvatar: FunctionComponent<WearableAvatarProps> = ({
  avatarUrl,
  name,
}) => {
  return (
    <>
      {avatarUrl ? (
        <img
          src={getImageUrl(avatarUrl).data.publicUrl}
          className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-md object-cover backdrop-blur bg-white aspect-square"
          alt={name + " avatar"}
        />
      ) : (
        <div className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-md border-2 aspect-square">
          <div className="flex justify-center items-center h-full text-white">
            <p className="text-3xl font-semibold ">
              {getInitials(name ? name : "Sem nome")?.slice(0, 2)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WearableAvatar;
