import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  Icon,
  Divider,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants/links";
import { BASE_PATH } from "../constants/paths";

const SocialIcon = ({ icon, href, label }: any) => (
  <Link
    href={href}
    isExternal
    aria-label={label}
    w="40px"
    h="40px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="full"
    border="1px solid"
    borderColor="whiteAlpha.200"
    color="whiteAlpha.600"
    transition="all 0.3s ease"
    _hover={{
      borderColor: "brand.gold.500",
      color: "brand.gold.400",
      bg: "whiteAlpha.50",
      transform: "translateY(-3px)",
    }}
  >
    <Icon as={icon} boxSize={4} />
  </Link>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      bg="brand.navy.950"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      pt={12}
      pb={6}
    >
      <Container maxW="container.xl" px={{ base: 5, md: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={8}
          mb={8}
        >
          {/* Brand */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <HStack spacing={2}>
              <Image
                src={`${BASE_PATH}Gavel.gif`}
                alt="Advocate Logo"
                w="34px"
                h="34px"
                objectFit="contain"
                borderRadius="4px"
              />
              <Text
                fontFamily="heading"
                fontWeight="600"
                fontSize="lg"
                color="whiteAlpha.900"
              >
                Advocate
              </Text>
            </HStack>
            <Text
              fontSize="sm"
              color="brand.gold.400"
              fontWeight="500"
              letterSpacing="0.1em"
            >
              {t("footer.tagline")}
            </Text>
          </VStack>

          {/* Social Media */}
          <VStack spacing={3}>
            <Text
              fontSize="xs"
              color="whiteAlpha.500"
              textTransform="uppercase"
              letterSpacing="0.15em"
              fontWeight="600"
            >
              Connect
            </Text>
            <HStack spacing={3}>
              <SocialIcon
                icon={FaFacebookF}
                href={SOCIAL_LINKS.facebook}
                label="Facebook"
              />
              <SocialIcon
                icon={FaInstagram}
                href={SOCIAL_LINKS.instagram}
                label="Instagram"
              />
            </HStack>
          </VStack>
        </Flex>

        <Divider borderColor="whiteAlpha.100" />

        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          pt={6}
          gap={3}
        >
          <Text fontSize="xs" color="whiteAlpha.400">
            {t("footer.copyright")}
          </Text>
          <Text
            fontSize="xs"
            color="whiteAlpha.400"
            textAlign={{ base: "center", sm: "right" }}
            maxW="400px"
          >
            {t("footer.disclaimer")}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
