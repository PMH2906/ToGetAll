import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/client";
import { signIn, signOut, useSession } from "next-auth/react"
import { Flex, Button, Heading, VStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;
  
  return (
    <div>
      <Head>
        <title>Kakao Naver Login NextAuthJS Prisma App</title>
        <meta name="description" content="Kakao Naver NextAuth Prisma App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justify="center">
        <VStack mb={6}>
          <Heading mb={6}>Kakao Naver Login NextAuthJS Prisma App</Heading>

          {!session && (
            <Button colorScheme="facebook" onClick={signIn}>
              sign in
            </Button>
          )}

          {session && (
            <Button colorScheme="twitter" onClick={signOut}>
              sign out
            </Button>
          )}
        </VStack>
      </Flex>
    </div>
  );
};

export default Home;