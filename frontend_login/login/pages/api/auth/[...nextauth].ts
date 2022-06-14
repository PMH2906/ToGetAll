import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prisma';
import KakaoProvider from 'next-auth/providers/kakao';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
    providers: [
        Providers.Kakao({
        // KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET
            // clientId: process.env.KAKAO_CLIENT_ID,
            // clientSecret: process.env.KAKAO_CLIENT_SECRET
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
};