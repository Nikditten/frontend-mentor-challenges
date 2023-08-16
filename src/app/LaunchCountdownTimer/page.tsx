"use client";

import { NextPage } from "next";
import Image from "next/image";
import Mountains from "@/app/LaunchCountdownTimer/res/images/pattern-hills.svg";
import Stars from "@/app/LaunchCountdownTimer/res/images/bg-stars.svg";

const AgeCalculatorApp: NextPage = () => {
  return (
    <main className="h-screen w-screen bg-[#191a24] relative">
      <Image className="h-full w-full z-0" src={Stars} alt="stars" />
      <Image
        className="w-full absolute bottom-0 z-10"
        src={Mountains}
        alt="moutains"
      />
      {/* <div id="content" className="h-full w-full absolute z-20"></div> */}
    </main>
  );
};

export default AgeCalculatorApp;
