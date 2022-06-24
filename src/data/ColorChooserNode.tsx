import React from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useAppDispatch } from "../app/hooks";
import { Color, updateNodeColor } from "../features/diagrams/diagramSlice";

export const ColorChooserNode = ({ id, data }: NodeProps<Color>) => {
  const dispatch = useAppDispatch();

  const dragHandleStyle = {
    display: "inline-block",
    width: 20,
    height: 20,
    backgroundColor: "teal",
    marginLeft: 5,
    borderRadius: "50%",
  };

  return (
    <div style={{ background: data.color, borderRadius: 10 }}>
      <Handle type="target" position={Position.Left} />
      <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
        <input
          type="color"
          defaultValue={data.color}
          onChange={(evt) =>
            dispatch(updateNodeColor({ nodeId: id, color: evt.target.value }))
          }
          className="nodrag"
        />
        <span className="custom-drag-handle" style={dragHandleStyle} />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};
