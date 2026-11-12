import { styled } from "styled-components";

import { Moon } from "@primeicons/react/moon";
import { Sun } from "@primeicons/react/sun";
import { Button } from "@primereact/ui/button";
import { useColorScheme } from "theme/useColorScheme";

function ColorSchemeToggle() {
  const { scheme, toggle, isFollowingSystem, followSystem } = useColorScheme();
  const next = scheme === "dark" ? "light" : "dark";

  return (
    <Wrapper>
      <Button
        iconOnly
        rounded
        variant="text"
        severity="secondary"
        aria-label={`Switch to ${next} mode`}
        onClick={toggle}
      >
        {scheme === "dark" ? <Sun /> : <Moon />}
      </Button>
      {!isFollowingSystem && (
        <Button variant="text" onClick={followSystem}>
          Use system setting
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default ColorSchemeToggle;
