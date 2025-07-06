'use client';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {isDarkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
} 