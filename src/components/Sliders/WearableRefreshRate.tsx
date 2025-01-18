import { FunctionComponent } from "react";
import MarkedSlider from "./MarkedSlider";

interface WearableRefreshRateProps {}

const WearableRefreshRate: FunctionComponent<WearableRefreshRateProps> = () => {
  const percentageToRefreshRate = (percentage: number) => {
    // Boundary cases
    // if (percentage <= 0) return 60; // Longa Bateria
    // if (percentage >= 100) return 3; // Performance

    const maxSeconds = 60; // Longa Bateria
    const halfStep = 25; // Halve every 25%

    // Calculate the refresh rate by halving for each 25%
    const calculatedSeconds = maxSeconds / Math.pow(2, percentage / halfStep);
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
