// app/(marketing)/services/page.tsx
import React from 'react'

export default function ServicesPage() {
  return (
    <div>
      <h2>Our Services</h2>
      <p>This is the services page. It also uses the marketing layout but the URL is just /services.</p>
      <ul>
        <li><a href="/services/web-development">Web Development</a></li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  )
}