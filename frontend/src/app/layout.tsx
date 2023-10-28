import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
// import { ThemeProvider } from '@/components/ThemeProvider';
// import ThemeSwitcher from '@/components/ThemeSwitcher';
// import Sidebar from '@/components/Sidebar';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';
import AppWrappers from './AppWrappers';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'User Dashboard App',
  description: 'User Dashboard App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      {/* <body className={`${inter.className} bg-white dark:bg-gray-900`}> */}
      <body id={'root'}>
        <SessionProvider session={session}>
          <AppWrappers>{children}</AppWrappers>
        </SessionProvider>
      </body>
    </html>
  )
}
