import { BatteryMedium, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Database } from "@/types/database.types";
import WearableAvatar from "@/components/WearableAvatar";

interface BentoUserProps {
  avatarUrl: Database["public"]["Tables"]["wearables"]["Row"]["avatar_url"];
  name: Database["public"]["Tables"]["wearables"]["Row"]["name"] | null;
  heartRate: number;
  className?: string;
  avatarClassName?: string;
  nameClassName?: string;
}

const BentoUser: React.FC<BentoUserProps> = ({
  avatarUrl,
  name,
  heartRate,
  className,
  nameClassName,
}) => {
  return (
    <Card
      className={cn(
        "p-4 md:p-6 relative overflow-hidden border-none",
        className
      )}
    >
      <div className="w-full h-full flex items-center">
        {/* Avatar in the left corner */}
        <div className="flex-shrink-0">
          <WearableAvatar avatarUrl={avatarUrl} name={name} />
        </div>

        {/* Centered name */}
        <div className="flex-1 flex justify-center">
          <h2
            className={cn(
              "text-2xl md:text-4xl font-bold text-center -mx-2",
              nameClassName
            )}
          >
            {name}
          </h2>
        </div>
      </div>

      {/* Battery icon in the top-right corner */}
      <div className="absolute top-2 right-2">
        <BatteryMedium className="w-8 h-8 text-[#4ADE80]" />
      </div>

      {/* Heart rate in the bottom-right corner */}
      <div className="absolute bottom-2 right-2 flex flex-col items-center">
        <span className="text-sm text-[#F96900] font-bold mb-1">
          {heartRate}
        </span>
        <Heart className="w-8 h-8 text-[#F96900]" />
      </div>
    </Card>
  );
};

export default BentoUser;
