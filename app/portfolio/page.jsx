"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative font-[Poppins]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-5 items-center justify-center text-5xl md:text-7xl text-center">
          My Works
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
       
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex justify-center items-center flex-col gap-6 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[400px] xl:h-[220px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-64 text-center text-xs md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col mt-32 gap-3 items-center justify-center text-center">
        <h1 className="text-2xl md:text-5xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Ani-Portfolio",
    desc: "Welcome to my portfolio website, where you can explore a showcase of my projects and delve into the skills I possess. Get to know me better through the work I have done and the expertise I bring to the table.",
    img:  "/Portfolio.png",
    link: "https://aniket-portfolio-six.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "QUICKIES",
    desc: "Introducing Quickies: Your goto restaurant website for delicious dining! Browse through our diverse menu featuring burgers, pizzas, and pasta with customizable options. Add items to your cart effortlessly and finalize your order with ease.",
    img: "/Quikies.png",
    link: "https://delicious-restr.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Camel-Travels",
    desc: "Camel Travels: Your Gateway to Rajasthan's Rich Heritage Discover Rajasthan's captivating destinations and immerse yourself in its vibrant culture with Camel Travels. Explore our insightful blogs to uncover hidden gems and insider tips for your journey",
    img: "/Camel.png",
    link: "https://camel-travels.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Begin Trader",
    desc: "Begin Trader: Your Pathway to Proficient Trading At Begin Trader, delve into the world of trading and gain comprehensive knowledge across various trading domains. From beginner basics to advanced strategies, our courses offer in-depth insights to sharpen your trading skills.",
    img: "/begin.png",
    link: "https://begintrader.in/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "SaasAro Booking",
    desc: "Introducing SaasAro, your premier destination for seamless hotel booking experiences. Our platform is meticulously designed to empower customers in selecting from an array of premium and standard hotel rooms, each tailored to meet your unique specifications and preferences.",
    img: "/Hotel.png",
    link: "https://anikethotelbooking.netlify.app/",
  },
];

export default PortfolioPage;
