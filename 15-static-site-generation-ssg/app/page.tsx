// app/page.tsx
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  // SSG: Data fetched at build time
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json() as Promise<Post[]>);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">🚀 SSG Blog Demo</h1>
      
      {/* Why SSG Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">💡 Why SSG?</h2>
        <ul className="space-y-3">
          <li>⚡ Blazing-fast performance: Pre-built pages = instant delivery</li>
          <li>🔍 SEO-friendly: Static pages easily crawled by search engines</li>
          <li>🌐 Scalable: Handle traffic spikes effortlessly</li>
        </ul>
      </div>

      {/* Blog Listings */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">📚 Latest Posts</h2>
        <div className="grid gap-4">
          {posts.slice(0, 10).map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">⚡ Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">🚀 Performance</h3>
            <p>Static HTML = near-instant loads</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">📉 Server Load</h3>
            <p>No runtime page generation needed</p>
          </div>
        </div>
      </section>
    </div>
  );
}