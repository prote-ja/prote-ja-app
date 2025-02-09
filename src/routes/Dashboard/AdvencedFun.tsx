import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Bell, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import React from "react";

interface AdvancedFuncProps {
  children: ReactNode;
}

const AdvancedFunc: React.FC<AdvancedFuncProps> = ({ children }) => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full text-white">
      <div className="flex flex-wrap items-center justify-between">
        <div className="text-2xl sm:text-2xl md:text-3xl font-semibold flex items-center">
          Funções Avançadas
        </div>
        <Button
          variant="secondary"
          className="sm:ml-4 self-center"
          onClick={() => navigate("/subscribe")}
        >
          Desbloquear <Crown size={16} />
        </Button>
      </div>
      <div className="w-full flex flex-col space-y-4 mt-4">
        {React.Children.map(children, (child, index) => (
          <div
            className="flex justify-between items-center sm:p-2 relative h-[80px] sm:h-auto"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex-1">{child}</div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
              <Bell
                size={24}
                onClick={() => navigate("/subscribe")}
                className="cursor-pointer"
              />
            </div>
            {hoveredIndex === index && (
              <div
                className="absolute w-screen h-full -mx-2 inset-0 flex items-center justify-center bg-[#7357FF] bg-opacity-90 rounded-lg z-10 
                supports-[backdrop-filter]:backdrop-blur-2xl"
              >
                <div className="flex items-center gap-2 px-4 text-center">
                  <span className="text-sm text-white">
                    Disponível apenas para assinantes do ProteJá+
                  </span>
                  <Lock size={24} className="text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedFunc;
