import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { CoffeeCard } from "./components/CoffeeCard";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Banner />
      <div style={{ margin: "10px 200px" }}>
        <CoffeeCard />
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
