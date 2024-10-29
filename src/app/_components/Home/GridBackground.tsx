"use client";

import useMeasure from "react-use-measure";
import { useState, useMemo, useCallback } from "react";
import coverImage from "@/../public/coverImage.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import debounce from "lodash/debounce";

type squareProps = {
  XY: number[];
  index: number;
  cols: number;
};

const squareSize = 64;

const Square = ({ XY, index, cols }: squareProps) => {
  cols--;

  const x = (index % cols) * squareSize;
  const y = Math.floor(index / cols) * squareSize;
  const distance = Math.sqrt((XY[0] - x) ** 2 + (XY[1] - y) ** 2);
  const maxDistance = 500; // Adjust this value to control the size of the gradient
  const opacity = 1 - Math.max(0, 1 - distance / maxDistance + 0.6);

  return (
    <motion.div
      className="relative w-16 h-16 bg-neutral-800 transition-all duration-100 z-20 rounded-md border border-neutral-700"
      style={{ opacity }}
      transition={{ ease: easeInOut, duration: 0.1 }}
    />
  );
};

export function GridBackground() {
  const [ref, bounds] = useMeasure();
  const squareSize = 64;
  const cols = useMemo(
    () => Math.ceil(bounds.width / squareSize),
    [bounds.width]
  );
  const rows = useMemo(
    () => Math.ceil(bounds.height / squareSize),
    [bounds.height]
  );
  const [XY, setXY] = useState([0, 0]);

  const handleMouseMove = useCallback(
    debounce(({ clientX, clientY }) => {
      setXY([clientX, clientY]);
    }, 10),
    []
  );
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.5, delay: 0.1 }}
      className="w-screen h-screen absolute z-10 overflow-hidden flex gap-[0.1px] flex-wrap justify-between"
    >
      <Image
        src={coverImage}
        alt={"indofest"}
        className="absolute w-screen h-screen object-cover z-0"
      />
      {Array.from({ length: cols * rows }).map((_, i) => (
        <Square key={i} XY={XY} index={i} cols={cols} />
      ))}
    </motion.div>
  );
}
