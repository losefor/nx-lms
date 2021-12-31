import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useColorModeValue as mode,
  Input,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface Props {
  label: string;
}

export function FormPasswordInput(props: Props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <FormControl id="password">
      <Flex justify="space-between">
        <FormLabel>{props.label}</FormLabel>
        <Box
          as="a"
          color={mode("teal.600", "teal.200")}
          fontWeight="semibold"
          fontSize="sm"
        >
          نسيت كلمه السر...؟
        </Box>
      </Flex>
      <InputGroup>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={() => onToggle()}
          />
        </InputRightElement>
        <Input
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          // {...props}
        />
      </InputGroup>
    </FormControl>
  );
}
