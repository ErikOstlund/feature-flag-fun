import type { ColorScale } from "@primeuix/themes";

// Primitive only lists Aura's built-in palettes. Register custom ones here.
declare module "@primeuix/themes/types/base" {
  namespace BaseTokenSections {
    interface Primitive {
      blueIris?: ColorScale;
      bluePacific?: ColorScale;
    }
  }
}
