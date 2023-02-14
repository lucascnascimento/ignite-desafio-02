import { useState } from "react";
import { CounterContainer } from "./styles";

type CounterProps = {
  onChangeValue: (value: number) => void;
};

export const Counter = ({ onChangeValue }: CounterProps) => {
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
      <button type="button" onClick={handleSubtractionClick}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={handleSumClick}>
        +
      </button>
    </CounterContainer>
  );
};
