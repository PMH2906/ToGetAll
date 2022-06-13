import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

import { Provider } from "next-auth/client";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kakao Naver Login NextAuthJS Prisma App</title>
      </Head>
      <Provider session={pageProps.session}>
        <ChakraProvider resetCSS>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </>
  );
}
export default MyApp;