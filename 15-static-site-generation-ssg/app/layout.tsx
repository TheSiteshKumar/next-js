// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SSG Blog Demo',
  description: 'Static Site Generation with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-8 max-w-4xl mx-auto`}>
        <header className="mb-8">
          <h1 className="text-3xl font-bold">📚 SSG Blog</h1>
        </header>
        {children}
      </body>
    </html>
  )
}