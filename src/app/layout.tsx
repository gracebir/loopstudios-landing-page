import './globals.css'
import type { Metadata } from 'next'
import {  Alata } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'

const alata = Alata({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'loopingstudio',
  description: 'Looping studio landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={alata.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
