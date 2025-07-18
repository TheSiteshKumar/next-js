import './globals.css';

export const metadata = {
  title: 'Simple Tailwind App',
  description: 'Basic app with Tailwind & error handling',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
