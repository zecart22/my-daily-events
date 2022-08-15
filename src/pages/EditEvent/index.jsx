import {
  Button,
  useDisclosure,
  keyframes,
  VStack,
  HStack,
  Heading,
  Box,
  Image,
  useMediaQuery,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";

import { CardEventsEditable } from "../../components/CardEventsEditable";
import imageDestak3 from "../../assets/images/image3.png";
import { api } from "../../services";
import logo from "../../assets/images/logo.png";
import { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";

export const EditEvent = () => {
  const { id } = useParams();

  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function loadEvent() {
      await api
        .get(`/eventos_diarios/${id}`)
        .then((response) => {
          setEvent(response.data);
        })
        .catch(() => {
          console.log("EVENTO NÃO ENCONTRADO");
        });
    }

    loadEvent();

    return () => {
      console.log(event);
    };
  }, []);

  const { titulo, descricao, cor, data } = event;

  const [isLargerThan1085] = useMediaQuery("(min-width: 1085px)");

  const AppearFromRight = keyframes`
from {opacity: 0;}
to {transform: translateX(0px)}
`;

  return (
    <>
      {isLargerThan1085 ? (
        <>
          <Box bg={"theme.white"} w="194vh">
            <HStack spacing={150}>
              <Image
                src={imageDestak3}
                alt="banner"
                h={"100vh"}
                w={"70vh"}
                boxShadow={"dark-lg"}
                animation={`${AppearFromRight} 3s`}
              />
              <VStack spacing={10}>
                <Image
                  src={logo}
                  alt="logo"
                  animation={`${AppearFromRight} 5s`}
                />

                {event.length === 0 ? (
                  <></>
                ) : (
                  <CardEventsEditable
                    tittle={titulo}
                    description={descricao}
                    date={data}
                    color={cor}
                    id={event.id}
                  />
                )}
              </VStack>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          <VStack spacing={10}>
            <Image src={logo} alt="logo" />

            {event.length === 0 ? (
              <></>
            ) : (
              <CardEventsEditable
                tittle={titulo}
                description={descricao}
                date={data}
                color={cor}
                id={event.id}
              />
            )}
          </VStack>
        </>
      )}
    </>
  );
};
