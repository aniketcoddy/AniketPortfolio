"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import img1 from "../../portfolio/public/github.png";
import img2 from "../../portfolio/public/linkedin.png";
import img3 from "../../portfolio/public/whatsapp.png";
import img4 from "../../portfolio/public/github2.png"
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className="hidden md:flex gap-4 w-1/3 md:justify-center text-lg ">
        {NavLinks.map((link) => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>

      {/* logo making */}
      <div className=" md:hidden lg:flex lg:w-1/3 lg:justify-center">
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

      <div className="hidden md:flex gap-5 w-1/3 md:justify-center">
        <Link href="/">
          <Image src={img1} alt="github" width={30} height={30} />
        </Link>
        <Link href="/">
          <Image src={img2} alt="linkidin" width={30} height={30} />
        </Link>
        <Link href="/">
          <Image src={img3} alt="whatsapp" width={30} height={30} />
        </Link>
      </div>

      <div className="md:hidden">
        {/* responsive menu */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>

        {/* Menu Items */}
        {open && (
          <div className="absolute bg-black w-screen text-white top-0 left-0 h-screen flex flex-col items-center justify-center gap-8 text-2xl">
            {NavLinks.map((links) => (
              <Link href={links.url} key={links.title}>
                {links.title}
              </Link>
            ))}
            <div className="flex gap-5">
              <Link href="/">
                <Image src={img4} alt="github" width={30} height={30} />
              </Link>
              <Link href="/">
                <Image src={img2} alt="linkidin" width={30} height={30} />
              </Link>
              <Link href="/">
                <Image src={img3} alt="whatsapp" width={30} height={30} />
              </Link>
            </div>
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
