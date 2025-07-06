import { Inter } from "next/font/google";
import "./globals.css";

import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js App",
  description: "A simple app with theme toggle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">{children}</main>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
