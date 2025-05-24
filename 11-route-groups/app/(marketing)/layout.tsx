// app/(marketing)/layout.tsx
import Link from 'next/link'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header style={{ backgroundColor: '#f8a100', padding: '20px', textAlign: 'center' }}>
        <h1>Marketing Header</h1>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        {children}
      </main>
      <footer style={{ backgroundColor: '#f8a100', padding: '20px', textAlign: 'center' }}>
        <p>Marketing Footer</p>
      </footer>
    </>
  )
}