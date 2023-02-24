import styled from "styled-components";

export const CartItemContainer = styled.li`
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
