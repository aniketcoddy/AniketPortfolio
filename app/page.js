import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex justify-center px-4 lg:flex-row  sm:px-8 md:px-12 lg:px-20 xl:px-48 flex-col">
      {/* image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src='/me.png' fill className="object-cover"/>
      </div>
      {/* text container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-3 md:gap-5 items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold ">FrontEnd Developer</h1>
        <p className="md:text-base text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolor, sequi reprehenderit, maiores atque 
        qui nemo nostrum quia, dolorum facilis eos voluptatibus cumque vel accusantium omnis rerum doloribus quasi laborum!</p>
      
        <div className="flex gap-3 w-full "> 
          <button className="p-2  rounded ring-1 bg-black text-white ring-black text-sm">View My Work</button>
          <button className="p-2  rounded ring-1 ring-black text-sm">Contact Me</button>
        </div>
      </div>
      
    </div>
  );
}
