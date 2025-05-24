// app/posts/[id]/page.tsx
interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

// Disables runtime page generation 
// Only pre-built pages (e.g., your 200 pages) are accessible. Any new route (like /blogs/500) returns a 404. Ideal for fixed datasets where you don’t want unexpected pages.


export const dynamicParams = false; 



export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json() as Promise<Post[]>);

  return posts.slice(0, 20).map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json() as Promise<Post>);

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      {post.userId && (
        <p className="text-sm text-gray-500">User ID: {post.userId}</p>
      )}
    </article>
  );
}
