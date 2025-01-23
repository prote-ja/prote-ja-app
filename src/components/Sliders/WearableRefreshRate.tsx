import { FunctionComponent } from "react";
import MarkedSlider from "./MarkedSlider";

interface WearableRefreshRateProps {
  className?: string;
  onChangeComplete?: (value: number) => void;
  defaultValue?: number;
}

const WearableRefreshRate: FunctionComponent<WearableRefreshRateProps> = ({
  className,
  onChangeComplete,
  defaultValue,
}) => {
  const percentageToRefreshRate = (percentage: number): number => {
    const maxSeconds = 60; // Maximum refresh interval (Longa Bateria)
    const halfStep = 25; // Percentage at which the refresh rate halves

    // Boundary cases
    if (percentage <= 0) return maxSeconds; // Longa Bateria
    if (percentage >= 100) return 3; // Performance

    // Calculate the refresh rate
    const calculatedSeconds = maxSeconds / Math.pow(2, percentage / halfStep);
    return Math.round(calculatedSeconds);
  };

  const refreshRateToPercentage = (refreshRate: number): number => {
    const maxSeconds = 60; // Maximum refresh interval (Longa Bateria)
    const halfStep = 25; // Percentage at which the refresh rate halves

    // Ensure refreshRate is within valid boundaries
    if (refreshRate <= 3) return 100; // Performance
    if (refreshRate >= maxSeconds) return 0; // Longa Bateria

    // Calculate the percentage
    const calculatedPercentage = Math.log2(maxSeconds / refreshRate) * halfStep;
    return Math.round(calculatedPercentage);
  };

  const tooltipParser = (percentage: number) => {
    return `${percentageToRefreshRate(percentage)}s`;
  };

  const handleOnChangeComplete = (value: number) => {
    if (onChangeComplete) onChangeComplete(percentageToRefreshRate(value));
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
      className={className}
      defaultValue={refreshRateToPercentage(defaultValue ?? 30)}
    />
  );
};

export default WearableRefreshRate;
