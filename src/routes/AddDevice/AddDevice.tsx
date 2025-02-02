import { FunctionComponent } from "react";
import QrScanner from "@/components/QrScanner";

interface AddDeviceProps {}

const AddDevice: FunctionComponent<AddDeviceProps> = ({}) => {
  return (
    <div className="w-full flex justify-center">
      <QrScanner />
    </div>
  );
};

export default AddDevice;
