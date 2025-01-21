import { axiosInstance } from '@/libs';
import ROUTES from '@/routes';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
	providers: [
		CredentialsProvider({
			credentials: {
				customer: { label: "Customer", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const { customer, password } = credentials as {
					customer: string;
					password: string;
				};
				try {
					const { data: result } = await axiosInstance.post(
						'/real-estate/customer/login',
						{
							customer,
							password,
						}
					);

					if (!result) return null;
					return { ...result, token: result.data.token };
				} catch (ex: any) {
					console.log(ex);
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: ROUTES.LOGIN,
	},

	callbacks: {
		async jwt({ token, user, session, trigger }) {
			if (trigger === 'update') {
				return { ...token, ...session.user };
			}
			return { ...token, ...user };
		},
		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
} as NextAuthOptions);
