import { ReactNode } from "react";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { InformationBoxContainer, TitleAndSubtitle } from "./styles";
import { DefaultTheme, useTheme } from "styled-components";

const ICONS = {
  mapPinLine: (color: string) => <MapPinLine size={22} color={color} />,
  currencyDollar: (color: string) => <CurrencyDollar size={22} color={color} />,
};

type InformationCardProps = {
  icon: "mapPinLine" | "currencyDollar";
  iconColor: keyof DefaultTheme;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const InformationBox = ({
  icon = "mapPinLine",
  iconColor = "purple",
  title = "Título",
  subtitle = "Subtítulo",
  children,
}: InformationCardProps) => {
  const theme = useTheme();

  return (
    <InformationBoxContainer>
      <TitleAndSubtitle>
        {ICONS[icon](theme[iconColor])}
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </TitleAndSubtitle>
      {children}
    </InformationBoxContainer>
  );
};
