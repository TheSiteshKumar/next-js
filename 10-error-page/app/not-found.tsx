import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}

export const metadata = {
  title: '404 - Page Not Found',
}