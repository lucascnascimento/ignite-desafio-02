import { Actions, CardContainer, TagContainer, PriceTag } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Counter } from "../Counter";
import { Product } from "../../@types/types";

import { formatMoney } from "../../utils";

type CoffeeCardProps = {
  product: Product;
};

export const CoffeeCard = ({ product }: CoffeeCardProps) => {
  const { description, imgSrc, isAvailable, name, tags, valueCents } = product;

  const handleCounterValueChange = (value: number) => {
    console.log(value);
  };

  return (
    <CardContainer>
      <img src={imgSrc} />

      <TagContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>

      <h3>{name}</h3>
      <p>{description}</p>

      <div>
        <PriceTag>
          {isAvailable ? (
            <>
              <span>R$ </span>
              <span>{formatMoney(valueCents)}</span>
            </>
          ) : (
            <span className="unavailable">Indisponível</span>
          )}
        </PriceTag>
        <Actions>
          <Counter
            onChangeValue={handleCounterValueChange}
            disabled={!isAvailable}
          />
          <button disabled={!isAvailable}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Actions>
      </div>
    </CardContainer>
  );
};
