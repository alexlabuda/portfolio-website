import React from 'react';
import {
  getBezierPath,
  useStore,
  BaseEdge,
  type EdgeProps,
  type ReactFlowState,
  MarkerType
} from '@xyflow/react';

export type GetSpecialPathParams = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
};

export const getSpecialPath = (
  { sourceX, sourceY, targetX, targetY }: GetSpecialPathParams,
  offset: number,
) => {
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;

  return `M ${sourceX} ${sourceY} Q ${centerX} ${
    centerY + offset
  } ${targetX} ${targetY}`;
};

export default function BiDirectionalEdge({
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  label,
  labelStyle,
  labelShowBg = true,
  labelBgStyle,
  labelBgPadding,
  labelBgBorderRadius,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
}: EdgeProps) {
  const isBiDirectionEdge = useStore((s: ReactFlowState) => {
    return s.edges.some(
      (e) =>
        (e.source === target && e.target === source) ||
        (e.target === source && e.source === target),
    );
  });

  const edgePathParams = {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  };

  let path = '';

  if (isBiDirectionEdge) {
    // If there's a bidirectional connection, curve the edges to avoid overlap
    path = getSpecialPath(
      { sourceX, sourceY, targetX, targetY },
      // For horizontal edges, use a bigger Y offset
      Math.abs(sourceY - targetY) < 20 ? (sourceY < targetY ? 50 : -50) : 
      // For vertical edges, use an X offset
      sourceX < targetX ? 50 : -50
    );
  } else {
    [path] = getBezierPath(edgePathParams);
  }

  return (
    <>
      <BaseEdge 
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