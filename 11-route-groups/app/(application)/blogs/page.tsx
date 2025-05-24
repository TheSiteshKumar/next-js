// app/(application)/blogs/page.tsx
import React from 'react'
import Link from 'next/link'

export default function BlogsPage() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <p>This page uses the application layout but the URL is just /blogs.</p>
      <ul>
        <li><Link href="/blogs/100">Blog Post 100</Link></li>
        <li><Link href="/blogs/101">Blog Post 101</Link></li>
        <li><Link href="/blogs/102">Blog Post 102</Link></li>
      </ul>
    </div>
  )
}