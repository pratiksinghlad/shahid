import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Container,
  Text,
  Link,
  Collapse,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { BASE_PATH } from "../constants/paths";

const MotionBox = motion(Box);

const NAV_ITEMS = ["home", "expertise", "contact"];

const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Poll to observe elements since they may be lazy-loaded via Suspense
    const observedIds = new Set<string>();
    const observeElements = () => {
      NAV_ITEMS.forEach((id) => {
        if (!observedIds.has(id)) {
          const el = document.getElementById(id);
          if (el) {
            observer.observe(el);
            observedIds.add(id);
          }
        }
      });
    };

    observeElements();
    const intervalId = setInterval(() => {
      observeElements();
      if (observedIds.size === NAV_ITEMS.length) {
        clearInterval(intervalId);
      }
    }, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  const handleNavClick = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={scrolled ? "rgba(11, 29, 58, 0.95)" : "transparent"}
      backdropFilter={scrolled ? "blur(20px)" : "none"}
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="whiteAlpha.100"
      transition="all 0.4s ease"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // @ts-ignore framer-motion transition
      transitionDuration="0.6s"
    >
      <Container maxW="container.xl" px={{ base: 5, md: 8 }}>
        <Flex
          h={{ base: "70px", md: "80px" }}
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <HStack
            spacing={2}
            cursor="pointer"
            onClick={() => handleNavClick("home")}
          >
            <Image
              src={`${BASE_PATH}gavel.gif`}
              alt="Advocate Logo"
              w="38px"
              h="38px"
              objectFit="contain"
              borderRadius="4px"
            />
            <Text
              fontFamily="heading"
              fontWeight="600"
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.900"
              display={{ base: "none", sm: "block" }}
            >
              Advocate
            </Text>
          </HStack>

          {/* Desktop Nav */}
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
            align="center"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                onClick={() => handleNavClick(item)}
                fontSize="sm"
                fontWeight="600"
                color={
                  activeSection === item ? "brand.gold.400" : "whiteAlpha.800"
                }
                textTransform="uppercase"
                letterSpacing="0.1em"
                position="relative"
                _hover={{
                  color: "brand.gold.400",
                  textDecoration: "none",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  w: activeSection === item ? "100%" : "0%",
                  h: "2px",
                  bg: "brand.gold.500",
                  transition: "width 0.3s ease",
                }}
                sx={{
                  "&:hover::after": {
                    w: "100%",
                  },
                }}
                cursor="pointer"
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
            <LanguageSwitcher />
          </HStack>

          {/* Mobile Toggle */}
          <HStack display={{ base: "flex", md: "none" }} spacing={2}>
            <LanguageSwitcher />
            <IconButton
              aria-label="Toggle Navigation"
              icon={
                isOpen ? (
                  <CloseIcon boxSize={3} />
                ) : (
                  <HamburgerIcon boxSize={5} />
                )
              }
              variant="ghost"
              color="whiteAlpha.800"
              _hover={{ bg: "whiteAlpha.100", color: "brand.gold.400" }}
              onClick={onToggle}
            />
          </HStack>
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen}>
          <VStack display={{ md: "none" }} spacing={0} pb={6} align="stretch">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                onClick={() => handleNavClick(item)}
                py={4}
                px={4}
                fontSize="xs"
                fontWeight="700"
                color={
                  activeSection === item ? "brand.gold.400" : "whiteAlpha.800"
                }
                bg={activeSection === item ? "whiteAlpha.100" : "transparent"}
                textTransform="uppercase"
                letterSpacing="0.1em"
                borderBottom="1px solid"
                borderColor="whiteAlpha.100"
                _hover={{
                  color: "brand.gold.400",
                  bg: "whiteAlpha.50",
                  textDecoration: "none",
                }}
                cursor="pointer"
                transition="all 0.2s"
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </VStack>
        </Collapse>
      </Container>
    </MotionBox>
  );
};

export default Navbar;
