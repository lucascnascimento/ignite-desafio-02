import { Cart, Counter, HeaderContainer, Location } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to={ROUTES.home}>
        <img src={logo} alt="Coffee delivery" />
      </Link>
      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Congonhas, MG</span>
        </Location>
        <Link to={ROUTES.checkout}>
          <Cart>
            <ShoppingCart weight="fill" size={22} />
            <Counter>3</Counter>
          </Cart>
        </Link>
      </div>
    </HeaderContainer>
  );
};
