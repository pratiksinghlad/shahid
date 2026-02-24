import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Heading,
} from "@chakra-ui/react";

/** Props for the DocumentModal component. */
export interface DocumentModalProps {
  /** Whether the modal is open. */
  readonly isOpen: boolean;
  /** Callback to close the modal. */
  readonly onClose: () => void;
  /** Full HTML content of the document. */
  readonly richHtml: string;
  /** Title displayed in the modal header. */
  readonly title?: string;
}

/**
 * Accessible modal that renders the full document content with preserved
 * formatting (bold, italic, headings). Uses Chakra UI Modal for built-in
 * focus trap, overlay, and keyboard handling.
 */
const DocumentModal = ({
  isOpen,
  onClose,
  richHtml,
  title = "About Shahid Nadeem",
}: DocumentModalProps): React.JSX.Element => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size={{ base: "full", md: "xl", lg: "3xl" }}
    scrollBehavior="inside"
    isCentered
    motionPreset="slideInBottom"
  >
    <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
    <ModalContent
      bg="brand.navy.900"
      border="1px solid"
      borderColor="brand.gold.500"
      borderRadius={{ base: 0, md: "12px" }}
      maxH={{ base: "100vh", md: "80vh" }}
      mx={{ base: 0, md: 4 }}
    >
      <ModalHeader
        color="brand.gold.400"
        fontFamily="heading"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        pb={4}
        pt={6}
        px={{ base: 6, md: 8 }}
        mr={{ base: 8, md: 0 }}
      >
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          fontFamily="heading"
        >
          {title}
        </Heading>
      </ModalHeader>

      <ModalCloseButton
        color="whiteAlpha.900"
        bg="whiteAlpha.100"
        size="md"
        borderRadius="full"
        _hover={{
          color: "brand.navy.900",
          bg: "brand.gold.400",
        }}
        top={{ base: 5, md: 6 }}
        right={{ base: 4, md: 6 }}
        zIndex={10}
      />

      <ModalBody py={6} px={{ base: 6, md: 8 }}>
        <Box
          className="document-content"
          color="whiteAlpha.800"
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="1.9"
          fontFamily="body"
          sx={{
            "& p": {
              mb: 4,
            },
            "& strong": {
              color: "brand.gold.300",
              fontWeight: "700",
            },
            "& em": {
              fontStyle: "italic",
              color: "whiteAlpha.700",
            },
            "& h1, & h2, & h3": {
              color: "brand.gold.400",
              fontFamily: "heading",
              fontWeight: "600",
              mt: 6,
              mb: 3,
            },
            "& h1": { fontSize: "xl" },
            "& h2": { fontSize: "lg" },
            "& h3": { fontSize: "md" },
            "& ul, & ol": {
              pl: 6,
              mb: 4,
            },
            "& li": {
              mb: 2,
            },
          }}
          dangerouslySetInnerHTML={{ __html: richHtml }}
        />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default DocumentModal;
