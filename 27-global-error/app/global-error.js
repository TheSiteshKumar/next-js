'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global Error Caught:', error);
  }, [error]);

  // Only show error page if random number is greater than 0.5
  if (Math.random() <= 0.5) {
    return null;
  }

  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800 p-10">
        <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
        <p className="mb-4">{error?.message || 'Unexpected error occurred.'}</p>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try Again
          </button>
          <Link href="/" className="underline text-blue-600">
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
} 