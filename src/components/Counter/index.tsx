import { useState } from "react";
import { CounterContainer } from "./styles";

type CounterProps = {
  onChangeValue: (value: number) => void;
  disabled?: boolean;
};

export const Counter = ({ onChangeValue, disabled = false }: CounterProps) => {
  const [value, setValue] = useState(0);

  const handleSumClick = () => {
    const newValue = value + 1;

    if (value >= 99) return;

    setValue(newValue);
    onChangeValue(newValue);
  };

  const handleSubtractionClick = () => {
    const newValue = value - 1;

    if (value <= 0) return;

    setValue(newValue);
    onChangeValue(newValue);
  };

  return (
    <CounterContainer>
      <button
        type="button"
        onClick={handleSubtractionClick}
        disabled={disabled}
      >
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={handleSumClick} disabled={disabled}>
        +
      </button>
    </CounterContainer>
  );
};
