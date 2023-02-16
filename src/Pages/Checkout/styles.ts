import styled from "styled-components";

export const AdressBox = styled.div``;

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
