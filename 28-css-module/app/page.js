import Image from "next/image";
import styles from "./page.module.css";
import Button from '../components/Button';

export default function HomePage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to CSS Modules in Next.js💡</h1>
      <p>
        Tired of global CSS conflicts? Use CSS Modules for scoped, clean styling!
      </p>
      <Button />
    </main>
  );
}
