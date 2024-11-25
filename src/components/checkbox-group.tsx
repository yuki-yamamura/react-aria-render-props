"use client";

import { type ReactNode, useState } from "react";

type CheckboxGroupRenderProps = {
  selectedValues: string[];
  setValue: (value: string[]) => void;
};

type CheckboxGroupProps = {
  children: ReactNode | ((values: CheckboxGroupRenderProps) => ReactNode);
};

export const CheckboxGroup = ({ children }: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  if (typeof children === "function") {
    return children({ selectedValues, setValue: setSelectedValues });
  }

  return children;
};

type CheckboxProps = CheckboxGroupRenderProps & {
  label: string;
  value: string;
};

export const Checkbox = ({
  selectedValues,
  setValue,
  label,
  value,
}: CheckboxProps) => {
  const handleClick = () => {
    const isSelected = selectedValues.includes(value);
    if (isSelected) {
      setValue(selectedValues.filter((v) => v !== value));
    } else {
      setValue([...selectedValues, value]);
    }
  };

  return (
    <label>
      <span>{label}</span>
      <input
        type="checkbox"
        checked={selectedValues.includes(value)}
        onClick={handleClick}
      />
    </label>
  );
};
