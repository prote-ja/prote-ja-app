import { FunctionComponent } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "./ui/button";
import { Bell, User } from "lucide-react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="p-2 border-b justify-between flex items-center">
      <div className="flex items-center space-x-2">
        <img src={ProtejaLogo} alt="proteja-logo" className="max-h-12" />
        <img src={ProtejaName} alt="proteja-name" className="max-w-32 h-12" />
      </div>
      <div className="gap-2 flex items-center">
        <Button variant={"secondary"}>
          <User />
          <span className="hidden sm:block">Meu Perfil</span>
        </Button>
        <Button variant={"secondary"}>
          <Bell />
          <span className="hidden sm:block">Notificações</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
