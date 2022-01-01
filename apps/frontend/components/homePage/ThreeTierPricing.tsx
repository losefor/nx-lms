import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Divider,
} from '@chakra-ui/react';
import { FaBook, FaCheckCircle, FaUser } from 'react-icons/fa';
import { HeadingWithDivider } from '@nx-lms/chakra-hoc';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export function ThreeTierPricing() {
  return (
    <Box id="pricings" py={12}>
      <VStack spacing={2} textAlign="center">
        <HeadingWithDivider leftDivider rightDivider>
          اشترك بما يلبي احتياجاتك
        </HeadingWithDivider>
        <Text fontSize="lg" color={'gray.500'}>
          ابدا بتجربه مجانيا لمده شهر كامل من دون فيزا، يمكنك الغاء الاشتراك في
          اي وقت
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              ابتدائي
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="4xl" fontWeight="900">
                30,000
              </Text>
              <Text fontSize="3xl" fontWeight="600">
                د.ع
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /شهريا
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem display={'flex'} alignItems={'center'}>
                <ListIcon
                  boxSize={'7'}
                  padding={'1'}
                  borderRadius={'full'}
                  bgColor={'teal.400'}
                  as={FaUser}
                  color="white"
                />
                1000 طالب
              </ListItem>
              <ListItem>
                <ListIcon
                  boxSize={'7'}
                  padding={'1'}
                  borderRadius={'full'}
                  bgColor={'teal.400'}
                  as={FaBook}
                  color="white"
                />
                100 كتاب
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline">
                تواصل معنا
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('teal.400', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('white', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                الاكثر شهرة
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" fontWeight="600">
                  د.ع
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /شهريا
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="teal">
                  تواصل معنا
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              توسع
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="4xl" fontWeight="900">
                100,000
              </Text>
              <Text fontSize="3xl" fontWeight="600">
                د.ع
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /شهريا
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                100,000 طالب
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline">
                تواصل معنا
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
