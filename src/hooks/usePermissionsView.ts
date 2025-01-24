import { getDevicePermissionsView } from "@/db/trackingAndPermissions";
import { Database } from "@/types/database.types";
import { useEffect, useState } from "react";

interface UsePermissionsViewReturn {
  permissions: Database["public"]["Views"]["permissions_view"]["Row"][];
  loading: boolean;
}

export function usePermissionsView(
  id: string | null
): UsePermissionsViewReturn {
  const [permissions, setWearable] = useState<
    Database["public"]["Views"]["permissions_view"]["Row"][]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

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
  }, [id]);

  return { permissions, loading };
}
