'use client';

import Link from "next/link";
import { ThemeProvider } from "./ThemeProvider";
import Header from "./global/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define links array to ensure consistency
  const socialLinks = [
    { href: "https://www.linkedin.com/in/alex-labuda", label: "LinkedIn" },
    { href: "https://github.com/alexlabuda", label: "GitHub" },
    { href: "mailto:alexlabuda@gmail.com", label: "Email" }
  ];

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-primary-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:justify-between">
              <div className="mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-2 text-white">Alex Labuda</h2>
                <p className="text-primary-100">Senior Data Scientist | ML Engineer | Tableau Developer</p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Links</h3>
                  <ul className="mt-4 space-y-2">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-primary-200 hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-primary-700 pt-8 md:flex md:items-center md:justify-between">
              <p className="text-sm text-primary-200">© 2024 Alex Labuda. All rights reserved.</p>
              <p className="text-sm text-primary-200 mt-4 md:mt-0">Built with Next.js and deployed via GitHub Pages</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
} 