import {
  Text,
  useMediaQuery,
  Flex,
  Image,
  Box,
  VStack,
  keyframes,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { CardEvents } from "../../components/CardEvents";

export const DashBoard = () => {
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
        {/* dados temporários */}
        <CardEvents
          color="#f59c0d"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#05ba42"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#ba057e"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#ba0505"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#f7f4ef"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#09f609"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#46012f"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#ee8686"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#09f609"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
        <CardEvents
          color="#46012f"
          date={"22-03"}
          description={"Comemoração do aniverssário da cidade"}
          tittle={"Anivessário da cidade"}
        />
      </Flex>
    </Box>
  );
};
