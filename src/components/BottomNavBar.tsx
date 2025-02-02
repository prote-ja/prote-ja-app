import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

interface BottomNavBarProps {}

const BottomNavBar: FunctionComponent<BottomNavBarProps> = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center mb-4">
      <div className="max-w-sm flex justify-around bg-white p-2 rounded-lg shadow-lg">
        <Link to="/dashboard">
          <Button>Início</Button>
        </Link>
        <Link to="/wearables">
          <Button>Pulseiras</Button>
        </Link>
        <Link to="/device/add">
          <Button>+</Button>
        </Link>
        <Link to="/totems">
          <Button>Totens</Button>
        </Link>
        <Link to="/profile">
          <Button>Meu Perfil</Button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
