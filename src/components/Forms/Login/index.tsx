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

import { useAuth } from "../../../contexts/AuthContext";
import { ModalFail } from "../../ModalFail";
import { useForm } from "react-hook-form";
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
    isOpen: isModalFailOpen,
    onOpen: onModalFailOpen,
    onClose: onModalFailClose,
  } = useDisclosure();

  const { signIn } = useAuth();
  const recarregarAPagina = () => {
    window.location.reload();
  };
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

        recarregarAPagina();
      })
      .catch((err) => {
        console.log(err);

        onModalFailOpen();
      });
  };

  return (
    <>
      <ModalFail isOpen={isModalFailOpen} onClose={onModalFailClose} />

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
          <Text fontSize={10} mt={"10px"} color={"theme.red"}>
            Preencha todos os campos corretamente para fazer o login
          </Text>
          <FormControl isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="seu email de cadastro"
              w={"290px"}
              type="email"
              {...register("email")}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="sua senha de cadastro"
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
