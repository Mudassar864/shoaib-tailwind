import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    // Fetch credentials from environment variables
    const validUsername = process.env.NEXTAUTH_CREDENTIALS_USERNAME;
    const validPassword = process.env.NEXTAUTH_CREDENTIALS_PASSWORD;

    if (
      credentials.username == validUsername &&
      credentials.password == validPassword
    )
      return {
        name: "admin",
      };
    else return null;
  },
});

const config = {
  providers: [credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middlewareProtected") return !!auth;
      return true;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
