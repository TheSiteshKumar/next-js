
import Link  from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href= "/services">Services</Link>
      <Link href= "/About">About</Link>

    </>
  );
}
