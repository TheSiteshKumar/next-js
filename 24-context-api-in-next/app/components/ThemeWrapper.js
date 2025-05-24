'use client';
import { useTheme } from '../context/ThemeContext';

export default function ThemeWrapper({ children }) {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? 'bg-gray-900 min-h-screen' : 'bg-white min-h-screen'}>
      {children}
    </div>
  );
} 