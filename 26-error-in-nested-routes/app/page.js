/* app/page.js */
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Blog Demo</h1>
      <div className="space-y-2">
        <p>Test blog routes:</p>
        <div className="flex gap-4">
          <a href="/blog/1" className="text-blue-600">Blog 1</a>
          <a href="/blog/2" className="text-blue-600">Blog 2</a>
          <a href="/blog/3" className="text-blue-600">Blog 3</a>
        </div>
      </div>
    </div>
  )
}