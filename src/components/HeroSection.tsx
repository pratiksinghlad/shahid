import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBalanceScale, FaGavel } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import CustomButton from "./CustomButton";
import { BASE_PATH } from "../constants/paths";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const HeroSection = () => {
  const { t } = useTranslation();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper
      id="home"
      py={{ base: 0, md: 0 }}
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.03}
        bgImage="repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,152,42,0.1) 35px, rgba(201,152,42,0.1) 36px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(201,152,42,0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-15%"
        left="-8%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(30,58,110,0.3) 0%, transparent 70%)"
        pointerEvents="none"
      />

      {/* Animated Gavel */}
      <MotionBox
        position="absolute"
        top={{ base: "15%", lg: "25%" }}
        left={{ base: "75%", lg: "50%" }}
        transformOrigin="bottom right"
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: [-20, 15, -20], opacity: 0.15 }}
        transition={{
          rotate: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1, delay: 0.5 },
        }}
        color="brand.gold.500"
        pointerEvents="none"
        zIndex={0}
      >
        <FaGavel size={{ base: 80, lg: 120 } as any} />
      </MotionBox>

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 12, lg: 16 }}
        w="full"
        pt={{ base: "100px", md: "80px" }}
      >
        {/* Left Content */}
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          spacing={6}
          flex={1}
          textAlign={{ base: "center", lg: "left" }}
          maxW={{ lg: "600px" }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HStack
              spacing={2}
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="brand.gold.500"
              borderRadius="full"
              px={4}
              py={2}
            >
              <FaBalanceScale color="#C9982A" size={14} />
              <Text
                fontSize="xs"
                fontWeight="600"
                color="brand.gold.400"
                letterSpacing="0.15em"
                textTransform="uppercase"
              >
                {t("hero.subtitle")}
              </Text>
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="brand.gold.400"
              fontWeight="500"
              fontFamily="heading"
            >
              {t("hero.greeting")}
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              fontFamily="heading"
              fontWeight="700"
              lineHeight="1.1"
              color="whiteAlpha.900"
            >
              {t("hero.name")}
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontFamily="heading"
              fontWeight="500"
              color="brand.gold.400"
            >
              {t("hero.title")}
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="whiteAlpha.700"
              lineHeight="1.8"
              maxW="540px"
            >
              {t("hero.description")}
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
          >
            <HStack
              spacing={4}
              pt={4}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
            >
              <CustomButton
                variant="gold"
                onClick={() => handleScroll("contact")}
              >
                {t("hero.cta_primary")}
              </CustomButton>
              <CustomButton
                variant="outline_gold"
                onClick={() => handleScroll("expertise")}
              >
                {t("hero.cta_secondary")}
              </CustomButton>
            </HStack>
          </MotionBox>
        </VStack>

        {/* Right - Profile Picture Placeholder */}
        <MotionFlex
          flex={1}
          justify="center"
          align="center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box position="relative">
            {/* Decorative border */}
            <Box
              position="absolute"
              top="-12px"
              left="-12px"
              right="-12px"
              bottom="-12px"
              border="2px solid"
              borderColor="brand.gold.500"
              borderRadius="12px"
              opacity={0.4}
            />
            <Box
              position="absolute"
              top="-6px"
              left="-6px"
              right="-6px"
              bottom="-6px"
              border="1px solid"
              borderColor="brand.gold.300"
              borderRadius="10px"
              opacity={0.2}
            />

            {/* Avatar Placeholder Area */}
            <Flex
              w={{ base: "260px", sm: "300px", md: "340px", lg: "380px" }}
              h={{ base: "320px", sm: "370px", md: "420px", lg: "470px" }}
              bg="linear-gradient(145deg, rgba(30,58,110,0.5) 0%, rgba(11,29,58,0.8) 100%)"
              borderRadius="8px"
              border="1px solid"
              borderColor="whiteAlpha.100"
              align="center"
              justify="center"
              direction="column"
              gap={4}
              overflow="hidden"
              position="relative"
            >
              {/* Subtle gradient overlay */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                h="40%"
                bg="linear-gradient(to top, rgba(11,29,58,0.9), transparent)"
              />

              <Image
                src={`${BASE_PATH}profile_pic.jpeg`}
                alt={t("hero.name") as string}
                w="full"
                h="full"
                objectFit="cover"
                transition="transform 0.5s ease-in-out"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Flex>

            {/* Decorative accent */}
            <Box
              position="absolute"
              bottom="-20px"
              right="-20px"
              w="80px"
              h="80px"
              bg="brand.gold.500"
              opacity={0.1}
              borderRadius="4px"
              transform="rotate(45deg)"
            />
          </Box>
        </MotionFlex>
      </Flex>
    </SectionWrapper>
  );
};

export default HeroSection;
