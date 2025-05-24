'use client';
import { useTheme } from './context/ThemeContext';

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Simple App</h1>
      <p className="text-xl">This is a simple Next.js app with theme toggle functionality.</p>
    </div>
  );
}
