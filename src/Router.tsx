import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home ";
import { Success } from "./Pages/Success";
import { ROUTES } from "./utils/constants";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<DefaultLayout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.checkout} element={<Checkout />} />
        <Route path={ROUTES.success} element={<Success />} />
      </Route>
    </Routes>
  );
};
