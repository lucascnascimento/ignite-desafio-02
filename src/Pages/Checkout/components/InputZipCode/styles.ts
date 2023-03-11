import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const InputZipCodeContainer = styled.div`
  position: relative;

  & input {
    padding-right: var(--size-32);
  }

  & svg {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    right: var(--size-24);
    color: ${(props) => props.theme.purple};

    animation: ${rotate} 2s linear infinite;
    transform-origin: center;
  }
`;
