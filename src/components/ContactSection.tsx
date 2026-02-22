import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Icon,
  Link,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import CustomButton from "./CustomButton";

const MotionBox = motion(Box);

const ContactInfoCard = ({ icon, label, value, href, index }: any) => (
  <MotionBox
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
  >
    <HStack
      spacing={4}
      p={5}
      bg="rgba(11, 29, 58, 0.5)"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="8px"
      transition="all 0.3s ease"
      _hover={{
        borderColor: "brand.gold.500",
        transform: "translateX(6px)",
      }}
    >
      <Flex
        w="48px"
        h="48px"
        bg="brand.navy.800"
        borderRadius="8px"
        border="1px solid"
        borderColor="brand.gold.600"
        align="center"
        justify="center"
        flexShrink={0}
      >
        <Icon as={icon} boxSize={5} color="brand.gold.400" />
      </Flex>
      <VStack align="flex-start" spacing={0}>
        <Text
          fontSize="xs"
          color="brand.gold.400"
          fontWeight="600"
          letterSpacing="0.1em"
          textTransform="uppercase"
        >
          {label}
        </Text>
        {href ? (
          <Link
            href={href}
            fontSize="sm"
            color="whiteAlpha.800"
            _hover={{ color: "brand.gold.300", textDecoration: "none" }}
            isExternal={false}
          >
            {value}
          </Link>
        ) : (
          <Box fontSize="sm" color="whiteAlpha.800">
            {value}
          </Box>
        )}
      </VStack>
    </HStack>
  </MotionBox>
);

const ContactSection = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: FaEnvelope,
      label: t("contact.email_label"),
      value: t("contact.email"),
      href: `mailto:${t("contact.email")}`,
    },
    {
      icon: FaPhone,
      label: t("contact.phone_label"),
      value: t("contact.phone"),
      href: `tel:${t("contact.phone").replace(/\s/g, "")}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: t("contact.address_label"),
      value: (
        <VStack align="flex-start" spacing={2} pt={1}>
          <Text fontSize="sm">{t("contact.address_mumbai")}</Text>
          <Divider borderColor="whiteAlpha.100" />
          <Text fontSize="sm">{t("contact.address_malegaon")}</Text>
          <Divider borderColor="whiteAlpha.100" />
          <Text fontSize="sm">{t("contact.address_delhi")}</Text>
        </VStack>
      ),
      href: null,
    },
    {
      icon: FaClock,
      label: t("contact.hours_label"),
      value: t("contact.hours"),
      href: null,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title={t("contact.section_title")}
        subtitle={t("contact.section_subtitle")}
      />

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={5}
        maxW="800px"
        mx="auto"
      >
        {contactItems.map((item, i) => (
          <ContactInfoCard
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={item.value}
            href={item.href}
            index={i}
          />
        ))}
      </SimpleGrid>

      <HStack justify="center" mt={12} spacing={4} flexWrap="wrap">
        <CustomButton
          variant="gold"
          as="a"
          href={`mailto:${t("contact.email")}`}
          leftIcon={<FaEnvelope />}
        >
          {t("contact.cta")}
        </CustomButton>
        <CustomButton
          variant="outline_gold"
          as="a"
          href={`tel:${t("contact.phone").replace(/[^\d+]/g, "")}`}
          leftIcon={<FaPhone />}
        >
          {t("contact.cta_call")}
        </CustomButton>
      </HStack>
    </SectionWrapper>
  );
};

export default ContactSection;
