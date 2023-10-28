import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const nextAuthOptions: NextAuthOptions = {
  // session: {
  //   strategy: 'jwt',
  // },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      type: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/login`, {
          method: 'POST',
          body: JSON.stringify({email: credentials?.email, password: credentials?.password}),
          headers: { "Content-Type": "application/json" }
        })
        const { user, accessToken } = await res.json();
  
        // Return null if user data could not be retrieved
        if (!user || !accessToken) {
          throw new Error('Invalid Credentials');
        }
        
        // If no error and we have user data, return it
        return { ...user, accessToken }
      }
    }),
  ],
  callbacks: {
    // signIn: async({ user, account, profile, email, credentials }) => {
    //   const isAllowedToSignIn = true
    //   if (isAllowedToSignIn) {
    //     return true
    //   } else {
    //     // Return false to display a default error message
    //     return false
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // }
    jwt: async ({token, user}:any) => {
      if (user) {
        token.accessToken = user.accessToken
        token.id = user.uid
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      session.accessToken = token.accessToken;  // Setting token in session
      session.id = token?.id;  // Setting token in session
      return session;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    // error: '/auth/error',
    // signOut: '/auth/signout',
  },
  // Add other configuration options here
};