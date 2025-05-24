// app/(application)/blogs/[id]/page.tsx
import React from 'react'

interface BlogPostParams {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  return (
    <div>
      <h2>Blog Post {params.id}</h2>
      <p>This is the content for blog post {params.id}.</p>
      <p>Notice how it still uses the application layout despite being a nested route.</p>
    </div>
  )
}