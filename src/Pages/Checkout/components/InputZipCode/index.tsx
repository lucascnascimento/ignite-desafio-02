import { InputBase } from "../../../../styles/components/InputBase";
import { CircleNotch } from "phosphor-react";
import { InputZipCodeContainer } from "./styles";

type InputZipCodeProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

export const InputZipCode = ({
  value,
  onChange,
  onBlur,
  isLoading,
}: InputZipCodeProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value.replace(/\D/g, "").slice(0, 8);

    if (onChange) {
      onChange({
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      });
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur({
        ...e,
        target: {
          ...e.target,
          value: value,
        },
      });
    }
  };

  return (
    <InputZipCodeContainer>
      <InputBase
        type={"text"}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="CEP"
        value={value}
        className="zipCode"
      />
      {isLoading ? <CircleNotch size={24} /> : null}
    </InputZipCodeContainer>
  );
};
