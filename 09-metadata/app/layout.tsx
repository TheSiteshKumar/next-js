import Link from 'next/link'

export const metadata = {
  title: {
    default: 'Metadata Mastery',
    template: '%s | Metadata Mastery',
  },
  description: 'A site to master metadata in Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/blog/first-post">First Post</Link> | <Link href="/blog/second-post">Second Post</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}