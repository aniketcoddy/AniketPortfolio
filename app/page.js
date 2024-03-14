'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:"1"}}>
      <div className="h-full flex justify-center  px-4 lg:flex-row  sm:px-8 md:px-12 lg:px-20 xl:px-2 2xl:gap-28 2xl:px-36 flex-col">
        {/* image container */}
        <div className="h-1/2 lg:h-full xl:w-[579px] 2xl:w-[610px]  lg:w-1/2 relative">
          <Image src='/me.png' fill className="object-cover" />
        </div>
        {/* text container */}
        <div className="h-1/3 md:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-3 2xl:gap-5 md:gap-5  items-start justify-center">
          <h1 className="text-2xl md:text-5xl 2xl:text-5xl font-bold ">FrontEnd Developer</h1>
          <p className="md:text-base text-xs 2xl:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolor, sequi reprehenderit, maiores atque
            qui nemo nostrum quia, dolorum facilis eos voluptatibus cumque vel accusantium omnis rerum doloribus quasi laborum!</p>

          <div className="flex gap-3 w-full ">
            <button className="p-2  rounded ring-1 bg-black text-white ring-black text-base">View My Work</button>
            <button className="p-2  rounded ring-1 ring-black text-base">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
