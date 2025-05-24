// app/page.js (Server Component - Home Page)
import PostContainer from './components/PostContainer';
import PostList from './components/PostList';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <PostContainer>
        {/* Server Component passed as children */}
        <PostList />
      </PostContainer>
    </main>
  );
}