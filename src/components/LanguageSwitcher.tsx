import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "Eng" },
  { code: "mr", label: "मराठी" },
  { code: "hi", label: "हिंदी" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        variant="ghost"
        color="whiteAlpha.800"
        rightIcon={<ChevronDownIcon />}
        _hover={{ bg: "whiteAlpha.100", color: "brand.gold.400" }}
        _active={{ bg: "whiteAlpha.200" }}
        fontWeight="600"
        fontSize="xs"
        textTransform="uppercase"
        px={2}
      >
        <Text>{currentLang.label}</Text>
      </MenuButton>
      <MenuList
        bg="brand.navy.900"
        borderColor="brand.navy.700"
        boxShadow="0 20px 60px rgba(0,0,0,0.5)"
        minW="120px"
        py={1}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            bg={i18n.language === lang.code ? "whiteAlpha.100" : "transparent"}
            _hover={{ bg: "whiteAlpha.100", color: "brand.gold.400" }}
            color="whiteAlpha.800"
            fontSize="sm"
            fontWeight={i18n.language === lang.code ? "600" : "400"}
          >
            {lang.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
