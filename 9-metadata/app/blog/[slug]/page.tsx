import { Metadata } from 'next'
import { Post, posts } from '../../../lib/posts'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post: Post | undefined = posts.find(p => p.slug === params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    }
  }
  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post: Post | undefined = posts.find(p => p.slug === params.slug)
  if (!post) {
    return <h1>Post Not Found</h1>
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Slug: {params.slug}</p>
    </div>
  )
}