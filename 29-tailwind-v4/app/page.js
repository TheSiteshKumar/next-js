export default function Page() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-center gap-12 min-h-screen p-10 bg-gray-100">
      
      {/* Box 1: No styling */}
      <div>
        <h2>Unstyled Box</h2>
        <p>This is a plain box with no CSS styling applied.</p>
      </div>

      {/* Box 2: Tailwind styled */}
      <div className="bg-blue-100 p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Styled with Tailwind</h2>
        <p className="text-blue-700">
          This box has background color, text color, padding, and rounded corners using Tailwind CSS.
        </p>
      </div>

    </main>
  );
}
