async function getData() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    title: "Home Page",
    description: "Welcome to our website!",
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg">{data.description}</p>
    </div>
  );
}