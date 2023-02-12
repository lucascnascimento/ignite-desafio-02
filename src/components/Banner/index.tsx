import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";
import coffee from "../../assets/images/coffee.svg";
import { BannerContainer, BannerItem, GridItems, TitleSection } from "./styles";

export const Banner = () => {
  return (
    <BannerContainer>
      <TitleSection>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <GridItems>
          <BannerItem bannerColor="yellow-dark">
            <div>
              <ShoppingCart weight="fill" size={16} />
            </div>
            <span>Compra simples e segura</span>
          </BannerItem>
          <BannerItem bannerColor="base-text">
            <div>
              <Package weight="fill" size={16} />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </BannerItem>
          <BannerItem bannerColor="yellow">
            <div>
              <Timer weight="fill" size={16} />
            </div>
            <span>Entrega rápida e rastreada</span>
          </BannerItem>
          <BannerItem bannerColor="purple">
            <div>
              <Coffee weight="fill" size={16} />
            </div>
            <span>O café chega fresquinho até você</span>
          </BannerItem>
        </GridItems>
      </TitleSection>
      <div>
        <img src={coffee} alt="Copo e grãos de café" />
      </div>
    </BannerContainer>
  );
};
