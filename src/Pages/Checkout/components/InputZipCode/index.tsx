import { InputBase } from "../../../../styles/components/InputBase";

type InputZipCodeProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export const InputZipCode = ({
  value,
  onChange,
  onBlur,
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
    <InputBase
      type={"text"}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      placeholder="CEP"
      value={value}
      className="zipCode"
    />
  );
};
