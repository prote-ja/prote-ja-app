import BlurredContainer from "@/components/BlurredContainer";
import { Database } from "@/types/database.types";
import { FunctionComponent } from "react";
import AlertCheckbox from "@/components/AlertCheckbox";

interface AlertConfigurationProps {
  title: string;
  onChange: (value: Database["public"]["Enums"]["alert_types"]) => void;
  id: string;
  children?: React.ReactNode;
}

const AlertConfiguration: FunctionComponent<AlertConfigurationProps> = ({
  title,
  onChange,
  id,
  children,
}) => {
  const handleAlertChange = (id: string, value: boolean) => {
    console.log("Alert type changed: ", id, value);

    // TODO implement alert type change
    onChange(id as Database["public"]["Enums"]["alert_types"]);
  };

  return (
    <BlurredContainer title={title} titleBackground>
      {children}
      <div className="p-4 grid gap-4 grid-cols-2">
        <AlertCheckbox
          id={id + "-notification"}
          label="Notificação"
          onChange={(value: boolean) => {
            handleAlertChange("notification", value);
          }}
          defaultChecked
        />
        <AlertCheckbox
          id={id + "-whatsapp"}
          label="WhatsApp"
          onChange={(value: boolean) => {
            handleAlertChange("whatsapp", value);
          }}
        />
        <AlertCheckbox
          id={id + "-sms"}
          label="SMS"
          onChange={(value: boolean) => {
            handleAlertChange("sms", value);
          }}
        />
        <AlertCheckbox
          id={id + "-email"}
          label="Email"
          onChange={(value: boolean) => {
            handleAlertChange("email", value);
          }}
        />
      </div>
    </BlurredContainer>
  );
};

export default AlertConfiguration;
