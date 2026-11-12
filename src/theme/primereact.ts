import { DARK_MODE_CLASS } from "./colorScheme";
import { AppPreset } from "./preset";

export const primeReactConfig = {
  theme: {
    preset: AppPreset,
    options: { darkModeSelector: `.${DARK_MODE_CLASS}` },
    // Must match the @layer order declared at the top of styles/reset.css.
    // options: { cssLayer: { name: "primeui", order: "reset, primeui" } },
  },
  license: import.meta.env.VITE_PRIMEUI_LICENSE,
};
