import { Box, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const SectionWrapper = ({ children, id, bg, py, ...props }) => {
  return (
    <MotionBox
      as="section"
      id={id}
      bg={bg || 'transparent'}
      py={py || { base: 16, md: 24 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      {...props}
    >
      <Container maxW="container.xl" px={{ base: 5, md: 8 }}>
        {children}
      </Container>
    </MotionBox>
  );
};

export default SectionWrapper;
