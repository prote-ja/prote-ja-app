import { FunctionComponent } from "react";
import MarkedSlider from "./MarkedSlider";

interface BatteryAlertProps {}

const BatteryAlert: FunctionComponent<BatteryAlertProps> = () => {
  const tooltipParser = (value: number) => {
    return `${value}%`;
  };

  const handleOnChangeComplete = (value: number) => {
    console.log("Refresh rate changed: ", value);
  };

  return (
    <MarkedSlider
      marks={[
        {
          percentage: 5,
          label: "5%",
        },
        {
          percentage: 15,
          label: "15%",
        },
        {
          percentage: 25,
          label: "25%",
        },
        {
          percentage: 35,
          label: "35%",
        },
      ]}
      tipParser={tooltipParser}
      min={5}
      max={35}
      step={1}
      onChangeComplete={handleOnChangeComplete}
      showTrack
    />
  );
};

export default BatteryAlert;
