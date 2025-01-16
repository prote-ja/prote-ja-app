import { FunctionComponent } from "react";
import BlurredContainer from "./BlurredContainer";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

interface InformationContainerVerticalProps {
  onEdit?: () => void;
  name: React.ReactNode;
  value: React.ReactNode;
}

const InformationContainerVertical: FunctionComponent<
  InformationContainerVerticalProps
> = ({ onEdit, name, value }) => {
  return (
    <BlurredContainer cornerType="square">
      <div className="flex flex-col py-2 px-3 text-white">
        {/* Nome da seção */}
        <p className="text-lg font-medium mb-4">{name}</p>

        {/* Valor (campo de entrada ou qualquer outro valor) */}
        <div className="flex flex-col w-full gap-1.5">{value}</div>

        {/* Botão de edição, se necessário */}
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
    </BlurredContainer>
  );
};

export default InformationContainerVertical;
