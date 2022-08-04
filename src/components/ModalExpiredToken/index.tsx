import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
  ModalHeader,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

interface ModalExpiredTokenPropos {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalExpiredToken = ({
  isOpen,
  onClose,
}: ModalExpiredTokenPropos) => {
  const { signOut } = useAuth();

  const { onOpen } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"theme.red"}>Atenção</ModalHeader>

          <ModalBody>
            <VStack>
              <Text>Sua sessão expirou, faça um novo login para continuar</Text>
              <Button
                w="220px"
                fontFamily={"Permanent Marker"}
                colorScheme={"purple"}
                mb={20}
                _hover={{ bg: "theme.blue" }}
                fontSize={20}
                onClick={signOut}
              >
                FAZER LOGIN
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
