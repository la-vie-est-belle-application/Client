import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@shared/constants/theme";

import App from "./App.tsx";

const queryClient = new QueryClient();

const IS_DEVELOPMENT_MODE = import.meta.env.VITE_IS_DEVELOPMENT_MODE === "true";

const initMockApi = async (): Promise<void> => {
  const { worker } = await import("./apiMockWorker.ts");
  worker.start();
};

const enableMocking = async () => {
  if (!IS_DEVELOPMENT_MODE) {
    return;
  }

  await initMockApi();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ChakraProvider>,
  );
});
