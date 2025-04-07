import React from 'react';
import { BaseEdge, EdgeLabelRenderer, type EdgeProps } from '@xyflow/react';

export default function DownwardEdge({
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
  // Adjusted path calculation to ensure the connection centers on the target node's top
  // We create a straight line down from the source, then curve to the center of the target's top
  const path = `M ${sourceX} ${sourceY} 
                Q ${sourceX} ${(sourceY + targetY) / 2}
                  ${targetX} ${targetY}`;

  return (
    <>
      <BaseEdge 
        id={id} 
        path={path} 
        markerEnd={markerEnd} 
        style={style} 
        label={label} 
        labelStyle={labelStyle}
        labelShowBg={labelShowBg}
        labelBgStyle={labelBgStyle}
        labelBgPadding={labelBgPadding}
        labelBgBorderRadius={labelBgBorderRadius}
      />
    </>
  );
} 