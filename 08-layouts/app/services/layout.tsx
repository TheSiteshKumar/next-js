import { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Services Section</h1>
        <nav>
          <a href="/services/mobile-app">Mobile App</a> | 
          <a href="/services/SEO">SEO</a> | 
          <a href="/services/web-app">Web App</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Services Footer</p>
      </footer>
    </div>
  );
}