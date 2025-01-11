import { FunctionComponent } from "react";
import MarkedSlider from "./MarkedSlider";

interface WearableRefreshRateProps {}

const WearableRefreshRate: FunctionComponent<WearableRefreshRateProps> = () => {
  const percentageToRefreshRate = (percentage: number) => {
    // Boundary cases
    if (percentage <= 0) return 60; // Longa Bateria
    if (percentage >= 100) return 1; // Performance

    const maxSeconds = 60; // Longa Bateria

    // Exponential decay formula for smooth transition
    const factor = 2; // Adjust this factor to control the curve steepness

    const calculatedSeconds = maxSeconds / Math.pow(factor, percentage / 25);
    return Math.floor(calculatedSeconds);
  };

  const tooltipParser = (percentage: number) => {
    return `${percentageToRefreshRate(percentage)}s`;
  };

  const handleOnChangeComplete = (value: number) => {
    console.log("Refresh rate changed: ", percentageToRefreshRate(value));
  };

  return (
    <MarkedSlider
      marks={[
        {
          percentage: 0,
          label: "Longa Bateria",
        },
        {
          percentage: 25,
          label: "Normal",
        },
        {
          percentage: 50,
          label: "Padrão",
        },
        {
          percentage: 75,
          label: "Alta",
        },
        {
          percentage: 100,
          label: "Performance",
        },
      ]}
      tipParser={tooltipParser}
      min={-8}
      max={108}
      clamped
      step={2}
      onChangeComplete={handleOnChangeComplete}
    />
  );
};

export default WearableRefreshRate;
