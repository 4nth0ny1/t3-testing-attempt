// import { createReactQueryHooks } from '@trpc/react';
import { createTRPCNext } from '@trpc/next';
import { type AppRouter } from "~/server/api/root";
import { getBaseUrl } from "./api";
import { httpBatchLink } from '@trpc/client';
import superjson from "superjson";
import { createTRPCReact } from '@trpc/react-query';

export const trpcReact = createTRPCReact<AppRouter>(
    // {
    // config(opts) {
    //     return {
    //         transformer: superjson,

    //       links: [
    //         httpBatchLink({
    //           /**
    //            * If you want to use SSR, you need to use the server's full URL
    //            * @link https://trpc.io/docs/ssr
    //            **/
    //           url: `${getBaseUrl()}/api/trpc`,
    //           // You can pass any HTTP headers you wish here
    //           async headers() {
    //             return {
    //               // authorization: getAuthCookie(),
    //             };
    //           },
    //         }),
    //       ],
    //     };
    //   },
    //   /**
    //    * @link https://trpc.io/docs/ssr
    //    **/
    //   ssr: false,

    // }
)