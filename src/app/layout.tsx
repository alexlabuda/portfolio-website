import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenuButton from "./components/MobileMenuButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Labuda | Senior Data Scientist",
  description: "Senior Data Scientist specializing in machine learning, predictive modeling, and advanced analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  Alex Labuda
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <MobileMenuButton />
              </div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                  Projects
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
          
          {/* Mobile menu, show/hide based on menu state */}
          <div className="hidden md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Home
              </Link>
              <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Projects
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Contact
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:justify-between">
              <div className="mb-8 md:mb-0">
                <h2 className="text-lg font-semibold mb-2">Alex Labuda</h2>
                <p className="text-gray-300">Senior Data Scientist | ML Engineer | Tableau Developer</p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Links</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link href="https://www.linkedin.com/in/alex-labuda" className="text-gray-400 hover:text-white">LinkedIn</Link>
                    </li>
                    <li>
                      <Link href="https://github.com/yourgithub" className="text-gray-400 hover:text-white">GitHub</Link>
                    </li>
                    <li>
                      <Link href="mailto:alexlabuda@gmail.com" className="text-gray-400 hover:text-white">Email</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <p className="text-sm text-gray-400">© 2024 Alex Labuda. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-4 md:mt-0">Built with Next.js and deployed via GitHub Pages</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
