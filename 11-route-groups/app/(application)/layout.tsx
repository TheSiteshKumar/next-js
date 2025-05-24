// app/(application)/layout.tsx
import React from 'react'
import Link from 'next/link'

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout-container">
      <header style={{ backgroundColor: '#4CAF50', padding: '20px', textAlign: 'center' }}>
        <h1>Application Header</h1>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/files">Files</Link></li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        {children}
      </main>
      <footer style={{ backgroundColor: '#FF5722', padding: '20px', textAlign: 'center' }}>
        <p>Application Footer</p>
      </footer>
    </div>
  )
}