import { CreditCard, Bank, Money } from "phosphor-react";
import { Counter } from "../../components/Counter";
import { InformationBox } from "./components/InformationCard";
import {
  InputBase,
  InputGrid,
  CheckoutContainer,
  PaymentSelectButton,
  PaymentSectionContainer,
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <section>
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
            <InputBase
              type={"text"}
              placeholder="Número"
              className="number"
              disabled
            />
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
      </section>

      <section>
        <h1>Cafés selecionados</h1>
        <div>
          <div>
            <img />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <Counter onChangeValue={() => {}} />
                <button>remover</button>
              </div>
              <span>R$9,90</span>
            </div>
          </div>

          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 29,70</span>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </section>
    </CheckoutContainer>
  );
};
