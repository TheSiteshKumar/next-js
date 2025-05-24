import Image from "next/image";

async function fetchData() {
  const res = await fetch('https://procodrr.vercel.app/?sleep=5000')
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Home() {
  const data = await fetchData()
  
  return (
    <main className="container">
      <h1>Slow API Demo: After 5 seconds</h1>
      <div className="card">
        <h2>Server Response:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  )
}
