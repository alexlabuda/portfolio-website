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
  Background,
  MarkerType,
  Position
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './pipeline-flow.css';

import PipelineNode, { OutputNode } from './PipelineNode';
import PipelineEdge from './PipelineEdge';
import BiDirectionalEdge from './BiDirectionalEdge';
import DownwardEdge from './DownwardEdge';
import AcknowledgmentEdge from './AcknowledgmentEdge';
import ClassifiedDataEdge from './ClassifiedDataEdge';
import { DataIcon, ProcessingIcon, ModelIcon } from './PipelineIcons';

// Define node types for the ML workflow
const initialNodes: Node[] = [
  {
    id: 'call-tracking',
    position: { x: 50, y: 150 },
    data: { 
      icon: <DataIcon />, 
      title: 'Call Tracking System', 
    },
    type: 'pipeline',
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: 'bigquery',
    position: { x: 350, y: 150 },
    data: { 
      icon: <ProcessingIcon />, 
      title: 'BigQuery', 
      subtitle: 'Data Storage' 
    },
    type: 'pipeline'
  },
  {
    id: 'pubsub',
    position: { x: 350, y: 400 },
    data: { 
      icon: <ProcessingIcon />, 
      title: 'Pub/Sub', 
      subtitle: 'Event Trigger' 
    },
    type: 'pipeline',
    sourcePosition: Position.Right,
    targetPosition: Position.Top
  },
  {
    id: 'ml-workflow',
    position: { x: 650, y: 400 },
    data: { 
      icon: <ModelIcon />, 
      title: 'ML Classification', 
      subtitle: 'Vertex AI + Gemini' 
    },
    type: 'pipeline'
  },
  {
    id: 'cdp',
    position: { x: 650, y: 150 },
    data: { 
      title: 'Customer Data Platform', 
      subtitle: 'Activation & Marketing'
    },
    type: 'output',
    targetPosition: Position.Left
  },
];

// Define edges for the ML workflow
const initialEdges: Edge[] = [
  // Call Tracking to BigQuery
  { 
    id: 'e-call-bigquery', 
    source: 'call-tracking', 
    target: 'bigquery', 
    type: 'pipeline',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { strokeWidth: 2, stroke: '#9333ea', strokeDasharray: '5 5' },
    sourceHandle: 'right',
    targetHandle: 'left',
    zIndex: 1
  },
  
  // BigQuery to Pub/Sub
  { 
    id: 'e-bigquery-pubsub', 
    source: 'bigquery', 
    target: 'pubsub', 
    type: 'downward',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { strokeWidth: 2, stroke: '#9333ea', strokeDasharray: '5 5' },
    sourceHandle: 'bottom',
    targetHandle: 'top',
    zIndex: 1
  },
  
  // Pub/Sub to ML Workflow
  { 
    id: 'e-pubsub-ml', 
    source: 'pubsub', 
    target: 'ml-workflow', 
    type: 'pipeline',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { strokeWidth: 2, stroke: '#9333ea', strokeDasharray: '5 5' },
    sourceHandle: 'right',
    targetHandle: 'left',
    zIndex: 1
  },
  
  // ML Workflow back to BigQuery - using standard edge type for now
  { 
    id: 'e-ml-bigquery', 
    source: 'ml-workflow', 
    target: 'bigquery', 
    type: 'straight',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { strokeWidth: 3, stroke: '#9333ea' },
    sourceHandle: 'top',
    targetHandle: 'bottom',
    label: 'classified data',
    labelStyle: { fill: '#6366F1', fontWeight: 700, fontSize: 12 },
    labelBgPadding: [6, 3],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#EEF2FF', fillOpacity: 0.9 },
    zIndex: 5
  },
  
  // ML Workflow acknowledgment to Pub/Sub
  { 
    id: 'e-ml-pubsub-ack', 
    source: 'ml-workflow', 
    target: 'pubsub', 
    type: 'acknowledgment',
    animated: false,
    label: 'ack',
    labelStyle: { fill: '#6366F1', fontWeight: 500, fontSize: 11 },
    labelBgPadding: [4, 2],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#EEF2FF', fillOpacity: 0.8 },
    style: { 
      strokeWidth: 2, 
      stroke: '#9333ea', 
      strokeDasharray: '5 5' 
    },
    sourceHandle: 'left',
    targetHandle: 'right',
    zIndex: 1
  },
  
  // BigQuery to CDP
  { 
    id: 'e-bigquery-cdp', 
    source: 'bigquery', 
    target: 'cdp', 
    type: 'pipeline',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { strokeWidth: 2, stroke: '#9333ea', strokeDasharray: '5 5' },
    sourceHandle: 'right',
    targetHandle: 'left',
    zIndex: 1
  },
];

const nodeTypes = {
  pipeline: PipelineNode,
  output: OutputNode,
};

const edgeTypes = {
  pipeline: PipelineEdge,
  bidirectional: BiDirectionalEdge,
  downward: DownwardEdge,
  acknowledgment: AcknowledgmentEdge,
  classifiedData: ClassifiedDataEdge,
  straight: PipelineEdge,
};

const defaultEdgeOptions = {
  animated: true,
  markerEnd: 'edge-circle',
  type: 'smoothstep'
};

const MLWorkflowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <div style={{ height: 600, width: '100%' }} className="my-8">
      <div className="w-full text-center mb-3 text-sm text-gray-500 font-medium">
        Interactive ML Workflow Diagram
      </div>
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
        minZoom={0.5}
        maxZoom={1.5}
      >
        <Controls />
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

export default MLWorkflowDiagram; 