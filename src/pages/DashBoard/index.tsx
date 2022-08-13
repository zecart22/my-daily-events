import { Flex, Box, keyframes } from "@chakra-ui/react";
import { api } from "../../services";
import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { CardEvents } from "../../components/CardEvents";

export const DashBoard = () => {
  const [eventsData, setEventsData] = useState([]);

  const loadEvents = useCallback(async () => {
    try {
      const response = await api.get("/eventos_diarios");
      setEventsData(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadEvents();
  }, []);

  const AppearFromRight = keyframes`
  from {opacity: 0;}
  to {transform: translateX(0px)}
`;

  return (
    <Box>
      <Header />
      <Flex
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent={"initial"}
        animation={`${AppearFromRight} 3s`}
        ml={[5, 10]}
      >
        {eventsData &&
          eventsData.map((events: any) => (
            <CardEvents
              color={events.cor}
              date={events.data}
              description={events.descricao}
              tittle={events.titulo}
              id={events.id}
              eventsData={eventsData}
              setEventsData={setEventsData}
            />
          ))}
      </Flex>
    </Box>
  );
};
