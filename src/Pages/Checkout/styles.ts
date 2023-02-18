import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: var(--size-32);
  padding-top: var(--size-40);
`;

export const SectionContainer = styled.section`
  display: flex;
  gap: var(--size-12);
  flex-direction: column;

  h1 {
    font-size: var(--font-18);
    padding-bottom: var(--size-16);
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 49.3% 10.7%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: var(--size-12);
  row-gap: var(--size-16);

  .zipCode {
    grid-column: 1;
  }
  .street {
    grid-column: 1 / 4;
    grid-row: 2;
  }
  .number {
    grid-column: 1 / 2;
    grid-row: 3;
  }
  .complement {
    grid-column: 2 / 4;
    grid-row: 3;
  }
  .neighborhood {
    grid-column: 1 / 2;
    grid-row: 4;
  }
  .city {
    grid-column: 2 / 3;
    grid-row: 4;
  }
  .state {
    grid-column: 3 / 4;
    grid-row: 4;
  }
`;

export const InputBase = styled.input`
  padding: var(--size-12);
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: var(--font-regular);
  font-size: var(--font-14);

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme["base-button"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme["base-label"]};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme["base-label"]};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme["base-label"]};
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

export const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: var(--size-12);

  li {
    padding: var(--size-12) 0;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  }

  li:first-child {
    padding-bottom: var(--size-12);
    padding-top: 0;
    border-top: none;
  }
`;

export const CartItem = styled.li`
  display: flex;
  gap: var(--size-20);

  img {
    height: var(--size-64);
    width: var(--size-64);
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: var(--size-8);
    flex-direction: column;

    & > div {
      display: flex;
      gap: var(--size-8);
    }
  }

  & > span {
    font-weight: var(--font-bold);
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--size-4);
  padding: var(--size-8);
  font-size: var(--font-12);
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: var(--border-radius-6);
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
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
export const ConfirmationButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: var(--font-bold);
  font-size: var(--font-14);
  padding: var(--size-12);
  border-radius: var(--border-radius-6);
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
