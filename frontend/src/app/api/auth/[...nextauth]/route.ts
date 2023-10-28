import NextAuth from 'next-auth';
import { nextAuthOptions } from '@/config/auth';

const handler = (req: any, res: any) => NextAuth(req, res, nextAuthOptions);

export { handler as GET, handler as POST };
