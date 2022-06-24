import { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  NodeChange,
  Position,
  ReactFlowProvider,
  useReactFlow,
} from "react-flow-renderer";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { ColorChooserNode } from "./data/ColorChooserNode";
import {
  addNode,
  onConnect,
  onEdgesChange,
  onEdgeUpdate,
  onNodesChange,
} from "./features/diagrams/diagramSlice";
import CustomEdge from "./data/CustomEdge";
import { CustomButtonEdge } from "./data/ButtonEdge/ButtonEdge";
import { CustomConnectionLine } from "./data/CustomConnection/CustomConnectionLine";
import "./index.css";
import "./data/Sidebar/index.css";
import { ValidNode } from "./data/ValidNode/ValidNode";
import { Sidebar } from "./data/Sidebar/Sidebar";

const edgeTypes = {
  custom: CustomEdge,
  buttonEdge: CustomButtonEdge,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

function App() {
  const reactFlowWrapper = useRef(null);
  const nodeTypes = useMemo(
    () => ({ colorChooser: ColorChooserNode, validChooser: ValidNode }),
    []
  );
  const dispatch = useAppDispatch();
  const { nodes, edges } = useAppSelector((state) => state.diagrams);

  const handleNode = useCallback(
    (changes: NodeChange[]) => dispatch(onNodesChange(changes)),
    [nodes]
  );

  const handleEdges = useCallback(
    (changes: EdgeChange[]) => dispatch(onEdgesChange(changes)),
    [edges]
  );

  const handleEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) =>
      dispatch(
        onEdgeUpdate({ oldEdge: oldEdge, newConnection: newConnection })
      ),
    [edges]
  );

  const handleConnect = useCallback(
    (connection: Connection) => dispatch(onConnect(connection)),
    [edges]
  );

  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        data: { color: "" },
      };

      dispatch(addNode(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            style={{ height: "1000px" }}
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNode}
            onEdgesChange={handleEdges}
            onConnect={handleConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onEdgeUpdate={handleEdgeUpdate}
            snapToGrid={true}
            attributionPosition="top-right"
            snapGrid={[15, 15]}
            connectionLineComponent={CustomConnectionLine}
            className="touchdevice-flow"
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
