import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Next.js Global Error Handling Demo
        </h1>
        
        <p className="text-lg mb-8 text-gray-600">
          This demo showcases a custom global error handling implementation with random display behavior.
          Try it out by visiting the test page!
        </p>

        <div className="space-y-4">
          <a
            href="/throw-error"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Test Page
          </a>
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">What to Expect:</h2>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              <li>Click the button above to go to the test page</li>
              <li>Click "Throw Error" to trigger a global error</li>
              <li>You'll see the error page 50% of the time</li>
              <li>Check the console to see error logs</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
