import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import { colorParser } from '../utils/colorParser';

interface Props {
  primaryColor?: string;
  primaryColorDark?: string;
  to: string;
  children: React.ReactNode;
  icon?: any;
  bgColor?: string;
}

export const NavItemDefault = (props: Props) => {
  const { icon, children, to, ...rest } = props;
  const navigate = useNavigate();

  // Check if the current NavItem match
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const { color, saturation } = colorParser(props.bgColor as string);

  const bgColor = useColorModeValue(
    `${color}.${saturation}`,
    `${color}.${saturation - 200}`
  );
  const selectedTextColor = useColorModeValue(`white`, `gray.800`);
  const notSelectedTextColor = useColorModeValue(`gray.800`, 'whiteAlpha.800');

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={match ? selectedTextColor : notSelectedTextColor}
      bg={match ? bgColor : 'inherit'}
      _hover={{
        bg: match ? `${color}.${saturation + 100}` : 'gray.100',
        color: match ? 'white' : 'inherit',
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
