'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import the MLWorkflowDiagram component with dynamic loading to prevent SSR issues
const MLWorkflowDiagram = dynamic(
  () => import('./MLWorkflowDiagram'),
  { ssr: false }
);

export default function MLWorkflowDiagramWrapper() {
  return <MLWorkflowDiagram />;
} 