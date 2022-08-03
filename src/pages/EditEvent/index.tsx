import {
  Image,
  VStack,
  HStack,
  Box,
  keyframes,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";

import imageDestak3 from "../../assets/images/image3.png";
import logo from "../../assets/images/logo.png";
import { CardEvents } from "../../components/CardEvents";

const AppearFromRight = keyframes`
from {opacity: 0;}
to {transform: translateX(-5px)}
`;

export const EditEvent = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {isLargerThan1280 ? (
        <>
          <Box bg={"theme.white"} w="194vh">
            <HStack spacing={150}>
              <Image
                src={imageDestak3}
                alt="banner"
                h={"100vh"}
                w={"80vh"}
                boxShadow={"dark-lg"}
                animation={`${AppearFromRight} 3s`}
              />
              <VStack spacing={10}>
                <Image src={logo} alt="logo" />
                <Heading>Editar evento</Heading>
                <CardEvents
                  color="#f59c0d"
                  date={"22-03"}
                  description={"Comemoração do aniverssário da cidade"}
                  tittle={"Anivessário da cidade"}
                  id={20}
                />
              </VStack>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          {/* mobile */}
          <Box bg={"theme.white"} h="99.2vh">
            <VStack spacing={10}>
              <Image src={logo} alt="logo" mt={50} />
              <Heading>Editar evento</Heading>
              <CardEvents
                color="#f59c0d"
                date={"22-03"}
                description={"Comemoração do aniverssário da cidade"}
                tittle={"Anivessário da cidade"}
                id={27}
              />
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};
