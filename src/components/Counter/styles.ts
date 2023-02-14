import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  height: 2rem;

  & span {
    width: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
  }

  & button {
    color: ${(props) => props.theme.purple};
    font-size: 1.5rem;
    line-height: 0;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
