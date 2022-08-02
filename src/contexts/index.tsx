import { ChakraProvider } from "@chakra-ui/react";
import { EventsProvider } from "./Events";
import { ReactNode } from "react";

import theme from "../style/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <EventsProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </EventsProvider>
);
