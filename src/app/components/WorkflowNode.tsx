import React, { memo, type ReactNode } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';

export type WorkflowNodeData = {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
};

const WorkflowNode = memo(({ data }: NodeProps<Node<WorkflowNodeData>>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>
          {data.icon}
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
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </div>
      </div>
    </>
  );
});

WorkflowNode.displayName = 'WorkflowNode';

export default WorkflowNode; 