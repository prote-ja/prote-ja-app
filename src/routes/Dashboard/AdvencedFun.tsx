import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Bell } from "lucide-react";
import { useNavigate } from "react-router";
import React from "react";

interface AdvancedFuncProps {
  children: ReactNode;
}

const AdvancedFunc: React.FC<AdvancedFuncProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6 mt-8 w-full text-white">
      <div className="flex justify-between items-center">
        <div className="text-xl md:text-3xl font-semibold">
          Funções Avançadas
        </div>
        <Button
          variant="secondary"
          className="ml-4"
          onClick={() => navigate("/subscribe")}
        >
          Desbloquear <Crown size={16} />
        </Button>
      </div>

      <div className="space-y-4 mt-4">
        {React.Children.map(children, (child, _) => (
          <div className="flex justify-between items-center">
            <div className="flex-1">{child}</div>
            <div className="ml-4 w-10 h-10 flex items-center justify-center rounded-full border border-white">
              <Bell
                size={24}
                onClick={() => navigate("/subscribe")}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedFunc;
