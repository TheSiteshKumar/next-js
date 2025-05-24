import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default function BlogPage({ params }: Props) {
  // Validate ID format using regex (numbers only)
  if (!/^\d+$/.test(params.id)) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Post #{params.id}</h1>
      <p className="text-gray-600">Sample blog post content...</p>
    </div>
  )
}