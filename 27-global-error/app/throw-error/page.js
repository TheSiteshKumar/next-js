'use client';

export default function ThrowErrorPage() {
  const throwError = () => {
    throw new Error('This is a test error from throw-error page!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-6">Error Testing Page</h1>
      <p className="mb-4 text-gray-600">Click the button below to trigger a global error:</p>
      <button
        onClick={throwError}
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
      >
        Throw Error
      </button>
    </div>
  );
} 