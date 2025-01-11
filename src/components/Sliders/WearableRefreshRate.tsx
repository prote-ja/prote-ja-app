import { FunctionComponent, useMemo, useState } from "react";
import Slider from "rc-slider";
import DefaultMark from "./DefaultMark";

interface WearableRefreshRateProps {}

const WearableRefreshRate: FunctionComponent<WearableRefreshRateProps> = () => {
  const [value, setValue] = useState(0);
  const marks = useMemo(
    () => ({
      0: <DefaultMark value="Longa Bateria" active={value === 0} />,
      25: <DefaultMark value="Baixa" active={value === 25} />,
      50: <DefaultMark value="Padrão" active={value === 50} />,
      75: <DefaultMark value="Alta" active={value === 75} />,
      100: <DefaultMark value="Performance" active={value === 100} />,
    }),
    [value]
  );
  const min = 0;
  const max = 100;

  const calculatePercentage = (v: number) => {
    const range = max - min;

    return ((v - min) * 100) / range;
  };
  return (
    <div className="py-10">
      <Slider
        min={min}
        max={max}
        marks={marks}
        step={5}
        onChange={(v) => {
          if (typeof v === "number") setValue(v);
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
            // translate: "0 2px",
          },
        }}
        dotStyle={{ display: "none" }}
        handleRender={(origin, props) => {
          console.log(props);

          return (
            <>
              <div
                className={"absolute flex -top-7 justify-center"}
                style={{
                  width: "20rem",
                  left: `calc(${calculatePercentage(props.value)}% - 10rem)`,
                }}
              >
                <div className="absolute flex items-center justify-center border-2 px-2 border-white/20 text-sm font-medium rounded-md">
                  {props.value}s
                </div>
              </div>
              {origin}
            </>
          );
        }}
      />
    </div>
  );
};

export default WearableRefreshRate;
