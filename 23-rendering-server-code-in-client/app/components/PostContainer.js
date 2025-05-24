// app/components/PostContainer.js (Client Component)
'use client';

import { useState } from 'react';

export default function PostContainer({ children }) {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <button
        onClick={() => setShowPosts(!showPosts)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>
      
      {showPosts && (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}