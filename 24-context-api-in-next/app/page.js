'use client';

import UserDisplay from './components/UserDisplay';

export default function Home() {


  return (
    <div >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website!</h1>
      <p className="text-xl">This is a simple Next.js app with theme toggle functionality.</p>
      <UserDisplay />
    </div>
  );
}
