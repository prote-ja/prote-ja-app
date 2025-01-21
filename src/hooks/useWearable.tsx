import { getWearableById } from "@/db/wearables";
import { Database } from "@/types/database.types";
import { useEffect, useState } from "react";

interface UseWearableReturn {
  wearable: Database["public"]["Views"]["wearables_view"]["Row"] | null;
  loading: boolean;
}

export function useWearable(id: string | undefined): UseWearableReturn {
  const [wearable, setWearable] = useState<
    Database["public"]["Views"]["wearables_view"]["Row"] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    const fetchWearable = async () => {
      setLoading(true);
      try {
        const res = await getWearableById(id);

        if (res.error) {
          console.error("Error fetching wearable:", res.error);
          setWearable(null);
        } else {
          setWearable(res.data);
        }
      } catch (error) {
        console.error("Unexpected error fetching wearable:", error);
        setWearable(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWearable();
  }, [id]);

  return { wearable, loading };
}
