import { ChakraProvider } from "@chakra-ui/react";
import { EventsProvider } from "./Events";

import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

import theme from "../style/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <EventsProvider>
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  </EventsProvider>
);
