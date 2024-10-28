"use client";

import { DisplayText } from "../DisplayText";
import { GridBackground } from "./GridBackground";
import { motion } from "framer-motion";

export function HomeSection(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="w-screen h-screen relative">
      <GridBackground />
      <motion.div
        className="bottom-4 right-4 absolute flex p-4 md:p-8 items-end justify-end z-30"
        initial={{ opacity: 0, filter: "blur(16px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <DisplayText className="text-[10vw] leading-none [text-shadow:_0_0_50px_rgb(50_50_50_/_80%),_0_0_20px_rgb(50_50_50_/_60%),_0_0_30px_rgb(50_50_50_/_40%),_0_0_40px_rgb(50_50_50_/_20%)]">
          &lt;10MANIP&gt;
        </DisplayText>
      </motion.div>
    </div>
  );
}
