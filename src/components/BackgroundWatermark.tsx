import { Box } from "@chakra-ui/react";
import { BASE_PATH } from "../constants/paths";

/**
 * Renders a fixed, full-viewport watermark using the notary government
 * emblem. Sits behind all content with low opacity for a subtle,
 * authoritative look that doesn't impair readability.
 */
const BackgroundWatermark = (): React.JSX.Element => (
  <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    bottom={0}
    zIndex={0}
    pointerEvents="none"
    opacity={0.06}
    mixBlendMode="luminosity"
    bgImage={`url("${BASE_PATH}notary_govt_india.png")`}
    bgRepeat="repeat"
    bgSize="180px"
    bgPosition="center"
    aria-hidden="true"
  />
);

export default BackgroundWatermark;
