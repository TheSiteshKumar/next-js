// app/(application)/files/[...path]/page.tsx
import React from 'react'

interface FilePathParams {
  params: {
    path: string[]
  }
}

export default function FilePath({ params }: FilePathParams) {
  return (
    <div>
      <h2>File Path: {params.path.join('/')}</h2>
      <p>This is a catch-all route that handles any file path.</p>
      <p>The current path segments are: {JSON.stringify(params.path)}</p>
    </div>
  )
}