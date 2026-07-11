export const initialNodes = [
  {
    id: "1",
    type: "deviceNode",
    position: { x: 250, y: 40 },
    data: {
      name: "Samsung S24",
      owner: "Sambhav",
      battery: 92,
      signal: 95,
      status: "online",
      bridge: true,
    },
  },
  {
    id: "2",
    type: "deviceNode",
    position: { x: 40, y: 220 },
    data: {
      name: "OnePlus 13",
      owner: "Rahul",
      battery: 84,
      signal: 88,
      status: "online",
      bridge: false,
    },
  },
  {
    id: "3",
    type: "deviceNode",
    position: { x: 460, y: 220 },
    data: {
      name: "Pixel 9",
      owner: "Ankit",
      battery: 73,
      signal: 81,
      status: "online",
      bridge: false,
    },
  },
  {
    id: "4",
    type: "deviceNode",
    position: { x: 250, y: 400 },
    data: {
      name: "iPhone 16",
      owner: "Priya",
      battery: 97,
      signal: 99,
      status: "online",
      bridge: true,
    },
  },
];

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: {
      stroke: "#3b82f6",
      strokeWidth: 2,
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: {
      stroke: "#3b82f6",
      strokeWidth: 2,
    },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    animated: true,
    style: {
      stroke: "#22c55e",
      strokeWidth: 2,
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: {
      stroke: "#a855f7",
      strokeWidth: 2,
    },
  },
];