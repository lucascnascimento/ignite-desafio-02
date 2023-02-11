import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hello World</div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
