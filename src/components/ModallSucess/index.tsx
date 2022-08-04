import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  HStack,
  Text,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { SiOdysee } from "react-icons/si";

interface ModalSucessProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalSucess = ({ isOpen, onClose }: ModalSucessProps) => {
  const history = useHistory();

  const handleNavigation = (path: any) => {
    return history.push(path);
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { onOpen } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <HStack w={"449px"} h={"70px"} bg={"theme.blue"}>
            <ModalHeader
              fontFamily={"heading"}
              color={"theme.white"}
              fontSize={30}
              fontWeight={"extrabold"}
            >
              Yess....!
            </ModalHeader>
            <BsCheckCircle color={"#FFFF"} size={40} />
          </HStack>

          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight={"bold"}>
              Login feito com sucesso escolha o que deseja fazer!
            </Text>
            <VStack mt={5} spacing={5}>
              <Button
                leftIcon={<SiOdysee size={30} />}
                w={"300px"}
                h={"50px"}
                colorScheme={"linkedin"}
                fontFamily={"Titan One"}
                onClick={() => handleNavigation("/dashboard")}
              >
                VER MEUS EVENTOS
              </Button>
              <Button
                leftIcon={<AiOutlineAppstoreAdd size={30} />}
                w={"300px"}
                h={"50px"}
                colorScheme={"linkedin"}
                fontFamily={"Titan One"}
                onClick={() => handleNavigation("/createvent")}
              >
                CRIAR EVENTOS
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
