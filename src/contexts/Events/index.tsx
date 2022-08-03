import { createContext, ReactNode } from "react";

import { useState, useEffect } from "react";
import { api } from "../../services";
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
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    api
      .get("/eventos_diarios")
      .then((response) => {
        setEventsData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const events = eventsData;
  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
};
