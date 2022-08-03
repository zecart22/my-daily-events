import {
  Center,
  Flex,
  HStack,
  VStack,
  Image,
  Box,
  Link,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

import { FaUserCircle } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import eventList from "../../assets/images/eventList.png";

export const Header = () => {
  const history = useHistory();

  const handleNavigation = (path: any) => {
    return history.push(path);
  };

  const [isLargerThan1302] = useMediaQuery("(min-width: 1302px)");

  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <>
      <Flex
        h="150px"
        flexDirection="row"
        justifyContent="space-between"
        px="5"
        py="1"
        bg="primary.main"
        boxShadow="0px 1px 4px"
        position="relative"
        width="100%"
        zIndex="100"
      >
        {isLargerThan1302 ? (
          <>
            <Flex>
              <HStack spacing={300}>
                <Image src={logo} />
                <Image src={eventList} />
              </HStack>
            </Flex>
            <Flex alignItems="flex-end" mb={"10px"}>
              <HStack spacing="8" mr={5}>
                <VStack spacing={2}>
                  <FaUserCircle size={45} />

                  <Text
                    textDecoration={"none"}
                    fontWeight={"extrabold"}
                    textAlign={"left"}
                    color={"gray"}
                  >
                    Olá {"usuário"}
                  </Text>
                </VStack>
                <VStack>
                  <Box
                    as="button"
                    onClick={() => handleNavigation("/createvent")}
                  >
                    <CgAddR size={45} />
                  </Box>

                  <Text
                    textDecoration={"none"}
                    fontWeight={"extrabold"}
                    color={"gray"}
                  >
                    Adicionar Eventos
                  </Text>
                </VStack>
              </HStack>
            </Flex>
          </>
        ) : (
          <>
            <Flex>
              <VStack>
                <Image src={logo} />
                <Image src={eventList} w="230px" h="30px" />
              </VStack>
            </Flex>
            <Flex alignItems="flex-end" mb={"2"}>
              <VStack spacing="2">
                <Box
                  as="button"
                  onClick={() => handleNavigation("/createvent")}
                >
                  <CgAddR size={45} />
                </Box>
                <Text
                  textDecoration={"none"}
                  fontWeight={"extrabold"}
                  color={"gray"}
                  fontSize={"10px"}
                >
                  Adicionar Eventos
                </Text>
              </VStack>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};
