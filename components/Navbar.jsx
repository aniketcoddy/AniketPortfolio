"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    opened: {
      opacity: 0,
    },
  };

  const lastVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,
      }
    },
  };

  const listItemVariants = {
    closed: {
      x: "-10",
      opacity:0,
    },
    opened: {
      x: 0,
      opacity:1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className="hidden md:flex gap-4 w-1/3 md:justify-center text-lg 2xl:text-xl ">
        {NavLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* logo making */}
      <div className=" md:hidden lg:flex lg:w-1/3 lg:justify-center ">
        <Link
          href="/"
          className="flex text-sm bg-black font-semibold p-1 items-center 2xl:text-xl justify-center rounded-md"
        >
          <h1 className="text-white px-1 2xl:px-2 ">AnI</h1>
          <h1 className="text-black bg-white p-1 justify-center rounded-md">
            .Portfolio
          </h1>
        </Link>
      </div>

      <div className="hidden md:flex gap-5 w-1/3 md:justify-center">
        <Link href="/">
          <Image src="/github.png" alt="github" width={30} height={30} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="linkidin" width={30} height={30} />
        </Link>
        <Link href="/">
          <Image src="/whatsapp.png" alt="whatsapp" width={30} height={30} />
        </Link>
      </div>

      <div className="md:hidden">
        {/* responsive menu */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black  rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={lastVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* Menu Items */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute bg-black w-screen text-white top-0 left-0 h-screen flex flex-col items-center justify-center gap-8 text-2xl z-40"
          >
            {NavLinks.map((links) => (
              <motion.div variants={listItemVariants} key={links.title} onClick={() => setOpen(!open)}>
                <Link href={links.url}>{links.title}</Link>
              </motion.div>
            ))}
            <div className="flex gap-5">
              <Link href="/">
                <Image src="/github2.png" alt="github" width={30} height={30} />
              </Link>
              <Link href="/">
                <Image
                  src="/linkedin.png"
                  alt="linkidin"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/whatsapp.png"
                  alt="whatsapp"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const NavLinks = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default Navbar;
