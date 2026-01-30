import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Pizzeria Cosimo & Anna - Winterthur Wülflingen',
  description: 'Ihre Pizzeria in Winterthur Wülflingen. Feine Teigwaren, frische Pizzen aus dem Steinofen und italienische Spezialitäten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
