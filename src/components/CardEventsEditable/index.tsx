import {
  Text,
  Box,
  HStack,
  Button,
  VStack,
  Image,
  Input,
  useToast,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";

import "./index.css";
import agendaIcon from "../../assets/images/icon.png";
import { api } from "../../services";
import { HiArrowLeft } from "react-icons/hi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ModalExpiredToken } from "../ModalExpiredToken";

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
  data: string;
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavigation = (path: any) => {
    return history.push(path);
  };

  const today = new Date();

  const ChangeEventSchema = yup.object().shape({
    titulo: yup.string(),
    descricao: yup.string(),
    data: yup.string(),
    cor: yup.string(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ChangeEventSchema),
  });

  const toast = useToast();
  const token = localStorage.getItem("@AcessToken");

  const handleEdit = (data: EditData) => {
    const choyceDate = new Date(data.data);
    if (choyceDate > today) {
      api
        .put("/eventos_diarios/" + id, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);

          toast({
            position: "top",
            title: "Tudo certo",
            description: "Evento editado",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          handleNavigation("/dashboard");
        })
        .catch((err) => {
          onOpen();
          console.log(err);
        });
    } else {
      toast({
        position: "top",
        title: "Nova data inválida!! ",
        description: "A data escolhida já passou, escolha uma outra data",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <ModalExpiredToken isOpen={isOpen} onClose={onClose} />
      <Heading> Editando evento</Heading>
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
        width="350px"
        height={"430px"}
        textAlign={"center"}
        justifyContent={"column"}
        boxShadow="lg"
      >
        <VStack spacing={5} mt={5}>
          <HStack
            spacing={10}
            contentEditable={"true"}
            borderRadius="10px  10px 0px 0px"
            bg={color}
            border="1px"
            borderColor="gray.50"
            width="352px"
            height={"80px"}
            mt={-4}
          >
            <Input
              defaultValue={tittle}
              ml={5}
              contentEditable={"true"}
              w={"220px"}
              fontWeight={"semibold"}
              color={"theme.black"}
              className={"title"}
              fontSize={"20px"}
              placeholder={tittle.toLocaleUpperCase()}
              variant="flushed"
              {...register("titulo")}
            />

            <Image src={agendaIcon} />
          </HStack>
          <Input
            defaultValue={description}
            ml={5}
            contentEditable={"true"}
            w={"320px"}
            h={"50px"}
            fontWeight={"semibold"}
            color={"theme.black"}
            className={"title"}
            fontSize={"20px"}
            placeholder={description}
            _placeholder={{ width: 300, height: 300 }}
            variant="flushed"
            {...register("descricao")}
          />

          <HStack spacing={5}>
            <Input
              defaultValue={date}
              type={"datetime-local"}
              ml={5}
              contentEditable={"true"}
              w={"320px"}
              h={"50px"}
              fontWeight={"semibold"}
              color={"theme.black"}
              className={"title"}
              fontSize={"20px"}
              placeholder={date}
              _placeholder={{ width: 300, height: 300 }}
              variant="flushed"
              {...register("data")}
            />
          </HStack>
          <Text>Escolha a nova cor para seu evento</Text>
          <Input
            type={"color"}
            {...register("cor")}
            defaultValue={color}
          ></Input>
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
      <HStack>
        <HiArrowLeft size={30} color={"red"} />
        <Link to={`/dashboard`}>
          <Text color={"red"} fontSize={[20, 25]}>
            Voltar para todos eventos
          </Text>
        </Link>
      </HStack>
    </>
  );
};
