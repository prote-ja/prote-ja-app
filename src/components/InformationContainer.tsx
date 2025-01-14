import { FunctionComponent } from "react";
import BlurredContainer from "./BlurredContainer";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

interface InformationContainerProps {
  onEdit?: () => void;
  name: React.ReactNode;
  value: React.ReactNode;
}

const InformationContainer: FunctionComponent<InformationContainerProps> = ({
  onEdit,
  name,
  value,
}) => {
  return (
    <BlurredContainer square>
      <div className="flex justify-between items-center text-white py-2 px-3">
        <div className="text-lg font-medium">{name}</div>
        <div className="text-lg flex gap-4 items-center">
          {value}
          {onEdit && (
            <Button
              onClick={onEdit}
              className="[&_svg]:size-5"
              size={"icon"}
              variant={"secondary"}
            >
              <Settings />
            </Button>
          )}
        </div>
      </div>
    </BlurredContainer>
  );
};

export default InformationContainer;
