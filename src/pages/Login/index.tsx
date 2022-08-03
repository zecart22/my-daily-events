import {
  Image,
  VStack,
  HStack,
  Box,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react";
import { LoginForm } from "../../components/Forms/Login";
import imageDestak from "../../assets/images/image1.png";
import logo from "../../assets/images/logo.png";

const AppearFromRight = keyframes`
from {opacity: 0;}
to {transform: translateX(-5px)}
`;

export const Login = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {isLargerThan1280 ? (
        <>
          <Box bg={"gray.10"} w="194vh">
            <HStack spacing={150}>
              <Image
                src={imageDestak}
                alt="banner"
                h={"100vh"}
                w={"80vh"}
                boxShadow={"dark-lg"}
                animation={`${AppearFromRight} 3s`}
              />
              <VStack spacing={10}>
                <Image src={logo} alt="logo"></Image>
                <LoginForm />
              </VStack>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          {/* mobile */}
          <Box bg={"theme.white"} h="99.2vh">
            <VStack spacing={10}>
              <Image src={logo} alt="logo" mt={50}></Image>

              <LoginForm />
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};
