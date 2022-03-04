import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Hero } from '../components/homePage/Hero';
import { ThreeTierPricing } from '../components/homePage/ThreeTierPricing';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Box, Container, Divider, VStack } from '@chakra-ui/react';
import Features from '../components/homePage/Features';
import { SectionScroll } from '../components/SectionScroll';

const Home: NextPage = () => {
  return (
    <>
      <Hero />

      <Container maxW={'6xl'}>
        <VStack
          align={'center'}
          justify={'center'}
          id="section2"
          height={['unset', '100vh']}
        >
          <Features />
          <SectionScroll to="#section3">الاسعار</SectionScroll>
        </VStack>
        <VStack
          align={'center'}
          justify={'center'}
          id="section3"
          height={['unset', '100vh']}
        >
          <ThreeTierPricing />
        </VStack>
      </Container>
    </>
  );
};

export default Home;
