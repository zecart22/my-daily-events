import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  VStack,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useState } from "react";

export const LoginForm = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e: any) => setInput(e.target.value);
  const isError = input === "";

  return (
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
            value={input}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>
              Adicione o email que usou no cadastro.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email é obrigatório.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            placeholder="sua senha"
            w={"290px"}
            type="password"
            value={input}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>Coloque a sua senha</FormHelperText>
          ) : (
            <FormErrorMessage>Senha necessária.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          bg={"theme.blue"}
          w={"190px"}
          children={"Entrar"}
          color={"theme.white"}
          type={"submit"}
        />
      </VStack>
    </Flex>
  );
};
