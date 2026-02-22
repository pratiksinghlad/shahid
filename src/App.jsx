import React, { Suspense } from 'react';
import { ChakraProvider, Spinner, Center } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const ExpertiseSection = React.lazy(() => import('./components/ExpertiseSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
import Footer from './components/Footer';

const LoadingFallback = () => (
  <Center h="50vh" bg="brand.navy.900">
    <Spinner size="xl" color="brand.gold.500" thickness="4px" />
  </Center>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <ExpertiseSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
