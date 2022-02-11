import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Hero } from '../components/homePage/Hero';
import { ThreeTierPricing } from '../components/homePage/ThreeTierPricing';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Box, Container, Divider } from '@chakra-ui/react';
import Features from '../components/homePage/Features';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />

      <Container maxW={'6xl'}>
        <Box height={['unset', '100vh']}>
          <Features />
        </Box>
        <Box height={['unset', '100vh']}>
          <ThreeTierPricing />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
