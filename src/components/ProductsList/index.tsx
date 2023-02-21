import { CoffeeCard } from "../CoffeeCard";
import { Error } from "../Error";
import { ProductListContainer, ProductsGrid } from "./styles";
import { Product } from "../../@types/types";

type ProductsListProps = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

export const ProductsList = ({
  isError,
  isLoading,
  products,
}: ProductsListProps) => {
  if (isLoading) return <div>isLoading</div>;

  if (isError) return <Error />;

  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>
      <ProductsGrid>
        {products.map((product) => (
          <CoffeeCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductListContainer>
  );
};
