import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, useState } from "react";
const QueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        mutations: {
          retry: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
