import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  useToast,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import "./index.css";
import agendaIcon from "../../assets/images/icon.png";
import { Link } from "react-router-dom";
import { ModalDeleteConfirmation } from "../ModalDeletConfirmation";
import { MdDateRange } from "react-icons/md";
import { api } from "../../services";
import { ModalExpiredToken } from "../ModalExpiredToken";
import moment, { Moment } from "moment";
interface CardEventsProps {
  tittle: string;
  description: string;
  date: string;
  color: string;
  id: number;
  eventsData: any;
  setEventsData: any;
}

export const CardEvents = ({
  tittle,
  description,
  date,
  color,
  id,
  eventsData,
  setEventsData,
}: CardEventsProps) => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = localStorage.getItem("@AcessToken");

  const handleDelete = async () => {
    await api
      .delete("/eventos_diarios/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const index = eventsData.findIndex((e: any) => e.id === id);
        eventsData.splice(index, 1);
        setEventsData([...eventsData]);
        toast({
          position: "top",
          title: "Tudo certo",
          description: "Deletando evento",
          status: "loading",
          duration: 500,
          isClosable: true,
        });
        onClose();
      })
      .catch((err) => {
        console.log(err);
        onOpen();
      });
  };

  const emptyDate = "0000-00-00 00:00:00";

  let newDate = moment(date).format("DD/MM/YYYY");
  let hour = moment(date).format("hh:mm");

  const paramsURL = `/editevent/${id}`;

  return (
    <>
      <ModalExpiredToken isOpen={isOpen} onClose={onClose} />
      <Box
        border="1px"
        borderColor="theme.white"
        mt="30px"
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
        ml={5}
        mr={5}
      >
        <VStack spacing={5} mt={5}>
          <HStack
            borderRadius="10px  10px 0px 0px"
            bg={color}
            border="1px"
            borderColor="gray.50"
            width="312px"
            height={"80px"}
            mt={-4}
          >
            {tittle === "" ? (
              <Text
                w={"220px"}
                fontWeight={"semibold"}
                color={"theme.black"}
                className={"title"}
                fontSize={"20px"}
              >
                {"Evento sem t??tulo"}
              </Text>
            ) : (
              <Text
                w={"220px"}
                fontWeight={"semibold"}
                color={"theme.black"}
                className={"title"}
                fontSize={"20px"}
              >
                {tittle.toLocaleUpperCase()}
              </Text>
            )}

            <Image src={agendaIcon} />
          </HStack>
          <Text w={"200px"}>Descri????o : {description}</Text>
          <HStack spacing={5}>
            <MdDateRange size={35} color={"#011a3f"} />
            {date === emptyDate ? (
              <Text color={"theme.red"} fontSize={10} w={"150px"}>
                {"clique em editar evento para adicionar uma data v??lida"}
              </Text>
            ) : (
              <VStack>
                <Text fontSize={20}>Data : {newDate}</Text>
                <Text fontSize={20}> Hor??rio : {hour}</Text>
              </VStack>
            )}
          </HStack>
          <Button
            bg={"theme.darkBlue"}
            color={"theme.white"}
            w="220px"
            fontFamily={"Permanent Marker"}
            mb={20}
            _hover={{ bg: "theme.blue" }}
            fontSize={20}
          >
            <Link to={`/editevent/${id}`}>Editar Evento</Link>
          </Button>
          <ModalDeleteConfirmation
            handleDelete={handleDelete}
            tittle={tittle}
          />
        </VStack>
      </Box>
    </>
  );
};
