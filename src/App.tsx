import { useState } from "react";
import { ChevronDown } from "@primeicons/react/chevron-down";
import { Select, type SelectValueChangeEvent } from "@primereact/ui/select";
import { Button } from "@primereact/ui/button";
import { Card } from "@primereact/ui/card";
import { Dialog } from "@primereact/ui/dialog";
import { Times } from "@primeicons/react/times";

function App() {
  const cities = [
    { label: "New York", value: "NY" },
    { label: "London", value: "LDN" },
    { label: "Paris", value: "PRS" },
  ];

  const [city, setCity] = useState<string | null>(null);
  return (
    <>
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
    </>
  );
}

export default App;
