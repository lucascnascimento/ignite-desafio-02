import { CoffeeCard } from "../CoffeeCard";

import { ProductListContainer, ProductsGrid } from "./styles";

export const ProductsList = () => {
  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>
      <ProductsGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <CoffeeCard key={value} />
        ))}
      </ProductsGrid>
    </ProductListContainer>
  );
};
