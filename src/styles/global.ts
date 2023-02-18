import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --size-minus-20: -1.25rem;
    --size-minus-8: -0.5rem;
    --size-2: 0.125rem;
    --size-4: 0.25rem;
    --size-8: 0.5rem;
    --size-10: 0.625rem;
    --size-12: 0.75rem;
    --size-14: 0.875rem;
    --size-16: 1rem;
    --size-18: 1.125rem;
    --size-20: 1.25rem;
    --size-24: 1.5rem;
    --size-26: 1.625rem;
    --size-32: 2rem;
    --size-33: 2.0625rem;
    --size-38: 2.375rem;
    --size-40: 2.5rem;
    --size-48: 3rem;
    --size-54: 3.375rem;
    --size-56: 3.5rem;
    --size-64: 4rem;
    --size-66: 4.125rem;
    --size-92: 5.75rem;
    --size-120: 7.5rem;
    --size-256: 16rem;
    --size-310: 19.375rem;
    --size-588: 36.75rem;
    --size-1120: 70rem;

    --border: 1px

    --border-radius-4: 4px;
    --border-radius-6: 6px;
    --border-radius-36: 36px;
    --border-radius-44: 44px;
    --border-radius-infinite: 99999999px;
    --border-radius-50-percent: 50%;

    --font-10: var(--size-10);
    --font-12: var(--size-12);
    --font-14: var(--size-14);
    --font-16: var(--size-16);
    --font-18: var(--size-18);
    --font-20: var(--size-20);
    --font-24: var(--size-24);
    --font-32: var(--size-32);
    --font-48: var(--size-48);

    --font-regular: 400;
    --font-bold: 700;
    --font-extra-bold: 800;

    --line-height-130: 130%;
    --line-height-160: 160%;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }


  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased
  }

  body, button {
    font-family: 'Roboto', sans-serif;
    font-weight: var(--font-regular);
    font-size: var(--font-16);
  }

  button {
    all: unset;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: var(--font-extra-bold);
  }

  h1 {
    font-size: var(--font-48);
    line-height: var(--line-height-130);
  }

  h2 {
    font-size: var(--font-32);
  }

  h3 {
    font-size: var(--font-20);
  }

  h4 {
    font-size: var(--font-18);
  }
`;
