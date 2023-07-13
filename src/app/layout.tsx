import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Estate App',
  description: 'Real Estate App built with @mui/material and @nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Lang = 'en'
  return (
    <html lang={Lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
