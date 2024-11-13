"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Projects from "@/app/projects-components/Projects";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState("0")

  const resetColorOfOtherButtons = (currentIndex: string) => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      if(button.dataset.index !== currentIndex) {
        button.classList.remove("text-white");
        button.classList.add("text-[#DEAE9E]");

      }
    });
  }

  const handleItemSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    // Get the data-index of the clicked button
    const index: string | null = target.getAttribute('data-index');
    console.log(`Button ${index} clicked`);  // Logs the index of the clicked button
    if (index !== null) {
      target.classList.remove("text-[#DEAE9E]");
      target.classList.add("text-white");
      setActiveIndex(index);
      resetColorOfOtherButtons(index);
  }
  };

    
  return (
    <div className="flex flex-row w-[100%]">
      <nav className="bg-[#BD5D38] w-full lg:h-screen h-[70px] lg:w-72   fixed  lg:flex-col flex-row  justify-center items-center ">
      <Avatar className="w-32 h-32 max-lg:hidden ">
        <AvatarImage  src="https://robohash.org/109" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="mb-12 flex flex-row lg:flex-col gap-4 w-[100%] p-5 justify-center items-center">
      <Button data-index="0" onClick={handleItemSelect}  className="bg-transparent border-none text-white font-bold text-lg hover:text-white hover:bg-transparent active:text-white" variant="outline">Projet #1</Button>
      <Button data-index="1" onClick={handleItemSelect}  className="bg-transparent border-none text-[#DEAE9E] font-bold text-lg hover:text-white hover:bg-transparent active:text-white" variant="outline">Projet #2</Button>
      <Button data-index="2" onClick={handleItemSelect}  className="bg-transparent border-none text-[#DEAE9E] font-bold text-lg hover:text-white hover:bg-transparent active:text-white" variant="outline">Projet #3</Button>
      <Button data-index="3" onClick={handleItemSelect}  className="bg-transparent border-none text-[#DEAE9E] font-bold text-lg hover:text-white hover:bg-transparent active:text-white" variant="outline">Projet #4</Button>
      </div>
      </nav>
      
      <main className="flex-1 bg-[#FFFFFF]  lg:pl-[300px] ">
          
          <Projects currentIndex={"p-" + activeIndex} />
      </main>
      
    </div>
  );
}
