'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const links = [
    { href: "/import", label: "📦 Import" },
    { href: "/placement", label: "📍 Placement" },
    { href: "/search", label: "🔍 Search" },
    { href: "/simulate", label: "⏳ Simulate" },
    { href: "/waste", label: "🗑 Waste" },
    { href: "/logs", label: "🧾 Logs" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow dark:bg-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">🚀 Space Station Inventory</h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-blue-700 hover:bg-blue-500 px-3 py-1 rounded text-sm"
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Navigation Bar */}
        <nav className="mt-4 flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:bg-blue-500 bg-blue-700 px-4 py-2 rounded transition dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-100 text-center text-xs p-3 mt-auto dark:bg-gray-800">
        &copy; 2025 ISRO Inventory Management System — All Rights Reserved
      </footer>
    </div>
  );
}
