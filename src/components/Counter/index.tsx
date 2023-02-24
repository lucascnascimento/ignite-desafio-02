import { useState } from "react";
import { CounterContainer } from "./styles";

const MIN_VALUE = 0;
const MAX_VALUE = 99;

type CounterProps = {
  onChangeValue: (value: number) => void;
  disabled?: boolean;
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
};

export const Counter = ({
  onChangeValue,
  disabled = false,
  initialValue = 0,
  minValue = MIN_VALUE,
  maxValue = MAX_VALUE,
}: CounterProps) => {
  const [value, setValue] = useState(initialValue);

  const handleSumClick = () => {
    const newValue = value + 1;

    if (value >= maxValue) return;

    setValue(newValue);
    onChangeValue(newValue);
  };

  const handleSubtractionClick = () => {
    const newValue = value - 1;

    if (value <= minValue) return;

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
