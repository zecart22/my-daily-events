import {
  Text,
  useMediaQuery,
  Box,
  HStack,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";

import agendaIcon from "../../assets/images/icon.png";
import { MdDateRange } from "react-icons/md";

interface CardEventsProps {
  tittle: string;
  description: string;
  date: string;
  color: string;
}

export const CardEvents = ({
  tittle,
  description,
  date,
  color,
}: CardEventsProps) => {
  return (
    <Box
      border="1px"
      borderColor="theme.white"
      mt="20px"
      _hover={{
        transform: "translateY(2px)",
      }}
      bg={"theme.white"}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderRadius="10px  10px 0px 0px"
      width="310px"
      height={"380px"}
      textAlign={"center"}
      justifyContent={"column"}
      boxShadow="lg"
    >
      <VStack spacing={5} mt={5}>
        <HStack
          borderRadius="10px  10px 0px 0px"
          bg={color}
          border="1px"
          borderColor="theme.white"
          width="310px"
          height={"80px"}
        >
          <Text
            w={"220px"}
            webkit-text-stroke="3px white"
            fontWeight={"semibold"}
            color={"theme.black"}
          >
            {" "}
            {tittle.toLocaleUpperCase()}
          </Text>
          <Image src={agendaIcon} />
        </HStack>
        <Text w={"200px"}>Descrição : {description}</Text>
        <HStack spacing={5}>
          <MdDateRange size={35} color={"#011a3f"} />

          <Text fontSize={25}>{date}</Text>
        </HStack>
        <Button
          bg={"theme.darkBlue"}
          w="220px"
          fontFamily={"Permanent Marker"}
          color={"theme.white"}
          _hover={{ bg: "theme.blue" }}
          fontSize={20}
        >
          editar evento
        </Button>
        <Button
          bg={"theme.darkBlue"}
          w="220px"
          fontFamily={"Permanent Marker"}
          color={"theme.white"}
          mb={20}
          _hover={{ bg: "theme.blue" }}
          fontSize={20}
        >
          deletar evento
        </Button>
      </VStack>
    </Box>
  );
};
