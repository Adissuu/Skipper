import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout';
import { ReactNode } from 'react'; // Add the missing import

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout(props: { children: ReactNode } & React.HTMLAttributes<HTMLElement>) { // Update the type of the props

  return (
    <html lang="en">
      <body>
        <Layout {...props}>{props.children}</Layout>
      </body>
    </html>
  );
}