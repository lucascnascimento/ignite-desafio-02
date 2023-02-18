import styled from "styled-components";

export const SuccessContainer = styled.section`
  display: flex;
  padding-top: var(--size-64);
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: var(--font-32);
    margin-bottom: var(--size-4);
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: var(--font-20);
    font-family: "Roboto", sans-serif;
    font-weight: var(--font-regular);
  }
`;

export const OrderInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--size-40);
  gap: var(--size-32);
  border-radius: var(--border-radius-6) var(--border-radius-36);
  margin-top: var(--size-40);

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border: 1px solid transparent;
`;

type InfoProps = {
  iconColor: "yellow-dark" | "yellow" | "purple";
};

export const Info = styled.div<InfoProps>`
  display: flex;
  gap: var(--size-12);

  & > div:first-child {
    height: var(--size-32);
    width: var(--size-32);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-infinite);
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[props.iconColor]};
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
  }
`;
