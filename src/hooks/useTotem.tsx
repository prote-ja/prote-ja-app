import { getTotemById } from "@/db/totems";
import { Database } from "@/types/database.types";
import { useEffect, useState } from "react";

interface useTotemReturn {
  totem: Database["public"]["Views"]["totems_view"]["Row"] | null;
  loading: boolean;
}

export function useTotem(id: string | undefined): useTotemReturn {
  const [totem, setTotem] = useState<
    Database["public"]["Views"]["totems_view"]["Row"] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    const fetchTotem = async () => {
      setLoading(true);
      try {
        const res = await getTotemById(id);

        if (res.error) {
          console.error("Error fetching totem:", res.error);
          setTotem(null);
        } else {
          setTotem(res.data);
        }
      } catch (error) {
        console.error("Unexpected error fetching totem:", error);
        setTotem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTotem();
  }, [id]);

  return { totem, loading };
}
