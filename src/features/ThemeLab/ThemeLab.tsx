import {
  palette,
  updatePrimaryPalette,
  usePreset as applyPreset,
} from "@primeuix/themes";
import { Button } from "@primereact/ui/button";
import { AppPreset } from "theme/preset";

function ThemeLab() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <label>
        Primary{" "}
        <input
          type="color"
          defaultValue="#5b5bd6"
          onChange={(e) => updatePrimaryPalette(palette(e.target.value))}
        />
      </label>
      <Button variant="outlined" onClick={() => applyPreset(AppPreset)}>
        Reset
      </Button>
    </div>
  );
}

export default ThemeLab;
