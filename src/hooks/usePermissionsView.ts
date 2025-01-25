import { getDevicePermissionsView } from "@/db/trackingAndPermissions";
import { Database } from "@/types/database.types";
import { useEffect, useState, useCallback } from "react";

interface UsePermissionsViewReturn {
  permissions: Database["public"]["Views"]["permissions_view"]["Row"][];
  loading: boolean;
  forceUpdate: () => void;
}

export function usePermissionsView(
  id: string | null
): UsePermissionsViewReturn {
  const [permissions, setWearable] = useState<
    Database["public"]["Views"]["permissions_view"]["Row"][]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const forceUpdate = useCallback(() => {
    setRefreshKey((prevKey) => prevKey + 1);
    console.log("forceUpdate");
  }, []);

  useEffect(() => {
    if (!id) return;
    const fetchWearable = async () => {
      setLoading(true);
      try {
        const res = await getDevicePermissionsView(id);

        if (res.error) {
          console.error("Error fetching permissions:", res.error);
          setWearable([]);
        } else {
          setWearable(res.data);
        }
      } catch (error) {
        console.error("Unexpected error fetching permissions:", error);
        setWearable([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWearable();
  }, [id, refreshKey]);

  return { permissions, loading, forceUpdate };
}
