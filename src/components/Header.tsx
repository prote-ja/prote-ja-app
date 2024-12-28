import { FunctionComponent } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="p-2 border-b">
      <div>
        <img src={ProtejaLogo} alt="proteja-logo" className="max-h-12 inline" />
        <img
          src={ProtejaName}
          alt="proteja-name"
          className="max-w-32 inline h-12"
        />
      </div>
    </div>
  );
};

export default Header;
