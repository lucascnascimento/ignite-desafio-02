import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  gap: var(--size-24);
  align-items: center;
  justify-content: center;
  margin-top: var(--size-64);

  svg {
    width: var(--size-48);
    height: var(--size-48);
    color: ${(props) => props.theme.purple};
  }
`;
