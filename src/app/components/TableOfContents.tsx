"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { FaListUl } from 'react-icons/fa';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Separated to allow calling during both initial load and on click
  const scrollToElement = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Use a proper offset that works with your layout
      const yOffset = -80; 
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Set active ID after scroll
      setActiveId(id);
      
      // For debugging - remove in production
      console.log(`Scrolled to element with id: ${id} at position ${y}`);
    } else {
      console.warn(`Element with id ${id} not found`);
    }
  }, []);

  useEffect(() => {
    // Wait a bit for the page to fully render (important for Next.js)
    const initTimeout = setTimeout(() => {
      console.log("Initializing TOC");
      
      // Select only h2 elements that have IDs and are in the main content
      const headingElements = Array.from(document.querySelectorAll('h2[id]'));
      
      console.log(`Found ${headingElements.length} headings with ids`, 
        headingElements.map(h => ({id: h.id, text: h.textContent})));
      
      const tocItems = headingElements
        .map(heading => {
          return {
            id: heading.id,
            text: heading.textContent?.trim() || '',
            level: parseInt(heading.tagName.substring(1), 10)
          };
        })
        .filter(item => 
          item.text && 
          item.text.trim() !== '' && 
          !item.text.includes('Alex Labuda') // Explicitly exclude any heading with "Alex Labuda"
        );
      
      console.log("Processed TOC items:", tocItems);
      setToc(tocItems);

      // Set up intersection observer for scroll spy
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the first visible heading
          const visibleEntry = entries.find(entry => entry.isIntersecting);
          if (visibleEntry && visibleEntry.target.id) {
            setActiveId(visibleEntry.target.id);
            console.log(`Set active heading: ${visibleEntry.target.id}`);
          }
        },
        { 
          rootMargin: '-100px 0px -50% 0px',
          threshold: 0.1 
        }
      );

      // Observe all headings
      headingElements.forEach(heading => {
        if (heading.id) {
          observer.observe(heading);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 500); // Small delay to ensure DOM is ready

    return () => clearTimeout(initTimeout);
  }, []);

  // Add an effect to monitor URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setActiveId(id);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check hash on initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Only show TOC if there are headings
  if (toc.length === 0) {
    console.log("No TOC items found, not rendering TOC");
    return null;
  }

  return (
    <div className={`hidden xl:block fixed right-5 top-40 z-30 transition-all duration-300 ${isCollapsed ? 'w-12' : 'w-64'}`}>
      <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h3 className={`font-medium text-gray-900 ${isCollapsed ? 'hidden' : 'block'}`}>
            Table of Contents
          </h3>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500 hover:text-primary-600 transition-colors"
            aria-label={isCollapsed ? "Expand table of contents" : "Collapse table of contents"}
          >
            <FaListUl />
          </button>
        </div>
        
        <nav className={`${isCollapsed ? 'hidden' : 'block'}`}>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id} className={`${item.level > 2 ? 'ml-3' : ''}`}>
                <button
                  className={`text-left w-full block hover:text-primary-600 py-1 px-2 rounded transition-colors ${
                    activeId === item.id
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-600'
                  }`}
                  onClick={() => scrollToElement(item.id)}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents; 