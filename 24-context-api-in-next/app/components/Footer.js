'use client';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`p-4 mt-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto text-center">
        <p>© 2025 My Simple App. All rights reserved.</p>
      </div>
    </footer>
  );
} 