import { getAllTotemsView } from "@/db/totems";
import { getAllWearablesView } from "@/db/wearables";
import { Database } from "@/types/database.types";
import {
  createContext,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

// Define the context value
export interface DevicesContextInterface {
  totems: Database["public"]["Views"]["totems_view"]["Row"][];
  wearables: Database["public"]["Views"]["wearables_view"]["Row"][];

  loading: boolean;
  refresh: () => void;
}

// Create the context with default values
export const DevicesContext = createContext<DevicesContextInterface>({
  totems: [],
  wearables: [],
  loading: false,
  refresh: () => {},
});

const REFRESH_RATE = 5; // Adjust the refresh rate as needed

export const DevicesProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [totems, setTotems] = useState<
    Database["public"]["Views"]["totems_view"]["Row"][]
  >([]);
  const [wearables, setWearables] = useState<
    Database["public"]["Views"]["wearables_view"]["Row"][]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch data from the API
  const fetchUpdatedData = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await getAllWearablesView();
      if (error) {
        throw error;
      }
      setWearables(data ?? []);
    } catch (error) {
      console.error("Error fetching wearables:", error);
    }

    try {
      const { data, error } = await getAllTotemsView();
      if (error) {
        throw error;
      }
      setTotems(data ?? []);
    } catch (error) {
      console.error("Error fetching totems:", error);
    }
    setLoading(false);
  }, []);

  // Manual refresh function
  const refresh = useCallback(() => {
    fetchUpdatedData();
  }, [fetchUpdatedData]);

  // Automatically fetch data at the specified refresh rate
  useEffect(() => {
    fetchUpdatedData();

    const interval = setInterval(() => {
      fetchUpdatedData();
    }, REFRESH_RATE * 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [fetchUpdatedData]);

  return (
    <DevicesContext.Provider value={{ totems, wearables, loading, refresh }}>
      {children}
    </DevicesContext.Provider>
  );
};
