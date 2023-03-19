import { Banner } from "../../components/Banner";
import { ProductsList } from "../../components/ProductsList";

import { useFetchProducts } from "../../hooks/useFetchProducts";

export const Home = () => {
  const { data, isLoading, isError } = useFetchProducts();

  return (
    <>
      <Banner />
      <ProductsList
        isError={isError}
        isLoading={isLoading}
        products={data?.products || []}
      />
    </>
  );
};
