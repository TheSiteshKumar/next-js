// app/blog/[...slug]/page.tsx
export default function BlogPage({
    params,
  }: {
    params: { slug: string[] }
  }) {
    return (
      <div>
        <h1>Blog Path Segments:</h1>
        <ul>
          {params.slug.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))}
        </ul>
      </div>
    );
  }