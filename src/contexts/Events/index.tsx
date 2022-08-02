/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode } from "react";
import Events from "../Events/events";

interface Evts {
  titulo: string;
  descricao: string;
  data: string;
  cor: string;
  created_at: string;
  deleted_at: null;
  updated_at: string;
  id: number;
}

interface EventsProviderProps {
  children: ReactNode;
}

interface EventsProviderData {
  events: Evts[];
}

export const EventsContext = createContext<EventsProviderData>(
  {} as EventsProviderData
);

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const events = Events;
  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};
