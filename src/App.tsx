import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CartContextProvider } from "./contexts/Cart/CartContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider>
      </QueryClientProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
