import {
  Image,
  VStack,
  HStack,
  Box,
  keyframes,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";

import { CreatEventForm } from "../../components/Forms/CreatEvent";
import imageDestak2 from "../../assets/images/image6.png";
import logo from "../../assets/images/logo.png";
import { HiArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";

export const CreatEvent = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const history = useHistory();
  const handleNavigation = (path: any) => {
    return history.push(path);
  };

  const AppearFromRight = keyframes`
from {opacity: 0;}
to {transform: translateX(0px)}
`;

  return (
    <>
      {isLargerThan1280 ? (
        <>
          <Box bg={"gray.10"} w="194vh">
            <HStack spacing={150}>
              <Image
                src={imageDestak2}
                alt="banner"
                h={"100vh"}
                w={"100vh"}
                boxShadow={"dark-lg"}
                animation={`${AppearFromRight} 3s`}
              />
              <VStack spacing={10}>
                <HStack spacing={-10}>
                  <Center
                    w="100px"
                    h="100px"
                    bg={"theme.gray"}
                    mr={250}
                    onClick={() => handleNavigation("/dashboard")}
                  >
                    <HiArrowLeft size={30} color={"red"} />
                  </Center>
                  <Text color={"theme.red"} fontSize={30}>
                    Ver eventos
                  </Text>
                </HStack>
                <CreatEventForm />
              </VStack>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          {/* mobile */}
          <Box bg={"theme.white"} h="110vh">
            <VStack spacing={10}>
              <Image src={logo} alt="logo" mt={50}></Image>
              <HStack spacing={-20}>
                <Center
                  w="100px"
                  h="100px"
                  bg={"theme.gray"}
                  mr={250}
                  onClick={() => handleNavigation("/dashboard")}
                >
                  <HiArrowLeft size={30} color={"red"} />
                </Center>
                <Text color={"theme.red"} fontSize={"15"}>
                  Ver eventos
                </Text>
              </HStack>

              <CreatEventForm />
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};
