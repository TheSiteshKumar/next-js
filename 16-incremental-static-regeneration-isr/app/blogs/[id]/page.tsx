// app/blogs/[id]/page.tsx

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts = [{ id: "1" }, { id: "2" }]; // Example static posts
  return posts.map((post) => ({ id: post.id }));
}

export const revalidate = 60; // Regenerate this page every 60 seconds

export default async function BlogPage({ params }: Props) {
  const { id } = params;

  // Simulate fetching post
  const post = {
    id,
    title: `This is blog post #${id}`,
    content: `This is some dynamic content for post ${id}`,
  };

  if (!post) return <div>Not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
