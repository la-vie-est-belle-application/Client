import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
