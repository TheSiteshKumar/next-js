export default async function Likes() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay
    return <p>❤️ Likes: 567</p>;
  }
  