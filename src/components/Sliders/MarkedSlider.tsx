import React, { FunctionComponent, useMemo, useState } from "react";
import Slider from "rc-slider";
import DefaultMark from "./DefaultMark";

interface MarkedSliderProps {
  step?: number;
  marks: {
    percentage: number;
    label: React.ReactNode;
  }[];
  tipParser: (value: number) => React.ReactNode;
  min?: number;
  max?: number;

  /**
   * Clamps the value to the smallest and largest percentage
   * Useful for when marks do not start at min and end at max
   */
  clamped?: boolean;
}

const MarkedSlider: FunctionComponent<MarkedSliderProps> = ({
  step,
  marks,
  tipParser,
  clamped,
  min = 0,
  max = 100,
}) => {
  const [value, setValue] = useState(0);

  const marksRecord = useMemo(() => {
    const returnRecord: Record<number, React.ReactNode> = {};

    for (let i = 0; i < marks.length; i++) {
      const current = marks[i];
      const hasPrev = i > 0;
      const hasNext = i < marks.length - 1;

      const prevVal = hasPrev ? marks[i - 1].percentage : undefined;
      const nextVal = hasNext ? marks[i + 1].percentage : undefined;

      returnRecord[current.percentage] = (
        <DefaultMark
          label={current.label}
          currentVal={value}
          value={current.percentage}
          nextVal={nextVal}
          prevVal={prevVal}
        />
      );
    }

    return returnRecord;
  }, [value]);

  const calculatePercentage = (v: number) => {
    const range = max - min;

    return ((v - min) * 100) / range;
  };

  return (
    <div className="py-10">
      <Slider
        min={min}
        max={max}
        marks={marksRecord}
        step={step ?? null}
        onChange={(v) => {
          if (typeof v !== "number") return;
          const clampedValue = v < 0 ? 0 : v > 100 ? 100 : v;

          setValue(clamped ? clampedValue : v);
        }}
        value={value}
        defaultValue={20}
        onChangeComplete={(v) => console.log("AfterChange:", v)}
        styles={{
          rail: {
            backgroundColor: "white",
            opacity: 0.2,
            height: "5px",
          },
          track: { backgroundColor: "transparent" },
          handle: {
            backgroundColor: "white",
            border: "none",
          },
        }}
        dotStyle={{ display: "none" }}
        handleRender={(origin, props) => {
          return (
            <>
              {/* Tooltip */}
              <div
                className={"absolute flex -top-7 justify-center"}
                style={{
                  width: "10rem",
                  left: `calc(${calculatePercentage(props.value)}% - 5rem)`,
                }}
              >
                <div className="absolute flex items-center justify-center border-2 px-2 border-white/20 text-sm font-medium rounded-md">
                  {tipParser(props.value)}
                </div>
              </div>

              {/* Handle */}
              {origin}
            </>
          );
        }}
      />
    </div>
  );
};

export default MarkedSlider;
