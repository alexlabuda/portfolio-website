import { BaseEdge, EdgeLabelRenderer, type EdgeProps } from '@xyflow/react';

// This edge creates a curve that goes up and back
const ClassifiedDataEdge = ({
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
  labelBgPadding,
  labelBgBorderRadius,
  labelBgStyle,
}: EdgeProps) => {
  // Create a curved path that loops back from ML workflow to BigQuery
  // Adjust the control points for better visualization
  const path = `M ${sourceX} ${sourceY} 
                C ${sourceX - 100} ${sourceY - 125} 
                  ${targetX - 100} ${targetY - 125} 
                  ${targetX} ${targetY}`;

  // Adjust label position for better visibility
  const labelX = (sourceX + targetX) / 2 - 75;
  const labelY = Math.min(sourceY, targetY) - 50;

  return (
    <>
      <BaseEdge
        path={path}
        id={id} 
        style={style}
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

export default ClassifiedDataEdge; 