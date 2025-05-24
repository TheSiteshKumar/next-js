export default async function Comments() {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate delay
    return <p>💬 Comments: 42</p>;
  }
  