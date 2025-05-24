import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">Next.js Image Component Benefits</h1>
        
        <div className="grid gap-12">
          {/* Example 1: Basic Image with Automatic Optimization */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">1. Automatic Image Optimization</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">Next.js automatically optimizes images, serving them in modern formats like WebP when supported by the browser.</p>
            <div className="relative w-full max-w-2xl h-[400px] mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
                alt="Beautiful landscape"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Example 2: Responsive Images */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">2. Responsive Images</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">Images automatically adapt to different screen sizes and device pixel ratios.</p>
            <div className="relative w-full h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
                alt="Responsive image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Example 3: Lazy Loading */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">3. Lazy Loading</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">Images are lazy loaded by default, improving initial page load performance.</p>
            <div className="relative w-full max-w-2xl h-[400px] mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
                alt="Lazy loaded image"
                fill
                className="object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </section>

          {/* Example 4: Image Quality Control */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">4. Quality Control</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">You can control image quality and format to balance between performance and visual quality.</p>
            <div className="relative w-full max-w-2xl h-[400px] mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
                alt="Quality controlled image"
                fill
                quality={75}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
