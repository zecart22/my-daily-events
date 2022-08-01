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
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";

export const CreatEventForm = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e: any) => setInput(e.target.value);
  const isError = input === "";

  return (
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
          Criar Evento
        </Text>
        <FormControl isRequired>
          <FormLabel>Titulo</FormLabel>
          <Input placeholder="titulo do evento" w={"290px"} type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Descrição</FormLabel>
          <Textarea placeholder="descrição do evento" w={"290px"} h={"170px"} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Data</FormLabel>
          <Input placeholder="data do seu evento" w={"290px"} type="date" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Cor</FormLabel>
          <Input placeholder="data do seu evento" w={"290px"} type="color" />
        </FormControl>
        <Button
          bg={"theme.blue"}
          w={"190px"}
          children={"Enviar"}
          color={"theme.white"}
          type={"submit"}
        />
      </VStack>
    </Flex>
  );
};
