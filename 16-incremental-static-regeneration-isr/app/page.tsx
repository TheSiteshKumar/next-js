// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ISR in App Router</h1>
      <ul>
        {[1, 2, 3, 4].map((id) => (
          <li key={id}>
            <Link href={`/blogs/${id}`}>Go to Post #{id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
