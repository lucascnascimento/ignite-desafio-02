import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import delivery from "../../assets/images/delivery.svg";
import { Info, OrderInfoBox, SuccessContainer } from "./styles";

export const Success = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const purchaseSuccess = queryParams.get("success") === "true";

  if (!purchaseSuccess) {
    navigate("/");
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </Info>
        </OrderInfoBox>
      </div>
      <img src={delivery}></img>
    </SuccessContainer>
  );
};
