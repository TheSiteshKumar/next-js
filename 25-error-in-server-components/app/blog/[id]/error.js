/* app/blog/[id]/error.js */
'use client'

export default function Error({ error, reset }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <h2 className="font-bold mb-2">Error loading blog post!</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  )
}