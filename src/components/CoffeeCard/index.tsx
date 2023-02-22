import { Actions, CardContainer, TagContainer, PriceTag } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Counter } from "../Counter";
import { Product } from "../../@types/types";
import { useCart } from "../../contexts/Cart/useCart";

import { formatMoney } from "../../utils";
import { useState } from "react";

type CoffeeCardProps = {
  product: Product;
};

export const CoffeeCard = ({ product }: CoffeeCardProps) => {
  const { description, imgSrc, isAvailable, name, tags, valueCents } = product;
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleCounterValueChange = (value: number) => {
    setQuantity(value);
  };

  const handleCartClick = () => {
    addToCart({ ...product, quantity });
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
          <button disabled={!isAvailable} onClick={handleCartClick}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Actions>
      </div>
    </CardContainer>
  );
};
