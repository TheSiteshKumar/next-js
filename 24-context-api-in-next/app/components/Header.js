'use client';
import Link from 'next/link';


export default function Header() {


  return (
    <header >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
        
      </nav>
    </header>
  );
} 