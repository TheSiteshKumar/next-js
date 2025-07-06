'use client';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl mb-4">Get in touch with us!</p>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 