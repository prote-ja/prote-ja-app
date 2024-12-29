import { FunctionComponent } from "react";

interface BlurredContainerProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const BlurredContainer: FunctionComponent<BlurredContainerProps> = ({
  header,
  children,
  className = "",
}) => {
  return (
    <div
      className={
        className +
        "p-6 dashboard-item border rounded-lg backdrop-blur bg-background"
      }
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white text-shadow">{header}</h2>
      </div>
      <div className="flex items-center space-x-4">{children}</div>
    </div>
  );
};

export default BlurredContainer;
