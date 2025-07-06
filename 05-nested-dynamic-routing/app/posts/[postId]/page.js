export default function PostPage({ params }) {
    return <h1>Post ID: {params.postId}</h1>;
  }
  
  // Optional: Generate static paths
  export async function generateStaticParams() {
    return [{ postId: '1' }, { postId: '2' }];
  }