'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import the MLPipelineFlow component with dynamic loading to prevent SSR issues
const MLPipelineFlow = dynamic(
  () => import('./MLPipelineFlow'),
  { ssr: false }
);

export default function MLPipelineFlowWrapper() {
  return <MLPipelineFlow />;
} 