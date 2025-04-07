'use client';

import React, { useCallback } from 'react';
import { 
  ReactFlow, 
  Controls, 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  type Node, 
  type Edge, 
  type OnConnect,
  Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './pipeline-flow.css';

import PipelineNode, { OutputNode, ModelNode } from './PipelineNode';
import PipelineEdge from './PipelineEdge';
import { DataIcon, ProcessingIcon, ModelIcon } from './PipelineIcons';

// Define node types similar to the ML pipeline in your project
const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: -150, y: 50 },
    data: { 
      icon: <DataIcon />, 
      title: 'Extract Consumption Data', 
      subtitle: 'python:3.10' 
    },
    type: 'pipeline',
  },
  {
    id: '2',
    position: { x: 150, y: 50 },
    data: { 
      icon: <ProcessingIcon />, 
      title: 'Map Categorical Features', 
      subtitle: 'python:3.10' 
    },
    type: 'pipeline',
  },
  {
    id: '3',
    position: { x: 150, y: 150 },
    data: { 
      icon: <ProcessingIcon />, 
      title: 'Clean Streaming Consumption', 
      subtitle: 'python:3.10' 
    },
    type: 'pipeline',
  },
  {
    id: '4',
    position: { x: 150, y: 250 },
    data: { 
      icon: <ProcessingIcon />, 
      title: 'Create Consumption Features', 
      subtitle: 'python:3.11' 
    },
    type: 'pipeline',
  },
  {
    id: '5',
    position: { x: 150, y: 350 },
    data: { 
      icon: <ProcessingIcon />, 
      title: 'Create Composite Features', 
      subtitle: 'python:3.11' 
    },
    type: 'pipeline',
  },
  {
    id: '6',
    position: { x: 150, y: 450 },
    data: { 
      icon: <ModelIcon />, 
      title: 'Clustering Component', 
      subtitle: 'python:3.11' 
    },
    type: 'pipeline',
  },
  // Output nodes
  {
    id: '10',
    position: { x: 500, y: 300 },
    data: { 
      title: 'Optimal K Metrics', 
      subtitle: 'type: system.Dataset' 
    },
    type: 'output',
  },
  {
    id: '7',
    position: { x: 500, y: 400 },
    data: { 
      title: 'Cluster Profiles', 
      subtitle: 'type: system.Dataset' 
    },
    type: 'output',
  },
  {
    id: '8',
    position: { x: 500, y: 500 },
    data: { 
      title: 'Clustered Data', 
      subtitle: 'type: system.Dataset' 
    },
    type: 'output',
  },
  {
    id: '9',
    position: { x: 500, y: 600 },
    data: { 
      title: 'KMeans Model', 
      subtitle: 'type: system.Artifact' 
    },
    type: 'model',
  },
];

const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e5-6', 
    source: '5', 
    target: '6', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e6-10', 
    source: '6', 
    target: '10', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e6-7', 
    source: '6', 
    target: '7', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e6-8', 
    source: '6', 
    target: '8', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
  { 
    id: 'e6-9', 
    source: '6', 
    target: '9', 
    type: 'pipeline',
    style: { strokeDasharray: '5 5', strokeWidth: 1.5, stroke: '#9333ea' }
  },
];

const nodeTypes = {
  pipeline: PipelineNode,
  output: OutputNode,
  model: ModelNode,
};

const edgeTypes = {
  pipeline: PipelineEdge,
};

const defaultEdgeOptions = {
  animated: true,
  markerEnd: 'edge-circle',
  type: 'smoothstep'
};

const MLPipelineFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <div style={{ height: 600, width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        nodesDraggable={true}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={true}
        selectNodesOnDrag={false}
        elementsSelectable={true}
        attributionPosition="bottom-right"
      >
        <Controls showInteractive={false} />
        <Background color="#f1f1f1" gap={16} />
        <svg>
          <defs>
            <linearGradient id="edge-gradient">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <marker
              id="edge-circle"
              viewBox="-5 -5 10 10"
              refX="0"
              refY="0"
              markerUnits="strokeWidth"
              markerWidth="10"
              markerHeight="10"
              orient="auto"
            >
              <circle stroke="#8B5CF6" strokeOpacity="0.75" r="2" cx="0" cy="0" fill="white" />
            </marker>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
};

export default MLPipelineFlow; 