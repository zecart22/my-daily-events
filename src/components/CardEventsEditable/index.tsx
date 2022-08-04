import {
  Text,
  Box,
  HStack,
  Button,
  VStack,
  Image,
  Input,
} from "@chakra-ui/react";

import "./index.css";
import agendaIcon from "../../assets/images/icon.png";
import { api } from "../../services";
import { MdDateRange } from "react-icons/md";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

interface CardEventsProps {
  tittle: string;
  description: string;
  date: string;
  color: string;
  id: number;
}

interface EditData {
  titulo: string;
  descricao: string;
  date: string;
  cor: string;
}

export const CardEventsEditable = ({
  tittle,
  description,
  date,
  color,
  id,
}: CardEventsProps) => {
  const history = useHistory();

  const ChangeEventSchema = yup.object().shape({
    titulo: yup.string(),
    descricao: yup.string(),
    date: yup.string(),
    cor: yup.string(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ChangeEventSchema),
  });

  const token = localStorage.getItem("@AcessToken");

  const handleEdit = (data: EditData) => {
    api
      .put("/eventos_diarios/" + id, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        alert("Evento editado com sucesso");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      border="1px"
      borderColor="gray.100"
      mt="30px"
      _hover={{
        transform: "translateY(2px)",
      }}
      bg={"theme.white"}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderRadius="10px  10px 0px 0px"
      width="310px"
      height={"390px"}
      textAlign={"center"}
      justifyContent={"column"}
      boxShadow="lg"
    >
      <VStack spacing={5} mt={5}>
        <HStack
          contentEditable={"true"}
          borderRadius="10px  10px 0px 0px"
          bg={color}
          border="1px"
          borderColor="gray.50"
          width="312px"
          height={"80px"}
          mt={-4}
          {...register("titulo")}
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
              contentEditable={"true"}
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
        <Text w={"200px"} contentEditable={"true"} {...register("descricao")}>
          Descrição : {description}
        </Text>
        <HStack spacing={5}>
          <MdDateRange size={35} color={"#011a3f"} />

          <Text fontSize={25} contentEditable={"true"} {...register("data")}>
            {date}
          </Text>
        </HStack>
        <Text>Escolha a nova cor para seu evento</Text>
        <Input type={"color"} {...register("cor")}></Input>
      </VStack>
      <Button
        mt={10}
        colorScheme="blue"
        mr={3}
        width={"250px"}
        height={"40px"}
        onClick={handleSubmit(handleEdit as any)}
      >
        Confirmar edição
      </Button>
    </Box>
  );
};
