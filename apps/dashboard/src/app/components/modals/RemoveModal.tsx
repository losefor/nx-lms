import { useState } from "react";
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
  chakra,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";

interface Props {
  checkText?: string;
  header?: string;
  body?: string;
  deleteInfo?: string;
  onClick: () => void;
  record?: any;
}

export function RemoveModal(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");

  const onOpenHandler = () => {
    // Reset the text
    setText("");

    // Open the modal
    onOpen();
  };

  const onDeleteHandler = () => {
    // Reset the text
    setText("");

    // Lift up state
    props.onClick();

    // Close the modal
    onClose();
  };

  return (
    <>
      {/* Action button that will open the modal */}
      <IconButton
        onClick={onOpenHandler}
        aria-label="trash"
        colorScheme="red"
        variant="outline"
        icon={<BsFillTrashFill />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="300px">
          <ModalHeader mt="10">
            <Stack align="center">
              <Box bg="red.500" padding="4" rounded="full">
                <BsFillTrashFill color="white" />
              </Box>
              <chakra.h3>{props.header}</chakra.h3>
            </Stack>
          </ModalHeader>
          {/* <ModalCloseButton right='auth' left='2' /> */}
          <ModalBody pb={3} textAlign="center">
            <Text fontSize="md">{props.body}</Text>
          </ModalBody>

          <ModalFooter>
            <Stack align="center" width="full">
              <Text fontSize="xx-small" color="gray.500">
                {props.deleteInfo}
              </Text>

              <Input
                dir="ltr"
                placeholder={props.checkText}
                value={text}
                rounded="md"
                size="sm"
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && props.checkText === text) {
                    onDeleteHandler();
                  }
                }}
              />
              <Button
                disabled={props.checkText !== text}
                width="full"
                colorScheme="red"
                onClick={onDeleteHandler}
              >
                حذف
              </Button>
              <Button variant="ghost" width="full" onClick={onClose}>
                الغاء
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}