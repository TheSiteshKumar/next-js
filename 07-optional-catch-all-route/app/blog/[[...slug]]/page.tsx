export default function BlogPage({
    params,
  }: {
    params: { slug?: string[] }
  }) {
    return (
      <div>
        {params.slug ? (
          <div>
            <h1>Blog Path:</h1>
            <p>{params.slug.join(' / ')}</p>
          </div>
        ) : (
          <h1>Blog Homepage</h1>
        )}
      </div>
    );
  }