import { useCart } from "../../../../contexts/Cart/useCart";
import { CartItem } from "../CartItem";
import { CartItemsListContainer, EmptyCart } from "./styles";

export const CartItemsList = () => {
  const { selectedProducts } = useCart();

  if (!selectedProducts.length) {
    return (
      <EmptyCart>
        <h3>O seu carrinho está vazio</h3>
      </EmptyCart>
    );
  }

  return (
    <CartItemsListContainer>
      {selectedProducts.map((product) => (
        <CartItem item={product} key={product.id} />
      ))}
    </CartItemsListContainer>
  );
};
