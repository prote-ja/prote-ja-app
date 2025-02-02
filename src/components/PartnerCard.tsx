import { FunctionComponent } from "react";

interface PartnerCardProps {
  logo: string;
  name: string;
  description: string;
}

const PartnerCard: FunctionComponent<PartnerCardProps> = ({
  logo,
  name,
  description,
}) => {
  return (
    <div className="bg-white/10 p-6 rounded-md backdrop-blur-sm">
      <img
        src={logo}
        alt={`${name} Logo`}
        className="h-12 w-auto mx-auto mb-4"
      />
      <h4 className="text-lg font-semibold text-white text-center mb-2">
        {name}
      </h4>
      <p className="text-sm text-white/80 text-center">{description}</p>
    </div>
  );
};

export default PartnerCard;
