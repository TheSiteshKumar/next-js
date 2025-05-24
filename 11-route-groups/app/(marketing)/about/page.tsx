// app/(marketing)/about/page.tsx
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <h2>About Us</h2>
      <p>This is the about page. Notice how it uses the marketing layout but the URL is just /about.</p>
      <p>Route groups allow us to organize our code logically without affecting the URL structure.</p>
    </div>
  )
}