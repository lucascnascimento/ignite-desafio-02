import styled from "styled-components";

export const InformationBoxContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const TitleAndSubtitle = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  h3 {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`;
