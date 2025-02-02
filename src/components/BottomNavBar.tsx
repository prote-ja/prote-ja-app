import { FunctionComponent, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router";
import { Home, Plus, SatelliteDish, User, Watch } from "lucide-react";
import { cn } from "@/lib/utils";

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
          "fixed bottom-0 left-0 w-full flex justify-center mb-0",
          isVisible ? "slide-up" : "slide-down"
        )}
      >
        <div className="w-full flex gap-4 justify-around bg-white/20 border-white/50 border-t backdrop-blur-md px-2 py-3 rounded-t-md text-white/60 relative">
          {navigationItems.map(({ route, label, icon: Icon }) => (
            <div key={route} className="relative w-[20%] space-y-1">
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
            <Link to="/device/add">
              <Button
                variant={"secondary"}
                className="rounded-full w-14 h-14 text-primary border-2 [&_svg]:size-8 bg-white shadow-inner"
              >
                <Plus />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavBar;
