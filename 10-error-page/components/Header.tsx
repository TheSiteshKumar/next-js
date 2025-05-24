import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Your Logo
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/blog/1" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}