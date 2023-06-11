import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/layoutComponents/Navbar'
import Footer from './components/layoutComponents/Footer'
import Body from './components/layoutComponents/Body'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omar Jabraoui',
  description: 'Web Designer and Developer',
}

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
      </body>
    </html>
  )
}
