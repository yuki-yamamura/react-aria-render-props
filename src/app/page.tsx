"use client";

import { Checkbox, CheckboxGroup } from "@/components/checkbox-group";

export default function Home() {
  return (
    <CheckboxGroup>
      {({ selectedValues, setValue }) => (
        <>
          <Checkbox
            label="🍎"
            value="apple"
            selectedValues={selectedValues}
            setValue={setValue}
          />
          <Checkbox
            label="🍌"
            value="banana"
            selectedValues={selectedValues}
            setValue={setValue}
          />
          <Checkbox
            label="🍇"
            value="grape"
            selectedValues={selectedValues}
            setValue={setValue}
          />
          <div>
            <div>Selected values:</div>
            <ul>
              {selectedValues.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </CheckboxGroup>
  );
}
