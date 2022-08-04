import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../../services";
import { Redirect, useHistory } from "react-router";
import * as yup from "yup";

interface LoginData {
  titulo: string;
  descricao: string;
  date: string;
  cor: string;
}

const loginSchema = yup.object().shape({
  titulo: yup.string().required(" obrigatório"),
  descricao: yup.string().required(" obrigatória"),
  date: yup.string().required(" obrigatória"),
  cor: yup.string().required(" obrigatória"),
});

export const CreatEventForm = () => {
  const history = useHistory();
  const { accessToken } = useAuth();
  const toast = useToast();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const token = localStorage.getItem("@AcessToken");

  const handleCreate = (data: LoginData) => {
    console.log(data);
    api
      .post("/eventos_diarios", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast({
          position: "top",
          title: "Evento criado com sucesso",
          description: "Parabéns mais um evento criado ;)",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          position: "top",
          title: "Não foi possível criar o evento",
          description: "Tente novamente mais tarde",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      w={"365px"}
      h={"570px"}
      border={"1px solid"}
      borderColor={"theme.gray"}
      boxShadow={"md"}
      justifyContent={"center"}
      bg={"theme.white"}
    >
      <VStack spacing={5}>
        <Text fontSize={24} mt={"10px"}>
          Add Event
        </Text>
        <FormControl isRequired>
          <FormLabel>Titulo</FormLabel>
          <Input
            placeholder="titulo"
            w={"290px"}
            type="text"
            {...register("titulo")}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Decrição</FormLabel>
          <Input
            placeholder="descrição"
            w={"290px"}
            type="text"
            {...register("descricao")}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Data</FormLabel>
          <Input
            placeholder="data"
            w={"290px"}
            type="datetime-local"
            {...register("date")}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Cor</FormLabel>
          <Input
            placeholder="cor"
            w={"290px"}
            type="color"
            {...register("cor")}
          />
        </FormControl>
        <Button
          bg={"theme.blue"}
          w={"190px"}
          children={"Criar evento"}
          color={"theme.white"}
          type={"submit"}
          onClick={handleSubmit(handleCreate as any)}
        />
      </VStack>
    </Flex>
  );
};
