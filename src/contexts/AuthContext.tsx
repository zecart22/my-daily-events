import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  accessToken: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used whitin an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@MyDailyEvents:accessToken");

    if (accessToken) {
      return { accessToken };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login/adm", { email, password });
    console.log(response.data);
    const { accessToken } = response.data;

    localStorage.setItem("@MyDailyEvents:accessToken", accessToken);
    window.localStorage.setItem("@AcessToken", response.data.token);

    setData({ accessToken });
  }, []);

  const signOut = useCallback(() => {
    window.localStorage.clear();

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
