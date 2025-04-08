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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './ml-workflow.css';

import WorkflowNode, { type WorkflowNodeData } from '@/app/components/WorkflowNode';
import WorkflowEdge from '@/app/components/WorkflowEdge';
import { CallTrackingIcon, BigQueryIcon, MLIcon, CDPIcon, ActivationIcon } from '@/app/components/WorkflowIcons';

// Define node types for the call transcript ML workflow
const initialNodes: Node<WorkflowNodeData>[] = [
  {
    id: 'call-tracking',
    position: { x: 0, y: 150 },
    data: { 
      icon: <CallTrackingIcon />, 
      title: 'Call Tracking System', 
      subtitle: 'Real-time transcripts' 
    },
    type: 'workflow',
  },
  {
    id: 'bigquery',
    position: { x: 400, y: 150 },
    data: { 
      icon: <BigQueryIcon />, 
      title: 'BigQuery', 
      subtitle: 'Data storage' 
    },
    type: 'workflow',
  },
  {
    id: 'ml-classification',
    position: { x: 800, y: 150 },
    data: { 
      icon: <MLIcon />, 
      title: 'ML Classification', 
      subtitle: 'Vertex AI & Gemini' 
    },
    type: 'workflow',
  },
  {
    id: 'cdp',
    position: { x: 1200, y: 150 },
    data: { 
      icon: <CDPIcon />, 
      title: 'CDP Platform', 
      subtitle: 'Customer profiles' 
    },
    type: 'workflow',
  }
];

const initialEdges: Edge[] = [
  {
    id: 'e-call-bigquery',
    source: 'call-tracking',
    target: 'bigquery',
    type: 'workflow',
  },
  {
    id: 'e-bigquery-ml',
    source: 'bigquery',
    target: 'ml-classification',
    type: 'workflow',
  },
  {
    id: 'e-ml-cdp',
    source: 'ml-classification',
    target: 'cdp',
    type: 'workflow',
  }
];

const nodeTypes = {
  workflow: WorkflowNode,
};

const edgeTypes = {
  workflow: WorkflowEdge,
};

const defaultEdgeOptions = {
  type: 'workflow',
  markerEnd: 'edge-circle',
};

const MLWorkflowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <div style={{ height: 350, width: '100%', background: 'white' }}>
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
      >
        <Controls showInteractive={false} />
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
              markerWidth="15"
              markerHeight="15"
              orient="auto"
            >
              <circle stroke="#8B5CF6" strokeOpacity="0.90" r="2.2" cx="0" cy="0" fill="white" />
            </marker>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
};

export default MLWorkflowDiagram; 