import styled from "styled-components";

type InputBaseProps = {
  isError?: boolean;
};

export const InputBase = styled.input<InputBaseProps>`
  padding: var(--size-12);
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-color: ${(props) =>
    props.isError ? props.theme.red : props.theme["base-button"]};
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
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.isError ? props.theme.red : props.theme["yellow-dark"]};
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
