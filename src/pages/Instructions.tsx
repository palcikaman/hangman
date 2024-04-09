import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const Instructions = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="link" mt={4}>
        Instructions
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Instructions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Click on letters until you win or lose</Text>
            <Link href="https://www.youtube.com/watch?v=le5uGqHKll8" isExternal>
              <Button rightIcon={<ExternalLinkIcon />} variant="link">
                More info
              </Button>
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)} colorScheme="black">
              Got it
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
