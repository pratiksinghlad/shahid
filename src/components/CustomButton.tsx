import { Button as ChakraButton } from "@chakra-ui/react";

const CustomButton = ({
  children,
  variant = "gold",
  size = "lg",
  ...props
}: any) => {
  return (
    <ChakraButton
      variant={variant}
      size={size}
      px={8}
      py={6}
      fontSize="sm"
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
