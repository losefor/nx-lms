import {
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

export function Home() {
  return (
    <SimpleGrid columns={3} spacing="5">
      <Stat bg="white" borderRadius="lg" shadow="sm" padding="5">
        <StatLabel>عدد المستخدمين الكلي</StatLabel>
        <StatNumber>2000</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>

      <Stat bg="white" borderRadius="lg" shadow="sm" padding="5">
        <StatLabel>المستخدمين النشطين اليوم</StatLabel>
        <StatNumber>300</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>

      <Stat bg="white" borderRadius="lg" shadow="sm" padding="5">
        <StatLabel>المستخدمين الجدد اليوم</StatLabel>
        <StatNumber>4000</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </SimpleGrid>
  );
}
