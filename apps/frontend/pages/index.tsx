import type { NextPage } from 'next';
import { Hero } from '../components/homePage/Hero';
import { ThreeTierPricing } from '../components/homePage/ThreeTierPricing';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Box, Container, Divider, VStack } from '@chakra-ui/react';
import Features from '../components/homePage/Features';
import { SectionScroll } from '../components/SectionScroll';
import { MetaTags } from '../components/MetaTags';

const Home: NextPage = () => {
  const fetchURI = () => {
    setTimeout(() => {
      return 'Home';
    }, 3000);

    return 'Base';
  };

  return (
    <>
      <MetaTags name="Baity" title={fetchURI()} />
      <Hero />

      <Container maxW={'6xl'}>
        <VStack
          align={'center'}
          justify={'center'}
          id="section2"
          height={['unset', '100vh']}
        >
          <Features />
          {/* <SectionScroll to="#section3">الاسعار</SectionScroll> */}
        </VStack>
        {/* <VStack
          align={'center'}
          justify={'center'}
          id="section3"
          height={['unset', '100vh']}
        >
          <ThreeTierPricing />
        </VStack> */}
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log({ context });

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
