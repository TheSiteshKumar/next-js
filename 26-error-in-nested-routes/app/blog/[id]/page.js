/* app/blog/[id]/page.js */
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
  
  export default function BlogPage({ params }) {
    const { id } = params
    
    // Simulate error for even IDs
    if (Number(id) % 2 === 0) {
      throw new Error('Blogs with even IDs not allowed!')
    }
  
    return (
      <article>
        <h1 className="text-2xl font-bold mb-4">Blog Post {id}</h1>
        <p>This is content for blog post {id}</p>
      </article>
    )
  }