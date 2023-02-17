import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2.5rem;

  & h1 {
    font-size: 1.125rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 49.3% 10.7%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 0.75rem;
  row-gap: 1rem;

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
  padding: 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;

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
  gap: 0.75rem;
`;

type PaymentSelectButtonProps = {
  active: boolean;
};

export const PaymentSelectButton = styled.button<PaymentSelectButtonProps>`
  display: flex;
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 0.75rem;
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
