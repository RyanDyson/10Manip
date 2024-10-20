"use client";

import { DisplayText } from "../DisplayText";
import Link from "next/link";
import { motion, AnimatePresence, circOut } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { FaHome, FaArrowAltCircleUp } from "react-icons/fa";

type NavButtonProps = {
  NavItem: {
    text: string;
    href: string;
  };
  children?: React.ReactNode;
};

const NavButton = (props: NavButtonProps) => {
  const { text, href } = props.NavItem;

  return (
    <Link
      href={href}
      className="text-lg hover:text-gray-500 transition-colors duration-100"
    >
      {text}
      {props.children}
    </Link>
  );
};

const NavItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ref, { height }] = useMeasure();

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div key={0}>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="fixed flex items-center justify-center z-50 top-6 right-6 p-4 bg-gray-950/80 hover:bg-gray-200/80 hover:text-gray-950 transition-all duration-200 rounded-full backdrop-blur-xl w-16 h-16 hover:w-20 hover:h-20 hover:top-4 hover:right-4 border border-gray-400"
            >
              <FaHome className="text-md" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        ref={ref}
        initial={{ translateY: `-${height}` }}
        animate={{
          translateY: isOpen ? 0 : -height,
        }}
        transition={{ ease: circOut, duration: 0.3, delay: 0.1 }}
        className="fixed z-40 left-0 flex flex-col gap-y-4 w-screen p-4 px-8 bg-gray-950/80 border-b border-gray-100 backdrop-blur-3xl "
      >
        <div className="flex justify-between w-full">
          <DisplayText className="text-9xl"> NAVIGATION </DisplayText>
          <div className="flex flex-col gap-y-2 items-end justify-center">
            {NavItems.map((item, index) => (
              <NavButton key={index} NavItem={item} />
            ))}
          </div>
        </div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="self-center flex items-center justify-center bg-gray-950/80 hover:bg-gray-200/80 hover:text-gray-950 transition-all duration-200 rounded-full backdrop-blur-xl w-10 h-10 hover:w-12 hover:h-12 border border-gray-400"
        >
          <FaArrowAltCircleUp className="text-lg" />
        </motion.button>
      </motion.nav>
    </>
  );
}
