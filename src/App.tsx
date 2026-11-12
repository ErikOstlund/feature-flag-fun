import { useState } from "react";
import { styled } from "styled-components";

import { $dt, usePreset as applyPreset } from "@primeuix/themes";
import { AppPreset } from "theme/preset";
import Aura from "@primeuix/themes/aura";
import Lara from "@primeuix/themes/lara";
import Material from "@primeuix/themes/material";
import Nora from "@primeuix/themes/nora";

import { ChevronDown } from "@primeicons/react/chevron-down";
import { Select, type SelectValueChangeEvent } from "@primereact/ui/select";
import { Button } from "@primereact/ui/button";
import { Card } from "@primereact/ui/card";
import { Dialog } from "@primereact/ui/dialog";
import { Times } from "@primeicons/react/times";

import ColorSchemeToggle from "components/ColorSchemeToggle/ColorSchemeToggle";
import ThemeLab from "features/ThemeLab/ThemeLab";

function App() {
  const cities = [
    { label: "New York", value: "NY" },
    { label: "London", value: "LDN" },
    { label: "Paris", value: "PRS" },
  ];

  const presets = { MP_App: AppPreset, Aura, Material, Lara, Nora };
  type PresetName = keyof typeof presets;

  const [city, setCity] = useState<string | null>(null);
  const [active, setActive] = useState<PresetName>("MP_App");

  function choose(name: PresetName) {
    applyPreset(presets[name]);
    setActive(name);
  }
  return (
    <Wrapper>
      <ColorSchemeToggle />

      <ThemeLab />

      <ButtonGroupWrapper>
        {(Object.keys(presets) as PresetName[]).map((name) => (
          <Button
            key={name}
            variant={name === active ? undefined : "outlined"}
            aria-pressed={name === active}
            onClick={() => {
              choose(name);
            }}
          >
            {name}
          </Button>
        ))}
      </ButtonGroupWrapper>

      <ButtonGroupWrapper>
        <Button
          onClick={() => {
            console.log($dt("primary.color"));
          }}
        >
          Primary
        </Button>
        <Button
          onClick={() => {
            console.log($dt("secondary.color"));
          }}
          className="p-button-brand-secondary"
        >
          Secondary
        </Button>
        <Button
          onClick={() => {
            console.log($dt("accent.color"));
          }}
          className="p-button-brand-accent"
        >
          Accent
        </Button>
      </ButtonGroupWrapper>

      <Card.Root style={{ maxWidth: "24rem" }}>
        <Card.Body>
          <Card.Caption>
            <Card.Title>Starter Plan</Card.Title>
            <Card.Subtitle>For learning and side projects</Card.Subtitle>
          </Card.Caption>
          <Card.Content>No state here, just composition.</Card.Content>
          <Card.Footer>
            <Button>Choose plan</Button>
          </Card.Footer>
        </Card.Body>
      </Card.Root>

      <Dialog.Root>
        <Dialog.Trigger as={Button}>Open dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Popup style={{ width: "24rem" }}>
              <Dialog.Header>
                <Dialog.Title>Hello from v11</Dialog.Title>
                <Dialog.HeaderActions>
                  <Dialog.Close
                    as={Button}
                    iconOnly
                    variant="text"
                    rounded
                    severity="secondary"
                  >
                    <Times />
                  </Dialog.Close>
                </Dialog.HeaderActions>
              </Dialog.Header>
              <Dialog.Content>
                This dialog manages its own open state.
              </Dialog.Content>
              <Dialog.Footer>
                <Dialog.Close as={Button}>Got it</Dialog.Close>
              </Dialog.Footer>
            </Dialog.Popup>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>

      <div style={{ width: "14rem" }}>
        <Select.Root
          value={city}
          onValueChange={(e: SelectValueChangeEvent) => {
            setCity(e.value as string);
          }}
          options={cities}
          optionLabel="label"
          optionValue="value"
          fluid
        >
          <Select.Trigger>
            <Select.Value placeholder="Pick a city" />
            <Select.Indicator>
              <ChevronDown />
            </Select.Indicator>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                <Select.List />
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
        <p>Selected: {city ?? "nothing yet"}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default App;
