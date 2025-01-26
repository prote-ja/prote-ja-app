import React, { createContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/client";
import { Database } from "@/types/database.types";
import { getUser } from "@/db/users";
import { updateUserFcmToken } from "@/lib/notifications";

export interface AuthContextInterface {
  session: Session | null;
  user: Database["public"]["Tables"]["users"]["Row"] | null;
  loading: boolean;
  setUser: React.Dispatch<
    React.SetStateAction<Database["public"]["Tables"]["users"]["Row"] | null>
  >;
}

export const AuthContext = createContext<AuthContextInterface>({
  session: null,
  user: null,
  loading: false,
  setUser: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<
    Database["public"]["Tables"]["users"]["Row"] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
      })
      .finally(() => {
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      setLoading(true);
      getUser(session.user.id)
        .then(({ data, error }) => {
          if (error) {
            console.error(error);
            return;
          }
          setUser(data ?? null);

          if (data) {
            updateUserFcmToken(data).catch((error) => {
              console.error(error);
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        loading,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
