import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { CheckoutPayload } from "../../@types/types";
import delivery from "../../assets/images/delivery.svg";
import { PAYMENT_DICTIONARY, ROUTES } from "../../utils/constants";
import { Info, OrderInfoBox, SuccessContainer } from "./styles";

export const Success = () => {
  const [searchParams] = useSearchParams();
  const { state: locationState } = useLocation();
  const purchaseSuccess = searchParams.get("success") === "true";
  const purchaseId = searchParams.get("id");
  const { city, neighborhood, number, paymentType, state, street } =
    locationState as CheckoutPayload;

  if (!purchaseSuccess || !purchaseId || !locationState) {
    return <Navigate to={ROUTES.home} />;
  }

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <OrderInfoBox>
          <Info iconColor="purple">
            <div>
              <MapPin weight="fill" size={16} />
            </div>
            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {street}, {number}
                </strong>
              </span>
              <span>
                {neighborhood} - {city}, {state}
              </span>
            </div>
          </Info>

          <Info iconColor="yellow">
            <div>
              <Timer weight="fill" size={16} />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </Info>

          <Info iconColor="yellow-dark">
            <div>
              <CurrencyDollar size={16} />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{PAYMENT_DICTIONARY.get(paymentType)}</strong>
            </div>
          </Info>
        </OrderInfoBox>
      </div>
      <img src={delivery}></img>
    </SuccessContainer>
  );
};
