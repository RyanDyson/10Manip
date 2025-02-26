"use client";

import { DisplayText } from "../DisplayText";
import All from "@/../public/Members/all.png";
import Image from "next/image";
import Ryan from "@/../public/Members/Ryan.png";
// import Keisha from "@/../public/Members/keisha.png";
// import Cay from "@/../public/Members/Cayleen.png";
// import Hans from "@/../public/Members/Hans.png";
// import Bryan from "@/../public/Members/Bryan.png";
// import Fillbert from "@/../public/Members/Fillbert.png";
// import Jason from "@/../public/Members/Jason.png";
// import Rachel from "@/../public/Members/Rachel.png";
// import Chris from "@/../public/Members/Chris.png";
// import Leon from "@/../public/Members/Leon.png";
import useMeasure from "react-use-measure";
import { useState } from "react";
import { motion } from "framer-motion";

export function AboutUs() {
  const [ref, bounds] = useMeasure();
  const [memberHover, setMemberHover] = useState<number | null>(null);
  //offset -> when vw is 1026

  return (
    <div className="px-8 md:px-32 py-8 bg-neutral-950 flex flex-col gap-y-4 items-center">
      <DisplayText className="text-9xl w-full text-center">
        ABOUT US
      </DisplayText>
      <p>Just a group of friends, interested in CS</p>
      <div className="h-full relative w-screen">
        <Image
          src={All}
          ref={ref}
          alt="orion pax, your sacrafice for the greater good has proven you worthy in the eyes of primus. He entrusts you the future of cybertron and the matrix of leadership"
          className="object-cover rounded-lg absolute z-20 transition-all duration-100"
          quality={100}
          style={
            memberHover != null
              ? { filter: "grayscale(1)" }
              : { filter: "grayscale(0)" }
          }
        />
        <motion.div
          className="absolute z-30"
          style={{
            left: (290 / 1062) * bounds.width,
            top: (300 / 891) * bounds.height,
          }}
          onMouseEnter={() => setMemberHover(0)}
          onMouseLeave={() => setMemberHover(null)}
          animate={
            memberHover == 0
              ? { height: bounds.height * 0.8 }
              : { height: bounds.height * 0.65 }
          }
        >
          <Image src={Ryan} alt="Ryan" className="h-full object-contain" />
        </motion.div>
        {/* <Image src={Keisha} alt="Keisha" className="absolute" />
        <Image src={Cay} alt="Cayleen" className="absolute" />
        <Image src={Hans} alt="Hans" className="absolute" />
        <Image src={Bryan} alt="Bryan" className="absolute" />
        <Image src={Fillbert} alt="Fillbert" className="absolute" />
        <Image src={Jason} alt="Jason" className="absolute" />
        <Image src={Rachel} alt="Rachel" className="absolute" />
        <Image src={Chris} alt="Chris" className="absolute" />
        <Image src={Leon} alt="Leon" className="absolute" /> */}
      </div>
    </div>
  );
}
