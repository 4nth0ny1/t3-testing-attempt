import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  type ReactNode,
  useState,
  type PropsWithChildren,
  type JSX,
} from "react";
import { trpcReact } from "../trpc";
import { getBaseUrl } from "../api";
import superjson from "superjson";

import { httpBatchLink } from "@trpc/client";

const url = `http://localhost:${process.env.PORT ?? 3000}/api/trpc`;

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

const trpcClient = trpcReact.createClient({
  links: [httpBatchLink({ url })],
  transformer: superjson,
});

export const TRPCWrapper = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcReact.Provider>
  );
};
