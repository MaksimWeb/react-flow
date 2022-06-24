import { Connection, Handle, Position } from "react-flow-renderer";

export const ValidNode = () => {
  const dragHandleStyle = {
    display: "inline-block",
    width: 20,
    height: 20,
    backgroundColor: "teal",
    marginLeft: 5,
    borderRadius: "50%",
  };

  const isValidConnection = (connection: Connection) =>
    connection.target === "6";

  return (
    <>
      <div
        style={{
          background: "grey",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        Only Connectable to 6
        <span className="custom-drag-handle" style={dragHandleStyle} />
        <Handle
          type="source"
          position={Position.Right}
          isValidConnection={isValidConnection}
        />
      </div>
    </>
  );
};
