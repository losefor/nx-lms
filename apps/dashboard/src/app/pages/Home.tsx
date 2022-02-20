import {
  Flex,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue as mode,
} from '@chakra-ui/react';

export function Home() {
  const bg = mode('white', 'gray.800');
  return (
    <Stack direction={['column', 'row']} spacing="5">
      <Stat bg={bg} borderRadius="lg" shadow="sm" padding="5">
        <StatLabel>عدد المستخدمين الكلي</StatLabel>
        <StatNumber>2000</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>

      <Stat bg={bg} borderRadius="lg" shadow="sm" padding="5">
        <StatLabel>المستخدمين النشطين اليوم</StatLabel>
        <StatNumber>300</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>

      <Stat bg={bg} borderRadius="lg" shadow="sm" padding="5">
        <StatLabel>المستخدمين الجدد اليوم</StatLabel>
        <StatNumber>4000</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </Stack>
  );
}
