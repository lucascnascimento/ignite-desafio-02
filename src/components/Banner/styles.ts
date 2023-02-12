import styled from "styled-components";
import backgroundImage from "../../assets/images/background.svg";

export const BannerContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 5.75rem;
`;

export const TitleSection = styled.div`
  max-width: 36.75rem;

  & h1 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-title"]};
  }

  & p {
    margin-bottom: 4.125rem;
    font-size: 1.25rem;
    ${(props) => props.theme["base-subtitle"]};
  }

  & > div {
  }
`;

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`;

type BannerItemProps = {
  bannerColor: "yellow-dark" | "base-text" | "yellow" | "purple";
};

export const BannerItem = styled.div<BannerItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & div {
    background-color: ${(props) => props.theme[props.bannerColor]};
    padding: 0.5rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    color: ${(props) => props.theme.white};
  }
`;
