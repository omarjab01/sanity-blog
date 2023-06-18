import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/layoutComponents/Navbar'
import Footer from './components/layoutComponents/Footer'
import Body from './components/layoutComponents/Body'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col`}>
        <Navbar />
        <Body>{children}</Body>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
