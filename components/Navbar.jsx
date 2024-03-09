'use client'
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  const [open , setOpen] = useState(false)

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* logo making */}
      <div className="md:hidden">
      <Link
        href="/"
        className="flex text-sm bg-black font-semibold p-1 items-center justify-center rounded-md"
      >
        <h1 className="text-white px-1 ">AnI</h1>
        <h1 className="text-black bg-white p-1 justify-center rounded-md">
          .Portfolio
        </h1>
      </Link>
      </div>
      <div className="md:hidden">
      {/* responsive menu */}
      <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen(!open)}>
        <div className="w-10 h-1 bg-white rounded"></div>
        <div className="w-10 h-1 bg-white rounded"></div>
        <div className="w-10 h-1 bg-white rounded"></div>
      </button>

      {/* Menu Items */}
      {open && (
      <div className="absolute bg-black w-screen text-white top-0 left-0 h-screen flex flex-col items-center justify-center gap-8 text-2xl">
        {NavLinks.map(links=>(
          <Link href={links.url} key={links.title}>
             {links.title}
          </Link>
        ))}
      </div>
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
