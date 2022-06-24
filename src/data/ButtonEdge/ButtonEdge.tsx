import React from "react";
import {
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
  EdgeProps,
  getSmoothStepPath,
  getBezierEdgeCenter,
  getSimpleBezierPath,
  getSimpleBezierEdgeCenter,
} from "react-flow-renderer";
import "./index.css";

export const CustomButtonEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) => {
  const foreignObjectSize = 40;
  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const onEdgeClick = <
    T extends React.MouseEvent<HTMLButtonElement, MouseEvent>,
    Y extends string
  >(
    evt: T,
    id: Y
  ) => {
    evt.stopPropagation();
    alert(`remove ${id}`);
  };

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body>
          <button
            className="edgebutton"
            onClick={(event) => onEdgeClick(event, id)}
          >
            ×
          </button>
        </body>
      </foreignObject>
    </>
  );
};
