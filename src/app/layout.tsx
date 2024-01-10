import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout';
const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout(props: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Layout >{props.children}</Layout>
      </body>
    </html>
  );
}