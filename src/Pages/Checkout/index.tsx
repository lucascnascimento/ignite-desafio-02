import { CreditCard, Bank, Money, Trash } from "phosphor-react";
import { InformationBox } from "./components/InformationCard";
import {
  InputBase,
  InputGrid,
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

export const Checkout = () => {
  const { deliveryCost, totalCost, itemsCost, selectedProducts } = useCart();

  const formattedItemsCost = formatMoney(itemsCost, {
    hasPrefix: true,
  });
  const formattedTotalCost = formatMoney(totalCost, {
    hasPrefix: true,
  });
  const formattedDeliveryCost = formatMoney(deliveryCost, {
    hasPrefix: true,
  });
  const isCartDisabled = !selectedProducts.length;

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
          <InputGrid>
            <InputBase type={"text"} placeholder="CEP" className="zipCode" />
            <InputBase
              type={"text"}
              placeholder="Rua"
              className="street"
              disabled
            />
            <InputBase type={"text"} placeholder="Número" className="number" />
            <InputBase
              type={"text"}
              placeholder="Complemento"
              className="complement"
            />
            <InputBase
              type={"text"}
              placeholder="Bairro"
              className="neighborhood"
              disabled
            />
            <InputBase
              type={"text"}
              placeholder="Cidade"
              className="city"
              disabled
            />
            <InputBase
              type={"text"}
              placeholder="UF"
              className="state"
              disabled
            />
          </InputGrid>
        </InformationBox>

        <InformationBox
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon="currencyDollar"
          iconColor="base-card"
        >
          <PaymentSectionContainer>
            <PaymentSelectButton active={false}>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentSelectButton>
            <PaymentSelectButton active={false}>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentSelectButton>
            <PaymentSelectButton active={true}>
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
            <ConfirmationButton disabled={isCartDisabled}>
              CONFIRMAR PEDIDO
            </ConfirmationButton>
          </PriceSection>
        </CartContainer>
      </SectionContainer>
    </CheckoutContainer>
  );
};
