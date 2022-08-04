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

export const DashBoard = () => {
  const { events } = useContext(EventsContext);

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
        {events &&
          events.map((events: any) => (
            <CardEvents
              color={events.cor}
              date={events.data}
              description={events.descricao}
              tittle={events.titulo}
              id={events.id}
            />
          ))}
      </Flex>
    </Box>
  );
};
