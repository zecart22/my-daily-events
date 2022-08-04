import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  keyframes,
  VStack,
  HStack,
  Heading,
  Box,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

import { CardEventsEditable } from "../CardEventsEditable";
import imageDestak3 from "../../assets/images/image3.png";

import logo from "../../assets/images/logo.png";

interface ModalProps {
  titulo: string;
  descricao: string;
  data: string;
  cor: string;
  id: number;
}

export const Modall = ({ id, cor, titulo, descricao, data }: ModalProps) => {
  const [isLargerThan1085] = useMediaQuery("(min-width: 1085px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const AppearFromRight = keyframes`

from {opacity: 0;}
to {transform: translateX(-5px)}
`;

  return (
    <>
      <Button
        onClick={onOpen}
        fontWeight={"bold"}
        bg={"theme.darkBlue"}
        w="220px"
        fontFamily={"Permanent Marker"}
        color={"theme.white"}
        _hover={{ bg: "theme.blue" }}
        fontSize={20}
      >
        Editar Evento
      </Button>
      {isLargerThan1085 ? (
        <>
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
            size={"full"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box bg={"theme.white"} w="194vh">
                  <HStack spacing={150}>
                    <Image
                      src={imageDestak3}
                      alt="banner"
                      h={"95vh"}
                      w={"70vh"}
                      boxShadow={"dark-lg"}
                      animation={`${AppearFromRight} 3s`}
                    />
                    <VStack spacing={10}>
                      <Image src={logo} alt="logo" />
                      <Heading>Editar evento</Heading>
                      <CardEventsEditable
                        tittle={titulo}
                        description={descricao}
                        date={data}
                        color={cor}
                        id={id}
                      />
                      <Button
                        color={"theme.red"}
                        mr={3}
                        onClick={onClose}
                        width={"100px"}
                        height={"40px"}
                      >
                        Fechar
                      </Button>
                    </VStack>
                  </HStack>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
            size={"sm"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={10}>
                  <Image src={logo} alt="logo" />
                  <Heading>Editar evento</Heading>
                  <CardEventsEditable
                    tittle={titulo}
                    description={descricao}
                    date={data}
                    color={cor}
                    id={id}
                  />
                  <Button
                    mr={3}
                    onClick={onClose}
                    width={"310px"}
                    height={"40px"}
                    color={"#db0505"}
                  >
                    Fechar
                  </Button>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};
