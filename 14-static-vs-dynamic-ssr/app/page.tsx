// app/page.tsx
import React from 'react';

// Static data - built at compile time
const staticFeatures = [
  "Pre-rendered HTML",
  "Instant page loads",
  "Great for SEO"
];

// Dynamic data fetch (simulated API call)
async function fetchDynamicData() {
  // Simulate API delay for demo
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "Latest News" },
    { id: 2, title: "User Dashboard" },
    { id: 3, title: "Live Metrics" }
  ];
}

export default async function Home() {
  // Dynamic rendering: Fetch data on EVERY request
  const dynamicContent = await fetchDynamicData();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Next.js Rendering Explained
      </h1>

      {/* Static Rendering Demo */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          📌 Static Rendering
        </h2>
        <div className="space-y-2">
          <p className="text-gray-700">
            Built once at <code>npm run build</code> time. 
            Check your <code>.next/server</code> folder!
          </p>
          <ul className="list-disc pl-6">
            {staticFeatures.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dynamic Rendering Demo */}
      <section className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          🌐 Dynamic Rendering
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Fresh data on <em>every request</em> (simulated 1s delay):
          </p>
          <div className="space-y-2">
            {dynamicContent.map(item => (
              <div 
                key={item.id}
                className="p-3 bg-gray-100 rounded animate-pulse"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="mt-8 p-4 bg-yellow-50 rounded border border-yellow-200">
        <h3 className="text-lg font-semibold mb-2">🛠 Key Takeaways</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 rounded">
            ✅ Static: Built once
          </div>
          <div className="p-3 bg-purple-50 rounded">
            🔁 Dynamic: Per request
          </div>
        </div>
      </div>

      {/* Social Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>#NextJS #WebDevelopment #Rendering #TechTips</p>
      </footer>
    </div>
  );
}