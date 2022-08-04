import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { ModalSucess } from "../../ModallSucess";
import { ModalFail } from "../../ModalFail";
import { useForm } from "react-hook-form";
import { api } from "../../../services";
import { Redirect, useHistory } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const LoginForm = () => {
  const {
    isOpen: isModalSucessOpen,
    onOpen: onModalSucessOpen,
    onClose: onModalSucessClose,
  } = useDisclosure();
  const {
    isOpen: isModalFailOpen,
    onOpen: onModalFailOpen,
    onClose: onModalFailClose,
  } = useDisclosure();

  const [isSucess, setIsSucess] = useState(false);

  const history = useHistory();
  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginData) => {
    signIn(data)
      .then((response) => {
        console.log(response);
        setIsSucess(true);
        onModalSucessOpen();
      })
      .catch((err) => {
        console.log(err);
        setIsSucess(false);
        onModalFailOpen();
      });
  };

  return (
    <>
      <ModalFail isOpen={isModalFailOpen} onClose={onModalFailClose} />
      <ModalSucess isOpen={isModalSucessOpen} onClose={onModalSucessClose} />
      <Flex
        w={"365px"}
        h={"370px"}
        border={"1px solid"}
        borderColor={"theme.gray"}
        boxShadow={"md"}
        justifyContent={"center"}
        bg={"theme.white"}
      >
        <VStack spacing={5}>
          <Text fontSize={24} mt={"10px"}>
            Login
          </Text>
          <FormControl isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="seu email"
              w={"290px"}
              type="email"
              {...register("email")}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="sua senha"
              w={"290px"}
              type="password"
              {...register("password")}
            />
          </FormControl>
          <Button
            bg={"theme.blue"}
            w={"190px"}
            children={"Entrar"}
            color={"theme.white"}
            type={"submit"}
            onClick={handleSubmit(handleLogin as any)}
          />
        </VStack>
      </Flex>
    </>
  );
};
