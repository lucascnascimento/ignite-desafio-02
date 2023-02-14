import styled from "styled-components";

export const ProductListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  & > h2 {
    padding-top: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
`;
