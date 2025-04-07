import React, { memo, type ReactNode } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';

export type PipelineNodeData = {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
};

const PipelineNode = memo(({ data }: NodeProps<Node<PipelineNodeData>>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>
          {data.icon || <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>}
        </div>
      </div>
      <div className="wrapper gradient">
        <div className="inner">
          <div className="body">
            <div>
              <div className="title">{data.title}</div>
              {data.subtitle && <div className="subtitle">{data.subtitle}</div>}
            </div>
          </div>
          <Handle type="target" position={Position.Left} id="left" />
          <Handle type="source" position={Position.Right} id="right" />
          <Handle type="target" position={Position.Top} id="top" />
          <Handle type="source" position={Position.Bottom} id="bottom" />
        </div>
      </div>
    </>
  );
});

PipelineNode.displayName = 'PipelineNode';

export default PipelineNode;

// Create separate node types for outputs and model artifacts
export const OutputNode = memo(({ data }: NodeProps<Node<PipelineNodeData>>) => {
  return (
    <div className="output-node gradient">
      <div className="inner">
        <div className="title">{data.title}</div>
        {data.subtitle && <div className="subtitle">{data.subtitle}</div>}
        <Handle type="target" position={Position.Left} id="left" />
        <Handle type="target" position={Position.Top} id="top" />
        <Handle type="target" position={Position.Right} id="right" />
        <Handle type="target" position={Position.Bottom} id="bottom" />
      </div>
    </div>
  );
});

OutputNode.displayName = 'OutputNode';

export const ModelNode = memo(({ data }: NodeProps<Node<PipelineNodeData>>) => {
  return (
    <div className="model-node gradient">
      <div className="inner">
        <div className="title">{data.title}</div>
        {data.subtitle && <div className="subtitle">{data.subtitle}</div>}
        <Handle type="target" position={Position.Left} id="left" />
        <Handle type="target" position={Position.Top} id="top" />
        <Handle type="target" position={Position.Right} id="right" />
        <Handle type="target" position={Position.Bottom} id="bottom" />
      </div>
    </div>
  );
});

ModelNode.displayName = 'ModelNode'; 