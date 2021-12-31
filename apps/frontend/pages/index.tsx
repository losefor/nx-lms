import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { DateRange, Range } from "react-date-range";
import { Hero } from "../components/homePage/Hero";
import { BasicStatistics } from "../components/homePage/BasicStatistics";
import { ThreeTierPricing } from "../components/homePage/ThreeTierPricing";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, Container, Divider } from "@chakra-ui/react";
import Features from "../components/homePage/Features";

const Home: NextPage = () => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (data: any) => {
    console.log(data.selection);

    setState([data.selection]);
  };

  // Import the localization file

  return (
    <div className={styles.container}>
      <Hero />

      <Container maxW={"6xl"}>
        <Box height={["unset", "100vh"]}>
          <Features />
        </Box>
        <Box height={["unset", "100vh"]}>
          <ThreeTierPricing />
        </Box>
      </Container>

      <div dir="ltr">
        <DateRange
          date={new Date()}
          onChange={handleChange}
          ranges={state}
          rangeColors={["teal"]}
          showMonthAndYearPickers={false}
          fixedHeight={true}
          showDateDisplay={false}
          minDate={new Date()}
        />
      </div>
    </div>
  );
};

export default Home;
