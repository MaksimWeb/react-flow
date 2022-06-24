import { Node } from "react-flow-renderer";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "colorChooser",
    data: { color: "#4FD1C5" },
    position: { x: 250, y: 25 },
    dragHandle: ".custom-drag-handle",
  },
  {
    id: "2",
    type: "colorChooser",
    data: { color: "#F6E05E" },
    position: { x: 100, y: 125 },
    dragHandle: ".custom-drag-handle",
  },
  {
    id: "3",
    type: "colorChooser",
    data: { color: "#B794F4" },
    position: { x: 250, y: 250 },
    dragHandle: ".custom-drag-handle",
  },
  {
    id: "4",
    type: "colorChooser",
    data: { color: "rgb(93,0,255)" },
    position: { x: 400, y: 155 },
    dragHandle: ".custom-drag-handle",
  },
  {
    id: "5",
    type: "colorChooser",
    data: { color: "rgb(229,16,16)" },
    position: { x: 500, y: 25 },
    dragHandle: ".custom-drag-handle",
  },
  {
    id: "6",
    type: "colorChooser",
    data: { color: "rgb(0,0,255)" },
    position: { x: 100, y: 355 },
    dragHandle: ".custom-drag-handle",
  },
  {
    id: "7",
    type: "validChooser",
    data: { color: "" },
    position: { x: 250, y: 355 },
    dragHandle: ".custom-drag-handle",
  },
];
