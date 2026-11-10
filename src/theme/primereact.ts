import { AppPreset } from "./preset";

export const primeReactConfig = {
  theme: { preset: AppPreset },
  license: import.meta.env.VITE_PRIMEUI_LICENSE,
};
