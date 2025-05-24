// app/page.tsx
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Next.js Route Groups Demo</h1>
      <p>This demo showcases how to use route groups in Next.js to organize your app structure.</p>
      
      <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'left' }}>
        <h2>Navigation:</h2>
        <div style={{ marginBottom: '30px' }}>
          <h3>Marketing Pages (orange header/footer):</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/services/web-development">Web Development Service</Link></li>
          </ul>
        </div>
        
        <div>
          <h3>Application Pages (green header/orange footer):</h3>
          <ul>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/blogs/100">Blog Post 100</Link></li>
            <li><Link href="/files">Files</Link></li>
            <li><Link href="/files/documents/report.pdf">Sample File Path</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}