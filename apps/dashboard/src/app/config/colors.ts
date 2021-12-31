import { ColorProps } from "@chakra-ui/react";

interface ColorsSchema {
  primary: ColorProps["color"];
  primaryDark: ColorProps["color"];
  primaryLight: ColorProps["color"];
}

export const colors: ColorsSchema = {
  primary: "teal.500",
  primaryDark: "teal.600",
  primaryLight: "teal.400",
};
