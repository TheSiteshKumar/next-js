import './globals.css'

export const metadata = {
  title: 'Slow API Demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
