'use client';

import { useState, useEffect } from 'react';

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Only run client-side code after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleMenu = () => {
    if (!mounted) return;
    
    setIsOpen(!isOpen);
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  };
  
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      {/* Icon for menu */}
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );
} 