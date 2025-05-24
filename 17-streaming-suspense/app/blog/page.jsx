'use client';
import { Suspense } from 'react';
import Views from './Views';
import Likes from './Likes';
import Comments from './Comments';
import Loading from './Loading';

export default function BlogPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Understanding Streaming in Next.js</h1>
      <p>Streaming helps render components progressively...</p>

      <Suspense fallback={<Loading text="Loading views..." />}>
        <Views />
      </Suspense>

      <Suspense fallback={<Loading text="Loading likes..." />}>
        <Likes />
      </Suspense>

      <Suspense fallback={<Loading text="Loading comments..." />}>
        <Comments />
      </Suspense>
    </div>
  );
}
