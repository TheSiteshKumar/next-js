// app/demo/page.tsx
export default function RenderingDemo() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Header Section */}
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚀 Mastering Next.js Rendering Paradigms
          </h1>

        </div>

        {/* Introduction */}
        <section className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg text-gray-600">
            Next.js simplifies web app development by offering multiple rendering methods – 
            but this flexibility can initially feel overwhelming. 
            <strong className="block mt-2 text-blue-600">
              The key? Knowing where your HTML is generated.
            </strong>
          </p>
        </section>

        {/* SSR Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">🔹</span>
            Server-Side Rendering (SSR)
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500">📦</span>
              <div>
                <strong>The server builds and sends the full HTML page</strong>
                <p className="mt-1 text-sm text-gray-500">Great for SEO & initial page load speed</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500">🧠</span>
              <div>
                <strong>Traditional approach</strong>
                <p className="mt-1 text-sm text-gray-500">New page = new server request</p>
              </div>
            </li>
          </ul>
        </section>

        {/* CSR Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="bg-green-100 text-green-600 p-2 rounded-lg">🔹</span>
            Client-Side Rendering (CSR)
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📭</span>
              <div>
                <strong>Server sends blank shell + JavaScript</strong>
                <p className="mt-1 text-sm text-gray-500">Fast in-app navigation & dynamic interactions</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <div>
                <strong>SEO Challenges</strong>
                <p className="mt-1 text-sm text-gray-500">Search engines improving JavaScript understanding</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Superpower Section */}
        <section className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">🦸♂️</span>
            Next.js Superpower: Mix & Match!
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-blue-500">📘</span>
                Blog Example (SSR)
              </h3>
              <p className="text-gray-600">
                Server-rendered content for instant SEO visibility
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-green-500">📊</span>
                Dashboard Example (CSR)
              </h3>
              <p className="text-gray-600">
                Client-side interactions for dynamic experiences
              </p>
            </div>
          </div>
        </section>

        {/* Why Developers Love This */}
        <section className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Developers Love This ❤️
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-600 mb-1">Flexibility</h3>
              <p className="text-gray-600">Optimize per page: speed, SEO, or interactivity</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-1">Best of Both Worlds</h3>
              <p className="text-gray-600">SSR for SEO + CSR for smooth UX</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-1">Future-Proof</h3>
              <p className="text-gray-600">Next.js handles complexity, you focus on building</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="p-6 bg-gray-800 text-white rounded-lg text-center">
          <p className="text-xl font-semibold">
            Next.js gives you the flexibility to build performance-optimized, 
            SEO-friendly, and dynamic apps—all in one stack. 🚀
          </p>
        </div>
      </article>
    </main>
  );
}