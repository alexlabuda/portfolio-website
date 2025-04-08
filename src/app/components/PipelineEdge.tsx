import React from 'react';
import { getBezierPath, EdgeLabelRenderer, type EdgeProps } from '@xyflow/react';

export default function PipelineEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
  labelStyle,
  labelBgStyle,
  labelBgPadding,
  labelBgBorderRadius,
}: EdgeProps) {
  // Check if this is the feedback loop (from ML to BigQuery)
  const isFeedbackLoop = id === 'e-ml-bigquery';
  
  let edgePath;
  let labelX;
  let labelY;
  
  // Explicitly define purple color
  const stroke = "#9333ea";
  const strokeWidth = 2;
  const strokeDasharray = '5 5';
  
  if (isFeedbackLoop) {
    // Create an even wider arc for the feedback loop
    const controlPointX = Math.min(sourceX, targetX) - 200;
    const midY = (sourceY + targetY) / 2;
    
    // Custom path for the feedback loop with a wider arc
    edgePath = `M ${sourceX} ${sourceY} 
                C ${controlPointX} ${sourceY} 
                  ${controlPointX} ${targetY} 
                  ${targetX} ${targetY}`;
                  
    // Position the label on the left side of the curve
    labelX = controlPointX + 50;
    labelY = midY;
  } else {
    // Standard bezier path for other connections
    [edgePath] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
    
    // Default label position
    labelX = (sourceX + targetX) / 2;
    labelY = (sourceY + targetY) / 2;
  }

  return (
    <>
      <path
        id={id}
        style={{
          ...style,
          stroke: stroke,
          strokeWidth: strokeWidth,
          strokeDasharray: strokeDasharray
        }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      
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