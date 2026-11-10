import { createGlobalStyle } from "styled-components";
import { FONT_FAMILY } from "utils/constants/typography";

function GlobalStyles() {
  return <BaseStyles />;
}

export default GlobalStyles;

const BaseStyles = createGlobalStyle`
  body {
    font-family: ${FONT_FAMILY.Sans};
    color: var(--p-text-color, CanvasText);
    background-color: var(--p-content-background, Canvas);
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ${FONT_FAMILY.Mono};
  }
`;
