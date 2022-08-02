import {
  Text,
  useMediaQuery,
  Flex,
  Image,
  Box,
  VStack,
  keyframes,
} from "@chakra-ui/react";

import { useContext } from "react";
import { EventsContext } from "../../contexts/Events";
import { Header } from "../../components/Header";
import { CardEvents } from "../../components/CardEvents";
import { array } from "yup";

export const DashBoard = () => {
  const { events } = useContext(EventsContext);
  console.log(events);

  const AppearFromRight = keyframes`
  from {opacity: 0;}
  to {transform: translateX(50px)}
`;

  return (
    <Box>
      <Header />
      <Flex
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        animation={`${AppearFromRight} 1s`}
      >
        {events &&
          events.map((events: any) => (
            <CardEvents
              color={events.cor}
              date={events.data}
              description={events.descricao}
              tittle={events.titulo}
            />
          ))}
      </Flex>
    </Box>
  );
};
