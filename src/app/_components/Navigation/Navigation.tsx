"use client";

import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { NavItems } from "./NavItems";

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
      className="transition-all duration-100 text-md hover:bg-neutral-200/80 hover:text-neutral-950 rounded-full bg-neutral-900/80 backdrop-blur-xl py-2 px-4 border border-neutral-700/80 h-min"
    >
      {text}
      {props.children}
    </Link>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ref, { width }] = useMeasure();

  return (
    <>
      <motion.div key={0}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed flex items-center justify-center z-50 top-6 right-6 p-4 bg-neutral-950/80 hover:bg-neutral-200/80 hover:text-neutral-950 transition-all duration-200 rounded-full backdrop-blur-xl w-16 h-16 hover:w-20 hover:h-20 hover:top-4 hover:right-4 border border-neutral-700/80"
        >
          {isOpen ? (
            <FaArrowRight className="text-md" />
          ) : (
            <FaHome className="text-md" />
          )}
        </motion.button>
      </motion.div>

      <motion.div className="fixed w-max top-6 right-8 overflow-hidden z-40">
        <motion.nav
          initial={{ translateX: `${width}` }}
          animate={{
            translateX: isOpen ? 0 : width,
          }}
          transition={{ ease: easeInOut, duration: 0.3, delay: 0.1 }}
          ref={ref}
          className="z-40 flex w-full gap-x-4 h-16 pe-20 justify-between items-center"
        >
          {NavItems.map((item, index) => (
            <NavButton key={index} NavItem={item} />
          ))}
        </motion.nav>
      </motion.div>
    </>
  );
}
