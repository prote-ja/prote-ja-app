import { FunctionComponent } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "./ui/button";
import { Bell, User } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const session = useAuth();

  return (
    <div className="p-2 border-b justify-between flex items-center sticky top-0 z-10 backdrop-blur h-16">
      <div className="flex items-center space-x-2 ">
        <img src={ProtejaLogo} alt="proteja-logo" className="max-h-10" />
        <img
          src={ProtejaName}
          alt="proteja-name"
          className="max-w-32 h-8 mb-2"
        />
      </div>
      <div className="gap-2 flex items-center">
        {session ? (
          <>
            <Link to="/profile">
              <Button
                variant={"secondary"}
                className="
              w-12 h-12 sm:w-auto sm:h-auto [&_svg]:size-5
              "
              >
                <User />
                <span className="hidden sm:block">Meu Perfil</span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant={"secondary"}
                className="
              w-12 h-12 sm:w-auto sm:h-auto [&_svg]:size-5
              "
              >
                <Bell />
                <span className="hidden sm:block">Notificações</span>
              </Button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
