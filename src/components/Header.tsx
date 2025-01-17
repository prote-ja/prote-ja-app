import { FunctionComponent, useEffect, useState } from "react";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import ProtejaName from "@/assets/proteja_name.svg";
import { Button } from "./ui/button";
import { Bell, User, ChevronLeft, Download } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { usePWAInstall } from "react-use-pwa-install";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const session = useAuth();
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);
  const install = usePWAInstall();

  useEffect(() => {
    // Update back button visibility based on route
    if (session && location.pathname !== "/dashboard") {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location.pathname, session]);

  return (
    <div className="border-b flex items-center sticky top-0 z-10 backdrop-blur md:shadow">
      <div className="p-2 justify-between flex items-center h-16 md:px-4 lg:px-10 w-full mx-auto">
        {/* Left Section */}
        <div
          className={cn(
            "flex w-32 rounded-md items-center absolute py-1",
            showBackButton ? "" : ""
          )}
        >
          {/* Back Button */}
          <Link
            to={".."}
            className={cn(
              "flex items-center w-32 absolute h-12 rounded-md hover:bg-secondary/80",
              showBackButton
                ? "translate-x-0 opacity-100 bg-background border"
                : "-translate-x-full opacity-0 pointer-events-none"
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
            // Translation based on https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
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
              {install ? (
                <Button
                  variant={"secondary"}
                  className="w-12 h-12 md:w-auto md:h-auto [&_svg]:size-5"
                  onClick={install}
                >
                  <Download />
                  <span className="hidden md:block">Download</span>
                </Button>
              ) : null}
              <Link to="/dashboard/subscribe">
                <Button
                  variant={"secondary"}
                  className="w-12 h-12 md:w-auto md:h-auto py-2 px-2 md:px-4"
                >
                  <img src={ProtejaLogo} className="h-6 md:h-5" alt="" />
                  <span className="hidden md:block">ProteJÁ Plus</span>
                </Button>
              </Link>
              <Link to="/dashboard/profile">
                <Button
                  variant={"secondary"}
                  className="w-12 h-12 md:w-auto md:h-auto [&_svg]:size-5"
                >
                  <User />
                  <span className="hidden md:block">Meu Perfil</span>
                </Button>
              </Link>
              <Link to="/dashboard/alerts">
                <Button
                  variant={"secondary"}
                  className="w-12 h-12 md:w-auto md:h-auto [&_svg]:size-5"
                >
                  <Bell />
                  <span className="hidden md:block">Notificações</span>
                </Button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
