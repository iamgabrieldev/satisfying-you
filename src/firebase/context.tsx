import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { firebaseAuth } from "./config";

interface FirebaseState {
  user: User | null;
}

const FirebaseContext = createContext<FirebaseState | null>(null);

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, setUser);
    return unsub;
  }, []);

  return (
    <FirebaseContext.Provider value={{ user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw Error("useFirebaseContext cannot be used outside a FirebaseProvider");
  }
  return context;
};
