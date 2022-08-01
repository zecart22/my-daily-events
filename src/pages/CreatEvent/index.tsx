import {
  Image,
  VStack,
  HStack,
  Box,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react";

import { LoginForm } from "../../components/Forms/Login";
import { CreatEventForm } from "../../components/Forms/CreatEvent";
import imageDestak2 from "../../assets/images/image5.png";
import logo from "../../assets/images/logo.png";

export const CreatEvent = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const AppearFromRight = keyframes`
from {opacity: 0;}
to {transform: translateX(-5px)}
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
                w={"90vh"}
                boxShadow={"dark-lg"}
                animation={`${AppearFromRight} 3s`}
              />
              <VStack spacing={10}>
                <CreatEventForm />
              </VStack>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          {/* mobile */}
          <Box bg={"gray.10"} h="110vh">
            <VStack spacing={10}>
              <Image src={logo} alt="logo" mt={50}></Image>

              <CreatEventForm />
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};
