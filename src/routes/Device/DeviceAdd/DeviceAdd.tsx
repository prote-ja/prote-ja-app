import { FunctionComponent } from "react";
import QrScanner from "@/components/QrScanner";

interface DeviceAddProps {}

const DeviceAdd: FunctionComponent<DeviceAddProps> = ({}) => {
  return (
    <div className="w-full flex justify-center">
      <QrScanner />
    </div>
  );
};

export default DeviceAdd;
