import {
  Text,
  useMediaQuery,
  Flex,
  Image,
  Box,
  VStack,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { CardEvents } from "../../components/CardEvents";
import eventList from "../../assets/images/eventList.png";

export const DashBoard = () => {
  return (
    <Box>
      <VStack spacing={40}>
        <Header />

        <Flex
          w="1200px"
          bg="primary.main"
          flexWrap={"wrap"}
          flexDirection="row"
          justifyContent={"space-around"}
        >
          <CardEvents
            color="#05ba42"
            date={"22-03"}
            description={"Comemoração do aniverssário da cidade"}
            tittle={"Anivessário da cidade"}
          />
        </Flex>
      </VStack>
    </Box>
  );
};
