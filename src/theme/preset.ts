// Keep the file organized in the same order as the tiers:
// primitive, semantic, then components, then extend.
// When the file gets long, split each group into its own
// file in src/theme/tokens/ and import them.

import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const semanticFocusRing = { focusRing: { color: "{focus.ring.color}" } };

export const AppPreset = definePreset(Aura, {
  semantic: {
    typography: {
      fontFamily: "inherit",
      fontSize: "1rem",
    },
    focusRing: {
      width: "2px",
      style: "solid",
      color: "{purple.500}",
      offset: "2px",
    },
    formField: {
      hoverBorderColor: "{purple.500}",
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
