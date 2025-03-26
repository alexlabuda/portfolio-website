'use client';

import Link from "next/link";
import { ThemeProvider } from "./ThemeProvider";
import MobileMenuButton from "./MobileMenuButton";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <header className="bg-white dark:bg-gray-900 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-primary-600 dark:text-primary-300">
                  Alex Labuda
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center">
                <div className="flex md:hidden">
                  <MobileMenuButton />
                </div>
              </div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300">
                  Home
                </Link>
                <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300">
                  Projects
                </Link>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300">
                  About
                </Link>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
          
          {/* Mobile menu, show/hide based on menu state */}
          <div className="hidden md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-gray-700">
                Home
              </Link>
              <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-gray-700">
                Projects
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-gray-700">
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-gray-700">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-gray-700">
                Contact
              </Link>
            </div>
          </div>
        </header>
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
                    <li>
                      <Link href="https://www.linkedin.com/in/alex-labuda" className="text-primary-200 hover:text-white">LinkedIn</Link>
                    </li>
                    <li>
                      <Link href="https://github.com/yourgithub" className="text-primary-200 hover:text-white">GitHub</Link>
                    </li>
                    <li>
                      <Link href="mailto:alexlabuda@gmail.com" className="text-primary-200 hover:text-white">Email</Link>
                    </li>
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