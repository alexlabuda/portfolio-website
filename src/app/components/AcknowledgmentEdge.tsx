import React from 'react';
import { BaseEdge, EdgeLabelRenderer, type EdgeProps } from '@xyflow/react';

export default function AcknowledgmentEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  label,
  labelStyle,
  labelBgStyle,
  labelBgPadding,
  labelBgBorderRadius,
  labelShowBg = true,
  markerEnd,
  style,
}: EdgeProps) {
  // Create a path for a curved acknowledgment edge
  const centerY = (sourceY + targetY) / 2;
  
  // This creates a path that curves upward for better visibility
  const path = `M ${sourceX} ${sourceY} 
                C ${(sourceX + targetX) / 2} ${centerY - 40} 
                  ${(sourceX + targetX) / 2} ${centerY - 40} 
                  ${targetX} ${targetY}`;

  // Calculate position for label to be centered and slightly above the connection
  const labelX = (sourceX + targetX) / 2;
  const labelY = centerY - 50;

  return (
    <>
      <BaseEdge path={path} id={id} style={style} markerEnd={markerEnd} />
      
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              fontSize: 11,
              fontWeight: 500,
              pointerEvents: 'all',
              backgroundColor: labelBgStyle?.fill || '#EEF2FF',
              color: labelStyle?.fill || '#6366F1',
              padding: '2px 4px',
              borderRadius: 4,
              border: '1px solid #6366F1',
            }}
            className="nodrag nopan"
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
} 