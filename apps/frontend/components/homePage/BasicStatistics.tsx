import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"sm"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.100", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel textAlign={"right"} fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber textAlign={"right"} fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        color={"gray.700"}
        fontWeight={"bold"}
      >
        خدماتنا متوفرة في...؟
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"اكثر من"} stat={"12 جامعة"} />
        <StatsCard title={"لاكثر من "} stat={"12 الف طالب"} />
        <StatsCard title={"في"} stat={"4 دول"} />
      </SimpleGrid>
    </Box>
  );
}
