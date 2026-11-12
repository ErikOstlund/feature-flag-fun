// Keep the file organized in the same order as the tiers:
// primitive, semantic, then components, then extend.
// When the file gets long, split each group into its own
// file in src/theme/tokens/ and import them.

import { definePreset, palette } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const red = palette("#f27277");

const semanticFocusRing = { focusRing: { color: "{focus.ring.color}" } };

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

export const AppPreset = definePreset(Aura, {
  primitive: { red },
  semantic: {
    surface: { 0: "#ffffff", ...lightDarkScale("stone", "zinc") },
    primary: palette("{red}"),
    typography: {
      fontFamily: "inherit",
      fontSize: "1rem",
    },
    focusRing: {
      width: "2px",
      style: "solid",
      // color: "{primary.500}",
      offset: "2px",
    },
    formField: {
      hoverBorderColor: "{primary.500}",
    },
  },
  // Aura's Button takes each severity's focus ring color from its own palette,
  // not from semantic.focusRing.color. These point it back at the semantic
  // token. They must sit under `root`: a flat `button.primary` override gets
  // shadowed by Aura's `button.root.primary`.
  components: {
    button: {
      root: {
        primary: semanticFocusRing,
        secondary: semanticFocusRing,
        info: semanticFocusRing,
        success: semanticFocusRing,
        warn: semanticFocusRing,
        help: semanticFocusRing,
        danger: semanticFocusRing,
        contrast: semanticFocusRing,
      },
    },
  },
});
