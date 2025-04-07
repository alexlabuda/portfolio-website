'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the MLWorkflowDiagram component with no SSR
const MLWorkflowDiagram = dynamic(
  () => import('./MLWorkflowDiagram'),
  { ssr: false }
);

// Simple loading component
const DiagramLoading = () => (
  <div className="w-full h-[450px] flex items-center justify-center bg-gray-50 rounded-lg">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p className="mt-3 text-gray-600">Loading diagram...</p>
    </div>
  </div>
);

const MLWorkflowDiagramWrapper = () => {
  return (
    <Suspense fallback={<DiagramLoading />}>
      <MLWorkflowDiagram />
    </Suspense>
  );
};

export default MLWorkflowDiagramWrapper; 