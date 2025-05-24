import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
      <h1>Next.js Data Fetching Demo</h1>
      
      <div className="info-section">
        <h2>Client-Side Data Fetching</h2>
        <p>
          In Next.js, client-side data fetching is used when you need to:
        </p>
        <ul>
          <li>Fetch data on user interaction</li>
          <li>Access browser APIs</li>
          <li>Keep data fresh with real-time updates</li>
          <li>Fetch data based on client-side state</li>
        </ul>
        <p>
          To implement client-side data fetching:
        </p>
        <ol>
          <li>Add the "use client" directive at the top of your component</li>
          <li>Use React hooks like useState and useEffect</li>
          <li>Make API calls using fetch or other HTTP clients</li>
          <li>Update the component state with the fetched data</li>
        </ol>
      </div>

      <div className="info-section">
        <h2>SEO Considerations</h2>
        <p>
          Client-side data fetching does not expose content to search engines at initial load, which can negatively impact SEO.
          To improve SEO:
        </p>
        <ul>
          <li>Use server-side rendering (SSR) or static site generation (SSG) for SEO-critical pages</li>
          <li>Ensure metadata (title, description) is set using <code>next/head</code></li>
          <li>Provide meaningful fallback or loading content for crawlers</li>
        </ul>
      </div>

      <div className="demo-link">
        <Link href="/posts" className="link">
          View Posts Demo →
        </Link>
      </div>
    </div>
  );
};

export default Home;
