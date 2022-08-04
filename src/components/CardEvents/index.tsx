import {
  Text,
  useMediaQuery,
  Box,
  HStack,
  Button,
  VStack,
  Image,
  useToast,
} from "@chakra-ui/react";

import "./index.css";
import agendaIcon from "../../assets/images/icon.png";
import { Modall } from "../modal";
import { ModalDeleteConfirmation } from "../ModalDeletConfirmation";
import { MdDateRange } from "react-icons/md";
import { api } from "../../services";
import moment from "moment";
import { useHistory } from "react-router-dom";

interface CardEventsProps {
  tittle: string;
  description: string;
  date: string;
  color: string;
  id: number;
}

export const CardEvents = ({
  tittle,
  description,
  date,
  color,
  id,
}: CardEventsProps) => {
  const history = useHistory();

  const toast = useToast();

  const recarregarAPagina = () => {
    window.location.reload();
  };

  const handleNavigation = (path: any) => {
    return history.push(path);
  };
  const newDate = moment(date).format("DD/MM/YYYY hh:mm");

  const token = localStorage.getItem("@AcessToken");

  const handleDelete = () => {
    api
      .delete("/eventos_diarios/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        toast({
          position: "top",
          title: "Evento deletado com sucesso",
          description: "Recarregando página...",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(recarregarAPagina, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top",
          title: "Não foi possível deletar o evento",
          description: "Sua sessão expirou faça login novamente",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
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
              {"Evento sem título"}
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
        <Text w={"200px"}>Descrição : {description}</Text>
        <HStack spacing={5}>
          <MdDateRange size={35} color={"#011a3f"} />

          <Text fontSize={25}>{date}</Text>
        </HStack>

        <Modall
          id={id}
          cor={color}
          titulo={tittle}
          descricao={description}
          data={date}
        />
        <ModalDeleteConfirmation handleDelete={handleDelete} tittle={tittle} />
      </VStack>
    </Box>
  );
};
