import { Box, Heading, Text } from '@chakra-ui/react';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <Box textAlign="center" mb={{ base: 10, md: 14 }}>
      <Text
        fontSize="sm"
        fontWeight="600"
        color="brand.gold.400"
        letterSpacing="0.2em"
        textTransform="uppercase"
        mb={3}
      >
        ━━ &nbsp; {title} &nbsp; ━━
      </Text>
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontFamily="heading"
        color="whiteAlpha.900"
        fontWeight="600"
        mb={4}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          color="whiteAlpha.700"
          maxW="640px"
          mx="auto"
          lineHeight="tall"
        >
          {subtitle}
        </Text>
      )}
      <Box
        w="60px"
        h="3px"
        bg="brand.gold.500"
        mx="auto"
        mt={5}
        borderRadius="full"
      />
    </Box>
  );
};

export default SectionHeading;
