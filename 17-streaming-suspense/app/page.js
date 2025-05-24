'use client';
import { Suspense } from 'react';
import Views from './blog/Views';
import Likes from './blog/Likes';
import Comments from './blog/Comments';
import Loading from './blog/Loading';

export default function HomePage() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Streaming Example in Next.js</h1>
      <p>
        This is an example of how you can use React's <code>Suspense</code> with the Next.js App Router to
        stream data-heavy components.
      </p>

      {/* Stream Views */}
      <Suspense fallback={<Loading text="Loading views..." />}>
        <Views />
      </Suspense>

      {/* Stream Likes */}
      <Suspense fallback={<Loading text="Loading likes..." />}>
        <Likes />
      </Suspense>

      {/* Stream Comments */}
      <Suspense fallback={<Loading text="Loading comments..." />}>
        <Comments />
      </Suspense>
    </div>
  );
}
