import React from 'react';
import Link from 'next/link';
import { FaChartBar } from 'react-icons/fa';

export function TableauFeature() {
  return (
    <Link 
      href="/visualizations"
      className="group"
      aria-label="View Tableau visualization gallery"
    >
      <div 
        className="bg-accent-50 p-4 rounded-lg text-center relative overflow-hidden group-hover:shadow-md transition-all duration-300 border-2 border-transparent group-hover:border-accent-200"
        itemProp="itemListElement" 
        itemScope 
        itemType="https://schema.org/ListItem"
      >
        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <FaChartBar className="w-4 h-4 text-accent-600" />
        </div>
        <meta itemProp="position" content="4" />
        <h3 className="font-bold text-gray-900 group-hover:text-accent-800 transition-colors" itemProp="name">
          Tableau
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors" itemProp="description">
          Interactive dashboards and data storytelling
        </p>
        <div className="mt-2 text-xs text-accent-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View visualization gallery →
        </div>
      </div>
    </Link>
  );
} 