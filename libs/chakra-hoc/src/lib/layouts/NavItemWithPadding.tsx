import { Flex, Icon, Box } from '@chakra-ui/react';
import { useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import { colorParser } from '../utils/colorParser';

export const NavItemWithPadding = (props: any) => {
  const { icon, children, to, ...rest } = props;
  const navigate = useNavigate();

  const { color, saturation } = colorParser(props.bgColor);

  // Check if the current NavItem match
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      mx="4"
      my="1"
      rounded="lg"
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
      {icon && (
        <Box
          me="2"
          bg={match ? 'white' : 'unset'}
          rounded={match ? 'lg' : 'unset'}
          boxSize="6"
          align="center"
        >
          <Icon
            boxSize="4"
            color={match ? `${color}.${saturation}` : 'unset'}
            as={icon}
          />
        </Box>
      )}
      {children}
    </Flex>
  );
};
