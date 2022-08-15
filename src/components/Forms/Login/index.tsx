import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  VStack,
  Button,
  useDisclosure,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { useAuth } from "../../../contexts/AuthContext";
import { ModalFail } from "../../ModalFail";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup.string().required("Senha obrigatória"),
});

export const LoginForm = () => {
  const today = new Date();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputChangeEmail = (e: any) => setInputEmail(e.target.value);

  const handleInputChangePassword = (e: any) =>
    setInputPassword(e.target.value);

  const isErrorEmail = inputEmail === "";
  const isErrorPassword = inputPassword === "";

  const {
    isOpen: isModalFailOpen,
    onOpen: onModalFailOpen,
    onClose: onModalFailClose,
  } = useDisclosure();

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
        h={"400px"}
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

          <FormControl isRequired isInvalid={isErrorEmail}>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder="seuemail@email.com"
              w={"290px"}
              type="email"
              {...register("email")}
              value={inputEmail}
              onChange={handleInputChangeEmail}
            />
            {!isErrorEmail ? (
              <FormHelperText>adicione seu email</FormHelperText>
            ) : (
              <FormErrorMessage>email obrigatório</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={isErrorPassword}>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="sua senha"
              w={"290px"}
              type="password"
              {...register("password")}
              value={inputPassword}
              onChange={handleInputChangePassword}
            />
            {!isErrorPassword ? (
              <FormHelperText>coloque sua senha </FormHelperText>
            ) : (
              <FormErrorMessage>senha obrigatória</FormErrorMessage>
            )}
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
