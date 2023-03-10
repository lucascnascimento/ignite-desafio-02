import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { AddressFormInputs } from "../..";
import { useFetchAdress } from "../../../../hooks/useFetchAddress";
import { InputBase } from "../../../../styles/components/InputBase";
import { InputZipCode } from "../InputZipCode";
import { InputGrid } from "./styles";

export const ADDRESS_FORM_ID = "addressForm";

export const AddressForm = () => {
  const { register, control, watch, setValue } =
    useFormContext<AddressFormInputs>();
  const zipCode = watch("zipCode");

  const { data, isLoading, isError } = useFetchAdress(zipCode);

  useEffect(() => {
    if (data) {
      setValue("street", data.logradouro);
      setValue("neighborhood", data.bairro);
      setValue("city", data.localidade);
      setValue("state", data.uf);
    }
  }, [data]);

  return (
    <InputGrid id={ADDRESS_FORM_ID}>
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => <InputZipCode {...field} />}
      />
      <InputBase
        type={"text"}
        placeholder="Rua"
        className="street"
        disabled
        {...register("street")}
      />
      <InputBase
        type={"text"}
        placeholder="Número"
        className="number"
        {...register("number")}
      />
      <InputBase
        type={"text"}
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
      />
      <InputBase
        type={"text"}
        placeholder="Bairro"
        className="neighborhood"
        disabled
        {...register("neighborhood")}
      />
      <InputBase
        type={"text"}
        placeholder="Cidade"
        className="city"
        disabled
        {...register("city")}
      />
      <InputBase
        type={"text"}
        placeholder="UF"
        className="state"
        disabled
        {...register("state")}
      />
    </InputGrid>
  );
};
