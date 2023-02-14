import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px 20px;

  & img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 4px;
  }

  & h3 {
    margin: 8px 0px;
  }

  & p {
    font-size: 14px;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    margin-top: 33px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const TagContainer = styled.div`
  font-size: 0.625rem;
  font-weight: bold;
  display: flex;
  gap: 0.25rem;

  & span {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 4px 8px;
    border-radius: 999999px;
    margin: 8px 0px;
  }
`;

export const PriceTag = styled.div`
  span:first-child {
    font-size: 0.875rem;
  }

  span:last-child {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > button {
    display: flex;
    width: flex;
    justify-content: center;
    align-items: center;
    height: 2.375rem;
    width: 2.375rem;
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`;
