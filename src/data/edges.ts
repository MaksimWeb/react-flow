import { Edge, MarkerType } from "react-flow-renderer";

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    type: "step",
    target: "2",
    label: "edge label",
    labelStyle: {
      fill: "green",
      fontWeight: 700,
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      color: "#f00",
      width: 20,
      height: 20,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#f00",
      width: 20,
      height: 20,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    label: "edge label 2",
    labelShowBg: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerStart: {
      type: MarkerType.ArrowClosed,
      color: "#f00",
      width: 20,
      height: 20,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#f00",
      width: 20,
      height: 20,
    },
    animated: true,
    style: { stroke: "red" },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    type: "custom",
    data: { text: "Custom Edge" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    type: "buttonEdge",
  },
];
