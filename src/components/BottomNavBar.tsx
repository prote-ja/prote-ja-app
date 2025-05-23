import { FunctionComponent, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router";
import {
  BluetoothSearching,
  Home,
  Plus,
  SatelliteDish,
  User,
  Watch,
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ValidRoutes = "dashboard" | "wearables" | "totems" | "profile";

interface BottomNavBarProps {}

const navigationItems = [
  { route: "dashboard", label: "Início", icon: Home },
  { route: "wearables", label: "Pulseiras", icon: Watch },
  { route: undefined },
  { route: "totems", label: "Totens", icon: SatelliteDish },
  { route: "profile", label: "Perfil", icon: User },
];

const BottomNavBar: FunctionComponent<BottomNavBarProps> = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<ValidRoutes | undefined>(
    undefined
  );
  const [isVisible, setIsVisible] = useState(false);

  const currentRouteRoot: ValidRoutes | undefined = useMemo(() => {
    const routeRoot = location.pathname.split("/")[1];

    if (
      location.pathname.split("/").at(2) === undefined &&
      navigationItems.map((item) => item.route).includes(routeRoot)
    ) {
      setActiveRoute(routeRoot as ValidRoutes);
      setIsVisible(true); // Set visibility to true when route is valid
      return routeRoot as ValidRoutes;
    }
    setIsVisible(false); // Set visibility to false when route is invalid
    return undefined;
  }, [location.pathname]);

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 md:bottom-4 left-0 w-full flex justify-center mb-0",
          isVisible ? "slide-up" : "slide-down"
        )}
      >
        <div className="w-full flex gap-4 md:max-w-md justify-around bg-white/5 border-white/50 border-t-2 md:border backdrop-blur-3xl px-2 py-3 rounded-t-lg md:rounded-lg text-white/60 relative">
          {navigationItems.map(({ route, label, icon: Icon }) => (
            <div
              key={`${route}-bottom-nav-button`}
              className="relative w-[20%] space-y-1"
            >
              {route === undefined ? (
                <div className="w-[2rem]" />
              ) : (
                <Link
                  to={`/${route}`}
                  className="cursor-default"
                  onClick={() => setActiveRoute(route as ValidRoutes)}
                >
                  <Button
                    variant={"ghost"}
                    className={cn(
                      "flex-col gap-0 [&_svg]:size-6 font-normal px-3 w-full",
                      currentRouteRoot === route &&
                        "!text-white !opacity-100 !bg-transparent"
                    )}
                    disabled={currentRouteRoot === route}
                  >
                    <Icon className="-mb-1" />
                    {label}
                  </Button>
                  <div
                    className={cn(
                      "bg-white mx-1 h-0.5 transition-all duration-500 transform origin-left",
                      activeRoute === route ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              )}
            </div>
          ))}
          {/* Center Button */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="rounded-full w-16 h-16 text-primary border-2 [&_svg]:size-12 border-white bg-white/100 hover:bg-purple-200"
                >
                  <Plus className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="backdrop-blur-md bg-white/10 text-white font-medium py-2 "
                side="top"
              >
                <Link to="/device/add">
                  <DropdownMenuItem className="text-md">
                    <Plus size={32} className="!w-5 !h-5" />
                    Adicionar
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator className="bg-white/30" />

                <Link to="/pairing">
                  <DropdownMenuItem className="text-md">
                    <BluetoothSearching className="!w-4 !h-4" /> Parear Totem
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
