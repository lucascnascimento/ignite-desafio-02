import { Cart, Counter, HeaderContainer, Location } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee delivery" />
      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Congonhas, MG</span>
        </Location>
        <Cart>
          <ShoppingCart weight="fill" size={22} />
          <Counter>3</Counter>
        </Cart>
      </div>
    </HeaderContainer>
  );
};
