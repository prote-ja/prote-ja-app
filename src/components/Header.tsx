import { FunctionComponent, useEffect, useState } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "./ui/button";
import { Bell, User, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const session = useAuth();
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    // Update back button visibility based on route
    if (session && location.pathname !== "/dashboard") {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location.pathname, session]);

  return (
    <div className="p-2 border-b justify-between flex items-center sticky top-0 z-10 backdrop-blur h-16">
      {/* Left Section */}
      <div
        className={cn(
          "flex w-32 rounded-md items-center absolute py-1",
          showBackButton ? "" : ""
        )}
      >
        {/* Back Button */}
        <Link
          to={session ? "/dashboard" : "/"}
          className={cn(
            "flex items-center w-32 absolute h-12 rounded-md hover:bg-secondary/80",
            showBackButton
              ? "translate-x-0 opacity-100 bg-background border"
              : "-translate-x-full opacity-0"
          )}
          style={{
            transition:
              "transform 500ms ease-in-out, opacity 500ms ease-in-out",
          }}
        >
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-20 text-white">
            <ChevronLeft className="w-6 h-6" />
            Voltar
          </div>
        </Link>

        {/* Logo */}
        <img
          src={ProtejaLogo}
          alt="proteja-logo"
          className={`max-h-10 absolute ${
            showBackButton ? "translate-x-[5.25rem] pointer-events-none" : ""
          }`}
          style={{
            transition: "transform 500ms ease-in-out",
          }}
        />

        {/* Logo Name */}
        <img
          src={ProtejaName}
          alt="proteja-name"
          className={`max-w-32 h-8 mb-2 ${
            showBackButton
              ? "opacity-0 scale-50 translate-x-24"
              : "opacity-100 scale-100 translate-x-10"
          }`}
          style={{
            transition:
              "transform 500ms ease-in-out, opacity 500ms ease-in-out",
          }}
        />
      </div>

      {/* Right Section */}
      <div className="gap-2 flex items-center ml-auto">
        {session ? (
          <>
            <Link to="/profile">
              <Button
                variant={"secondary"}
                className="w-12 h-12 sm:w-auto sm:h-auto [&_svg]:size-5"
              >
                <User />
                <span className="hidden sm:block">Meu Perfil</span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant={"secondary"}
                className="w-12 h-12 sm:w-auto sm:h-auto [&_svg]:size-5"
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
