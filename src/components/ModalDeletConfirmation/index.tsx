import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

interface ModalDeletePropos {
  handleDelete: () => void;
  tittle: string;
}

export const ModalDeleteConfirmation = ({
  handleDelete,
  tittle,
}: ModalDeletePropos) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg={"theme.darkBlue"}
        color={"theme.white"}
        w="220px"
        fontFamily={"Permanent Marker"}
        mb={20}
        _hover={{ bg: "theme.blue" }}
        fontSize={20}
        onClick={onOpen}
      >
        Deletar Evento
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"theme.red"}>Atenção</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Text>
                Você está prestes a deletar o evento{" "}
                {tittle.toLocaleUpperCase()}, tem certeza que deseja fazer isso
                ?
              </Text>
              <Button
                w="220px"
                fontFamily={"Permanent Marker"}
                colorScheme={"purple"}
                mb={20}
                _hover={{ bg: "theme.blue" }}
                fontSize={20}
                onClick={handleDelete as any}
              >
                deletar
              </Button>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
