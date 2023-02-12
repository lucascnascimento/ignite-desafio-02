import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Banner />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
