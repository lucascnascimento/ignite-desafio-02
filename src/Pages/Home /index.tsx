import { useEffect } from "react";
import { Banner } from "../../components/Banner";
import { ProductsList } from "../../components/ProductsList";

import { useFetchProducts } from "../../hooks/useFetchProducts";

export const Home = () => {
  const { data, isLoading, isError } = useFetchProducts();

  useEffect(() => {
    console.log(data);
  }, [data]);

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
