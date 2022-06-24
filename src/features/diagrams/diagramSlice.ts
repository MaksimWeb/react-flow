import { initialEdges } from "./../../data/edges";
import { initialNodes } from "./../../data/nodes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  updateEdge,
} from "react-flow-renderer";

interface IState {
  nodes: Node[];
  edges: Edge[];
}

export interface Color {
  nodeId: string;
  color: string;
}

interface IOldEdge {
  oldEdge: Edge;
  newConnection: Connection;
}

const initialState: IState = {
  nodes: initialNodes,
  edges: initialEdges,
};

export const diagramSlice = createSlice({
  name: "diagram",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes = [...state.nodes, action.payload];
    },
    onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onEdgeUpdate: (state, action: PayloadAction<IOldEdge>) => {
      state.edges = updateEdge(
        action.payload.oldEdge,
        action.payload.newConnection,
        state.edges
      );
    },
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
    updateNodeColor: (state, action: PayloadAction<Color>) => {
      const color = action.payload.color;
      state.nodes = state.nodes.map((node) => {
        if (node.id === action.payload.nodeId) {
          node.data = { ...node.data, color };
        }

        return node;
      });
    },
  },
});

export const {
  addNode,
  onNodesChange,
  onConnect,
  onEdgesChange,
  updateNodeColor,
  onEdgeUpdate,
} = diagramSlice.actions;
export default diagramSlice.reducer;
