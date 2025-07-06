'use client';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-xl mb-4">This is a simple Next.js application that demonstrates the use of Context API for theme toggling.</p>
      <p className="text-lg">We use React Context to manage the theme state across all components.</p>
    </div>
  );
} 