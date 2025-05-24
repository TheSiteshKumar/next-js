import Hello from './_components/Hello';
import { capitalize } from './_utils/helpers';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl mb-4">Private Folder Demo</h1>
      <Hello name={capitalize('next.js developers')} />
      
      <p className="mt-4 text-gray-600">
        Try accessing these routes:
        <br/>
        <code>/_components</code> or <code>/_utils</code> - both will 404
      </p>
    </main>
  );
}