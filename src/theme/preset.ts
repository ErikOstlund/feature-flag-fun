// Keep the file organized in the same order as the tiers:
// primitive, semantic, then components, then extend.
// When the file gets long, split each group into its own
// file in src/theme/tokens/ and import them.

import { definePreset, palette } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const red = palette("#f27277");
const blueIris = palette("#00b7bf");
const bluePacific = palette("#008dd0");

const SHADES = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

/** A 50–950 scale that uses one palette in light mode and another in dark mode. */
function lightDarkScale(light: string, dark: string): Record<string, string> {
  return Object.fromEntries(
    SHADES.map((s) => [s, `light-dark({${light}.${s}}, {${dark}.${s}})`])
  );
}

function brandButtonCss(role: "secondary" | "accent") {
  return `
  .p-button.p-button-brand-${role} {
    background: dt('brand.${role}.color');
    border-color: dt('brand.${role}.color');
    color: dt('brand.${role}.contrast.color');
    }
  .p-button.p-button-brand-${role}:not(:disabled):hover {
    background: dt('brand.${role}.hover.color');
    border-color: dt('brand.${role}.hover.color');
    color: dt('brand.${role}.contrast.color');
    }
  .p-button.p-button-brand-${role}:focus-visible {
    outline-color: dt('brand.${role}.color');
    }
        `;
}

export const AppPreset = definePreset(Aura, {
  primitive: { red, blueIris, bluePacific },
  semantic: {
    primary: palette("{red}"),
    surface: { 0: "#ffffff", ...lightDarkScale("stone", "zinc") },
    typography: {
      fontFamily: "inherit",
      fontSize: "1rem",
    },
    focusRing: {
      width: "2px",
      style: "solid",
      offset: "2px",
    },
    formField: {
      hoverBorderColor: "{primary.500}",
    },
  },
  components: {
    button: { css: brandButtonCss("secondary") + brandButtonCss("accent") },
  },
  extend: {
    brand: {
      secondary: {
        color: "light-dark({blueIris.600}, {blueIris.400})",
        hoverColor: "light-dark({blueIris.700}, {blueIris.300})",
        contrastColor: "light-dark(#ffffff, {blueIris.950})",
      },
      accent: {
        color: "light-dark({bluePacific.500}, {bluePacific.400})",
        hoverColor: "light-dark({bluePacific.600}, {bluePacific.300})",
        contrastColor: "{bluePacific.950}",
      },
    },
    app: {
      background: "light-dark({surface.50}, {surface.950})",
    },
  },
});
