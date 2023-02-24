import { Trash } from "phosphor-react";
import { CartProduct, Product } from "../../../../@types/types";
import { Counter } from "../../../../components/Counter";
import { useCart } from "../../../../contexts/Cart/useCart";
import { formatMoney } from "../../../../utils";
import { DeleteButton, Details, CartItemContainer } from "./styles";

type CartItemsProps = {
  item: CartProduct;
};

export const CartItem = ({ item }: CartItemsProps) => {
  const { imgSrc, name, valueCents, id, quantity } = item;
  const { removeFromCart, updateCart } = useCart();

  const handleDeleteButton = () => removeFromCart(id);

  const handleCounterChangeValue = (value: number) => {
    updateCart(id, value);
  };

  return (
    <CartItemContainer>
      <img src={imgSrc} />
      <Details>
        <div>
          <span>{name}</span>
          <div>
            <Counter
              onChangeValue={handleCounterChangeValue}
              initialValue={quantity}
              minValue={1}
            />
            <DeleteButton onClick={handleDeleteButton}>
              <Trash size={16} />
              REMOVER
            </DeleteButton>
          </div>
        </div>
        <span>{formatMoney(valueCents)}</span>
      </Details>
    </CartItemContainer>
  );
};
