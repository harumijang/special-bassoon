'use client';

import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Switch from '@radix-ui/react-switch';

export default function Example() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <fieldset style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
      <Switch.Root
        checked={switchChecked}
        onCheckedChange={setSwitchChecked}
        aria-label="Enable updates"
        style={{
          width: 42,
          height: 25,
          backgroundColor: switchChecked ? 'green' : 'lightgray',
          borderRadius: 9999,
          position: 'relative',
          border: '1px solid gray',
        }}
      >
        <Switch.Thumb
          style={{
            display: 'block',
            width: 21,
            height: 21,
            backgroundColor: 'white',
            borderRadius: 9999,
            transition: 'transform 100ms',
            transform: switchChecked ? 'translateX(19px)' : 'translateX(2px)',
            willChange: 'transform',
          }}
        />
      </Switch.Root>
      <Checkbox.Root
        checked={checkboxChecked}
        onCheckedChange={setCheckboxChecked}
        aria-label="Accept terms"
        style={{
          width: 25,
          height: 25,
          backgroundColor: 'white',
          border: '2px solid gray',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Checkbox.Indicator style={{ color: 'blue', fontSize: '18px' }}>✓</Checkbox.Indicator>
      </Checkbox.Root>
    </fieldset>
  );
}
