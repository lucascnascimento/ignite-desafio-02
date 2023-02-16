import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { Counter } from "../../components/Counter";
import { InformationBox } from "./components/InformationCard";
import { InputGrid } from "./styles";

export const Checkout = () => {
  return (
    <div>
      <section>
        <h1>Complete seu pedido</h1>
        <InformationBox
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon="mapPinLine"
          iconColor="base-card"
        >
          <InputGrid>
            <input type={"text"} placeholder="CEP" className="zipCode" />
            <input type={"text"} placeholder="Rua" className="street" />
            <input type={"text"} placeholder="Número" className="number" />
            <input
              type={"text"}
              placeholder="Complemento"
              className="complement"
            />
            <input
              type={"text"}
              placeholder="Bairro"
              className="neighborhood"
            />
            <input type={"text"} placeholder="Cidade" className="city" />
            <input type={"text"} placeholder="UF" className="state" />
          </InputGrid>
        </InformationBox>

        <InformationBox
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon="currencyDollar"
          iconColor="base-card"
        >
          <div>
            <button>
              <CreditCard />
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Money />
              DINHEIRO
            </button>
          </div>
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
    </div>
  );
};
