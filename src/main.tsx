import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop.tsx";

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const enableMocking = async () => {
  if (import.meta.env.VITE_NODE_ENV !== "development") {
    console.log(import.meta.env.VITE_NODE_ENV);
    return;
  }

  const { worker } = await import("./mocks/browser.ts");
  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ScrollToTop />
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>,
  );
});
