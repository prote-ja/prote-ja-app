import React, { createContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/client";
import { Database } from "@/types/database.types";
import { getUser } from "@/db/users";

export interface AuthContextInterface {
  session: Session | null;
  user: Database["public"]["Tables"]["users"]["Row"] | null;
  setUser: React.Dispatch<
    React.SetStateAction<Database["public"]["Tables"]["users"]["Row"] | null>
  >;
}

export const AuthContext = createContext<AuthContextInterface>({
  session: null,
  user: null,
  setUser: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<
    Database["public"]["Tables"]["users"]["Row"] | null
  >(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
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
      getUser(session.user.id).then(({ data, error }) => {
        if (error) {
          console.error(error);
          return;
        }
        setUser(data.at(0) ?? null);
      });
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
