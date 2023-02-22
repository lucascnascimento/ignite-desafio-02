import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 12px;
  }
`;

export const Location = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-light"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme["purple-dark"]};
`;

export const Cart = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  position: relative;
  cursor: pointer;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["yellow-dark"]};
  top: -8px;
  width: 20px;
  height: 20px;
  left: 26.35px;
  font-size: 0.75rem;
  border-radius: 50%;
  line-height: 0;
`;
