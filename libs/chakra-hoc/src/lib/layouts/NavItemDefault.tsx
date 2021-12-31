import { Flex, Icon, Box } from '@chakra-ui/react';
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

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={match ? 'white' : 'inherit'}
      bg={match ? `${color}.${saturation}` : 'inherit'}
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
