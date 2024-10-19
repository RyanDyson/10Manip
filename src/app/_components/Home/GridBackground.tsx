"use client";

import useMeasure from "react-use-measure";
import { useState } from "react";

const Square = () => {
  return (
    <div className="w-32 h-32 opacity-0 hover:opacity-20 bg-gray-600 transition-all duration-100 hover:backdrop-blur-lg" />
  );
};

export function GridBackground() {
  const [ref, bounds] = useMeasure();
  const squareSize = 128;
  const cols = Math.ceil(bounds.width / squareSize);
  const rows = Math.ceil(bounds.height / squareSize);
  const [XY, setXY] = useState([0, 0]);

  return (
    <div className="w-screen h-screen relative">
      <div
        onMouseMove={({ clientX, clientY }) => setXY([clientX, clientY])}
        className="absolute w-screen h-screen z-0 bg-gray-400 opacity-10"
      ></div>
      <div
        ref={ref}
        className={`grid grid-cols-${cols} gap-4 relative w-screen h-screen `}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
          <Square key={i} />
        ))}
      </div>
    </div>
  );
}
