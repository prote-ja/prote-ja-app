import { FunctionComponent } from "react";

interface BlurredContainerProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const BlurredContainer: FunctionComponent<BlurredContainerProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={
        className +
        " p-6 dashboard-item border rounded-lg backdrop-blur bg-background"
      }
    >
      {title && (
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl font-bold text-white text-shadow">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};

export default BlurredContainer;
