import React, { FunctionComponent, useMemo } from "react";

interface DefaultMarkProps {
  label: React.ReactNode;

  value: number;
  currentVal: number;

  // Next or previous value can be undefined if there is no next or previous value
  // if both are undefined, then the current value is the only value
  nextVal?: number;
  prevVal?: number;
}

const DefaultMark: FunctionComponent<DefaultMarkProps> = ({
  label,
  value,
  currentVal,
  nextVal,
  prevVal,
}) => {
  // checks to see if the value is closer to the neighboring values or if it is closer to the current value
  const active = useMemo(() => {
    const distanceMeToCurrent = Math.abs(value - currentVal);
    const distanceNextToCurrent =
      nextVal !== undefined ? Math.abs(nextVal - currentVal) : undefined;
    const distancePrevToCurrent =
      prevVal !== undefined ? Math.abs(prevVal - currentVal) : undefined;

    if (
      distanceNextToCurrent === undefined &&
      distancePrevToCurrent === undefined
    )
      return value === currentVal;

    if (distanceNextToCurrent && distancePrevToCurrent === undefined)
      return distanceMeToCurrent < distanceNextToCurrent;

    if (distanceNextToCurrent === undefined && distancePrevToCurrent)
      return distanceMeToCurrent < distancePrevToCurrent;

    if (
      distanceMeToCurrent === distanceNextToCurrent ||
      distanceMeToCurrent === distancePrevToCurrent
    )
      return value === currentVal;

    return (
      distanceMeToCurrent < distanceNextToCurrent! &&
      distanceMeToCurrent < distancePrevToCurrent!
    );
  }, [value, currentVal, nextVal, prevVal]);

  return (
    <div className="flex items-center flex-col text-white/50 mt-2 gap-[2px]">
      <div
        className={`h-2 w-2 rounded-full ${
          active ? "bg-white" : "bg-white/50"
        }`}
      />
      <div className={`text-sm ${active ? "font-bold text-white" : ""}`}>
        {label}
      </div>
    </div>
  );
};

export default DefaultMark;
