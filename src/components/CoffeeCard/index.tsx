import { Actions, CardContainer, TagContainer, PriceTag } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Counter } from "../Counter";
import americano from "../../assets/images/products/americano.svg";

export const CoffeeCard = () => {
  const handleCounterValueChange = (value: number) => {
    console.log(value);
  };

  return (
    <CardContainer>
      <img src={americano} />

      <TagContainer>
        <span>TRADICIONAL</span>
        <span>GELADO</span>
      </TagContainer>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <PriceTag>
          <span>R$ </span>
          <span>9,90</span>
        </PriceTag>
        <Actions>
          <Counter onChangeValue={handleCounterValueChange} />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Actions>
      </div>
    </CardContainer>
  );
};
