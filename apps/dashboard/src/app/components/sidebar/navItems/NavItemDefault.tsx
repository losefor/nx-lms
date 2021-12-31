import { Flex, Icon, Box } from "@chakra-ui/react";
import { useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { colors } from "../../../config/colors";

export const NavItemDefault = (props: any) => {
  const { icon, children, to, ...rest } = props;
  const navigate = useNavigate();

  // Check if the current NavItem match
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={match ? "white" : "inherit"}
      bg={match ? colors.primary : "inherit"}
      _hover={{
        bg: match ? colors.primaryDark : "gray.100",
        color: match ? "white" : "inherit",
      }}
      onClick={() => navigate(to)}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && <Icon me="2" boxSize="4" as={icon} />}
      {children}
    </Flex>
  );
};
