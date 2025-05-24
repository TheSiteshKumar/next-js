// app/posts/page.js (Server Component)
const PostsPage = () => {


  return (
    <div className="container">
      <h1>Next.js Data Fetching Demo</h1>
      
      <div className="info-section">
        <h2>Server-Side Data Fetching</h2>
        <p>
          In Next.js, server-side data fetching is used when you need to:
        </p>
        <ul>
          <li>Fetch data securely on the server</li>
          <li>Improve SEO with pre-rendered HTML</li>
          <li>Reduce client-side JavaScript bundle size</li>
          <li>Access databases or sensitive backend APIs</li>
        </ul>
        <p>
          To implement server-side data fetching:
        </p>
        <ol>
          <li>Use a Server Component (no "use client" directive)</li>
          <li>Make your component <code>async</code></li>
          <li>Use <code>fetch</code> or DB queries directly in the component</li>
          <li>Render the data in JSX before sending it to the client</li>
        </ol>
      </div>

      <div className="info-section">
        <h2>SEO Benefits</h2>
        <p>
          Since the HTML is generated on the server, content is immediately available to search engines.
          Server-side fetching is ideal for:
        </p>
        <ul>
          <li>Blogs and articles</li>
          <li>Product or service pages</li>
          <li>Landing pages with dynamic content</li>
        </ul>
      </div>
    </div>
  );
};

export default PostsPage;
