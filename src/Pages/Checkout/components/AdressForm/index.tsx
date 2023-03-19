import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { AddressFormInputs } from "../..";
import { useFetchAdress } from "../../../../hooks/useFetchAddress";
import { InputBase } from "../../../../styles/components/InputBase";
import { InputZipCode } from "../InputZipCode";
import { InputGrid } from "./styles";
import { toast } from "react-toastify";
import { getFromLocalStorage, setToLocalStorage } from "../../../../utils";

export const ADDRESS_FORM_ID = "addressForm";
const ZIP_CODE_SIZE = 8;
export const FORM_KEY = "@ignite-coffee-delivery:form-state-1.0.0";

export const AddressForm = () => {
  const { register, control, watch, setValue, resetField } =
    useFormContext<AddressFormInputs>();
  const formState = watch();
  const { zipCode } = formState;
  const isZipCodeEnabled = () => zipCode?.length === ZIP_CODE_SIZE;
  const { data, isFetching, isError } = useFetchAdress(
    zipCode,
    isZipCodeEnabled()
  );
  const isZipCodeError = isError && isZipCodeEnabled();

  const cleanForm = () => {
    resetField("city");
    resetField("complement");
    resetField("neighborhood");
    resetField("number");
    resetField("state");
    resetField("street");
  };

  useEffect(() => {
    if (data) {
      setValue("street", data.logradouro);
      setValue("neighborhood", data.bairro);
      setValue("city", data.localidade);
      setValue("state", data.uf);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      toast.error("CEP não encontrado");
    }
  }, [isError]);

  useEffect(() => {
    if (!isZipCodeEnabled()) {
      cleanForm();
    }
  }, [zipCode]);

  useEffect(() => {
    const isFormFilled = Object.values(formState).some((state) => !!state);

    if (isFormFilled) {
      setToLocalStorage(formState, FORM_KEY);
    }
  }, [formState]);

  useEffect(() => {
    const localStorageForm: AddressFormInputs = getFromLocalStorage(FORM_KEY);

    if (!localStorageForm) return;

    if (Object.keys(localStorageForm)) {
      setValue("city", localStorageForm.city);
      setValue("complement", localStorageForm.complement);
      setValue("neighborhood", localStorageForm.neighborhood);
      setValue("number", localStorageForm.number);
      setValue("state", localStorageForm.state);
      setValue("street", localStorageForm.street);
      setValue("zipCode", localStorageForm.zipCode);
    }
  }, []);

  return (
    <InputGrid id={ADDRESS_FORM_ID}>
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => (
          <InputZipCode
            {...field}
            isLoading={isFetching}
            isError={isZipCodeError}
          />
        )}
      />
      <InputBase
        type={"text"}
        placeholder="Rua"
        className="street"
        disabled
        {...register("street")}
      />
      <InputBase
        type={"number"}
        min={0}
        placeholder="Número"
        className="number"
        {...register("number", { valueAsNumber: true })}
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
