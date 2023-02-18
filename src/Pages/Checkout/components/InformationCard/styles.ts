import styled from "styled-components";

export const InformationBoxContainer = styled.div`
  padding: var(--size-40);
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: var(--border-radius-6);
`;

export const TitleAndSubtitle = styled.div`
  display: flex;
  gap: var(--size-8);
  margin-bottom: var(--size-16);

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: var(--font-16);
    font-family: "Roboto", sans-serif;
    font-weight: var(--font-regular);
  }

  h3 {
    color: ${(props) => props.theme["base-text"]};
    font-size: var(--font-14);
    font-family: "Roboto", sans-serif;
    font-weight: var(--font-regular);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
  }
`;
