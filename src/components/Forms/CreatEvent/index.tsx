import {
  Text,
  FormControl,
  FormLabel,
  Flex,
  VStack,
  Button,
  useToast,
  useDisclosure,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../../services";
import { ModalExpiredToken } from "../../ModalExpiredToken";

import * as yup from "yup";
import { useState } from "react";

interface LoginData {
  titulo: string;
  descricao: string;
  data: string;
  cor: string;
}

const loginSchema = yup.object().shape({
  titulo: yup.string().required(" obrigatório"),
  descricao: yup.string().required(" obrigatória"),
  cor: yup.string().required(" obrigatória"),
  data: yup.date().required("obrigatório"),
});

export const CreatEventForm = () => {
  const toast = useToast();

  const today = new Date();

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDate, setInputDate] = useState("");

  const [inputColor, setInputColor] = useState("");

  const handleInputChangeTitle = (e: any) => setInputTitle(e.target.value);

  const handleInputChangeDescription = (e: any) =>
    setInputDescription(e.target.value);

  const handleInputChangeDate = (e: any) => setInputDate(e.target.value);

  const handleInputChangeColor = (e: any) => setInputColor(e.target.value);

  const isErrorTitle = inputTitle === "";
  const isErrorDescription = inputDescription === "";
  const isErrorDate = inputDate === "";
  const isErrorColor = inputColor === "";

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const token = localStorage.getItem("@AcessToken");

  const handleCreate = (data: LoginData) => {
    const choyceDate = new Date(data.data);
    if (choyceDate > today) {
      api
        .post("/eventos_diarios", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          toast({
            position: "top",
            title: "Yes...!",
            description: "evento criado",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch((err) => {
          onOpen();
        });
    } else {
      toast({
        position: "top",
        title: "A data inválida!! ",
        description: "A data escolhida já passou, escolha uma outra data",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <ModalExpiredToken isOpen={isOpen} onClose={onClose}></ModalExpiredToken>

      <Flex
        w={"365px"}
        h={"670px"}
        border={"1px solid"}
        borderColor={"theme.gray"}
        boxShadow={"md"}
        justifyContent={"center"}
        bg={"theme.white"}
      >
        <VStack spacing={5}>
          <Text fontSize={24} mt={"10px"}>
            Crian evento
          </Text>
          <FormControl isInvalid={isErrorTitle} isRequired>
            <FormLabel>Titulo</FormLabel>
            <Input
              placeholder="titulo"
              w={"290px"}
              type="text"
              {...register("titulo")}
              value={inputTitle}
              onChange={handleInputChangeTitle}
            />
            {!isErrorTitle ? (
              <FormHelperText>
                Adicione um titulo para seu evento
              </FormHelperText>
            ) : (
              <FormErrorMessage>Título obrigatório</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={isErrorDescription}>
            <FormLabel>Decrição</FormLabel>
            <Input
              placeholder="descrição"
              w={"290px"}
              type={"text"}
              {...register("descricao")}
              value={inputDescription}
              onChange={handleInputChangeDescription}
            />
            {!isErrorDescription ? (
              <FormHelperText>
                Adicione uma descrição para seu evento
              </FormHelperText>
            ) : (
              <FormErrorMessage>descrição obrigatória</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorDate}>
            <FormLabel>Data</FormLabel>
            <Input
              placeholder="data"
              w={"290px"}
              type={"datetime-local"}
              {...register("data")}
              value={inputDate}
              onChange={handleInputChangeDate}
            />
            {!isErrorDate ? (
              <FormHelperText>
                Selecione uma data para seu evento
              </FormHelperText>
            ) : (
              <FormErrorMessage>Data obrigatória</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isErrorColor}>
            <FormLabel>Cor</FormLabel>
            <Input
              placeholder="cor"
              w={"290px"}
              type="color"
              value={inputColor}
              {...register("cor")}
              onChange={handleInputChangeColor}
            />
            {!isErrorColor ? (
              <FormHelperText>Adicione uma cor para seu evento</FormHelperText>
            ) : (
              <FormErrorMessage>Cor obrigatória</FormErrorMessage>
            )}
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
    </>
  );
};
