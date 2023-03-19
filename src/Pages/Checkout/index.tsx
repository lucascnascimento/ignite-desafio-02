import { CreditCard, Bank, Money } from "phosphor-react";
import { InformationBox } from "./components/InformationCard";
import {
  CheckoutContainer,
  PaymentSelectButton,
  PaymentSectionContainer,
  SectionContainer,
  CartContainer,
  PriceSection,
  ConfirmationButton,
} from "./styles";
import { useCart } from "../../contexts/Cart/useCart";

import { formatMoney } from "../../utils";
import { CartItemsList } from "./components/CartItemsList";
import { AddressForm, ADDRESS_FORM_ID } from "./components/AdressForm";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFormSubmit } from "../../hooks/useFormSubmit ";
import { CREDIT_CARD, DEBIT_CARD, MONEY } from "../../utils/constants";
import { PaymentOption } from "../../@types/types";

const ZIP_CODE_SIZE = 8;

const addressFormSchema = z.object({
  zipCode: z.string().length(ZIP_CODE_SIZE),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
});

export type AddressFormInputs = z.infer<typeof addressFormSchema>;

export const Checkout = () => {
  const { deliveryCost, totalCost, itemsCost, selectedProducts } = useCart();
  const [paymentType, setPaymentType] = useState<PaymentOption>(CREDIT_CARD);
  const addressForm = useForm<AddressFormInputs>({
    resolver: zodResolver(addressFormSchema),
    mode: "onChange",
  });
  const { postForm } = useFormSubmit();
  const { handleSubmit, formState } = addressForm;
  const formattedItemsCost = formatMoney(itemsCost, {
    hasPrefix: true,
  });
  const formattedTotalCost = formatMoney(totalCost, {
    hasPrefix: true,
  });
  const formattedDeliveryCost = formatMoney(deliveryCost, {
    hasPrefix: true,
  });

  const isCartDisabled = !selectedProducts.length || !formState.isValid;

  const handlePaymentSelection = (type: PaymentOption) => () => {
    setPaymentType(type);
  };

  const handleConfirmationButtonClick = (data: AddressFormInputs) => {
    const payload = { ...data, paymentType, products: selectedProducts };

    postForm(payload);
  };

  return (
    <CheckoutContainer>
      <SectionContainer>
        <h1>Complete seu pedido</h1>
        <InformationBox
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon="mapPinLine"
          iconColor="base-card"
        >
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
        </InformationBox>

        <InformationBox
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon="currencyDollar"
          iconColor="base-card"
        >
          <PaymentSectionContainer>
            <PaymentSelectButton
              active={paymentType === CREDIT_CARD}
              onClick={handlePaymentSelection(CREDIT_CARD)}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentSelectButton>
            <PaymentSelectButton
              active={paymentType === DEBIT_CARD}
              onClick={handlePaymentSelection(DEBIT_CARD)}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentSelectButton>
            <PaymentSelectButton
              active={paymentType === MONEY}
              onClick={handlePaymentSelection(MONEY)}
            >
              <Money size={16} />
              DINHEIRO
            </PaymentSelectButton>
          </PaymentSectionContainer>
        </InformationBox>
      </SectionContainer>

      <SectionContainer>
        <h1>Cafés selecionados</h1>

        <CartContainer>
          <CartItemsList />

          <PriceSection>
            <div>
              <div>
                <span>Total de itens</span>
                <span>{formattedItemsCost}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>{formattedDeliveryCost}</span>
              </div>
              <div>
                <span>Total</span>
                <span>{formattedTotalCost}</span>
              </div>
            </div>
            <ConfirmationButton
              disabled={isCartDisabled}
              form={ADDRESS_FORM_ID}
              onClick={handleSubmit(handleConfirmationButtonClick)}
            >
              CONFIRMAR PEDIDO
            </ConfirmationButton>
          </PriceSection>
        </CartContainer>
      </SectionContainer>
    </CheckoutContainer>
  );
};
