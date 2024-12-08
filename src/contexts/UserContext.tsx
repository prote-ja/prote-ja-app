import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FunctionComponent,
} from "react";
import { useAuth } from "@/hooks/useAuth";
import UserDocument from "@/lib/firebase/schemas/UserDocument";
import { getUserById } from "@/lib/firebase/users";

interface UserContextProps {
  userDoc: UserDocument | null;
  loading: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FunctionComponent<UserProviderProps> = ({ children }) => {
  const [userDoc, setUserDoc] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, authLoading] = useAuth(); // Use the custom useAuth hook

  useEffect(() => {
    if (authLoading) {
      setLoading(true);
      return;
    }

    if (user) {
      const fetchUserDoc = async () => {
        try {
          const userDocument = await getUserById(user.uid);

          if (userDocument.exists()) {
            setUserDoc(userDocument.data());
          } else {
            console.warn("User document not found for UID:", user.uid);
            setUserDoc(null);
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
          setUserDoc(null);
        } finally {
          setLoading(false);
        }
      };

      fetchUserDoc();
    } else {
      setUserDoc(null);
      setLoading(false);
    }
  }, [user, authLoading]);

  return (
    <UserContext.Provider value={{ userDoc, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserDocContext must be used within a UserDocProvider");
  }
  return context;
};
