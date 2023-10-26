import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

export const handler =  NextAuth({
  // session: {
  //   strategy: 'jwt',
  // },
  // secret: process.env.SECRET,
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
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     user && (token.user = user);
  //     return token;
  //   },
  //   session: async ({ session, token }) => {
  //     session.user = token.user;  // Setting token in session
  //     return session;
  //   },
  // },
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    // signOut: '/auth/signout',
  }
  // Add other configuration options here
});

export { handler as GET, handler as POST }
