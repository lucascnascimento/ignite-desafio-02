import styled, { keyframes } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: var(--size-32);
  padding-top: var(--size-40);
`;

export const SectionContainer = styled.section`
  display: flex;
  gap: var(--size-12);
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: var(--font-18);
    padding-bottom: var(--size-16);
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const PaymentSectionContainer = styled.div`
  display: flex;
  gap: var(--size-12);
`;

type PaymentSelectButtonProps = {
  active: boolean;
};

export const PaymentSelectButton = styled.button<PaymentSelectButtonProps>`
  display: flex;
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  font-size: var(--font-12);
  padding: var(--size-16);
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  gap: var(--size-12);
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  border: solid 1px
    ${(props) => (props.active ? props.theme.purple : "transparent")};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const CartContainer = styled.div`
  padding: var(--size-40);
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: var(--border-radius-6) var(--border-radius-44);
`;

export const PriceSection = styled.div`
  font-size: var(--font-14);
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  flex-direction: column;
  gap: var(--size-24);

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--size-12);

    & > div {
      display: flex;
      justify-content: space-between;
    }

    & > div:last-child {
      font-size: var(--font-20);
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: var(--font-bold);
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type ConfirmationButtonProps = {
  isLoading: boolean;
};

export const ConfirmationButton = styled.button<ConfirmationButtonProps>`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: var(--font-bold);
  font-size: var(--font-14);
  padding: var(--size-12);
  border-radius: var(--border-radius-6);
  text-align: center;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--size-16);

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    background-color: ${(props) =>
      props.isLoading ? props.theme.yellow : props.theme["yellow-light"]};
    cursor: not-allowed;
  }

  & svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
