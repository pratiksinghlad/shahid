import { Box, SimpleGrid, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaBuilding,
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const MotionBox = motion(Box);

const AREA_ICONS: Record<string, any> = {
  civil: FaBalanceScale,
  criminal: FaGavel,
  family: FaUsers,
  corporate: FaBuilding,
  property: FaHome,
  consumer: FaShieldAlt,
};

const AREA_KEYS = [
  "civil",
  "criminal",
  "family",
  "corporate",
  "property",
  "consumer",
];

const ExpertiseCard = ({
  areaKey,
  index,
}: {
  areaKey: string;
  index: number;
}) => {
  const { t } = useTranslation();
  const IconComponent = AREA_ICONS[areaKey];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <VStack
        p={{ base: 6, md: 8 }}
        bg="rgba(11, 29, 58, 0.6)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="8px"
        spacing={4}
        align="flex-start"
        h="full"
        position="relative"
        overflow="hidden"
        role="group"
        cursor="pointer"
        transition="all 0.4s ease"
        _hover={{
          border: "1px solid",
          borderColor: "brand.gold.500",
          transform: "translateY(-6px)",
          boxShadow: "0 20px 60px rgba(201, 152, 42, 0.1)",
        }}
      >
        {/* Top accent line */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="0%"
          h="3px"
          bg="brand.gold.500"
          transition="width 0.4s ease"
          _groupHover={{ w: "100%" }}
        />

        {/* Background glow */}
        <Box
          position="absolute"
          top="-50%"
          right="-50%"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="radial-gradient(circle, rgba(201,152,42,0.05) 0%, transparent 70%)"
          opacity={0}
          transition="opacity 0.4s ease"
          _groupHover={{ opacity: 1 }}
          pointerEvents="none"
        />

        <Box
          p={3}
          bg="brand.navy.800"
          borderRadius="8px"
          border="1px solid"
          borderColor="brand.gold.600"
          transition="all 0.3s ease"
          _groupHover={{
            bg: "brand.gold.500",
            borderColor: "brand.gold.400",
          }}
        >
          <Icon
            as={IconComponent}
            boxSize={6}
            color="brand.gold.400"
            transition="color 0.3s ease"
            _groupHover={{ color: "brand.navy.950" }}
          />
        </Box>

        <Heading
          as="h3"
          fontSize={{ base: "md", md: "lg" }}
          fontFamily="heading"
          fontWeight="600"
          color="whiteAlpha.900"
        >
          {t(`expertise.areas.${areaKey}.title`)}
        </Heading>

        <Text fontSize="sm" color="whiteAlpha.600" lineHeight="1.7">
          {t(`expertise.areas.${areaKey}.description`)}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const ExpertiseSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="expertise" bg="brand.navy.900">
      <SectionHeading
        title={t("expertise.section_title")}
        subtitle={t("expertise.section_subtitle")}
      />
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 5, md: 6, lg: 8 }}
      >
        {AREA_KEYS.map((key, i) => (
          <ExpertiseCard key={key} areaKey={key} index={i} />
        ))}
      </SimpleGrid>
    </SectionWrapper>
  );
};

export default ExpertiseSection;
