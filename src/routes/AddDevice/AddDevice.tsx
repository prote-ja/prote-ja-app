import { FunctionComponent } from "react";
import QrScanner from "@/components/QrScanner";
import ElementTitleHeader from "@/components/ElementTitleHeader";

interface AddDeviceProps {}

const AddDevice: FunctionComponent<AddDeviceProps> = ({}) => {
  return (
    <div>
      <ElementTitleHeader
        className="pb-8 text-white"
        title="Adicionar Dispositivo"
      />
      <QrScanner />
    </div>
  );
};

export default AddDevice;
