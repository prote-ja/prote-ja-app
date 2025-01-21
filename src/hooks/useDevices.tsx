import {
  DevicesContext,
  DevicesContextInterface,
} from "@/contexts/devicesContext";
import { useContext } from "react";

export const useDevices = (): DevicesContextInterface => {
  const context = useContext(DevicesContext);
  if (!context) {
    throw new Error("useTotem must be used within a TotemProvider");
  }
  return context;
};
