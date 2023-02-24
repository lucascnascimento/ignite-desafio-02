import styled from "styled-components";

export const CartItemsListContainer = styled.ul`
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

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: var(--size-32);
`;
