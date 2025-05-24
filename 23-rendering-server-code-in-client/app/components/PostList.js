// app/components/PostList.js (Server Component)
async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  }
  
  export default async function PostList() {
    const posts = await getPosts();
  
    return (
      <div className="grid gap-4">
        {posts.slice(0, 5).map((post) => (
          <div 
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    );
  }