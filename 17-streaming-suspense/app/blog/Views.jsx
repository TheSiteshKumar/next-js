export default async function Views() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
    return <p>👁️ Views: 1234</p>;
  }
  