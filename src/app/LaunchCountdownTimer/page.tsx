"use client";

import { NextPage } from "next";
import Image from "next/image";
import Mountains from "@/app/LaunchCountdownTimer/res/images/pattern-hills.svg";
import Stars from "@/app/LaunchCountdownTimer/res/images/bg-stars.svg";
import Facebook from "@/app/LaunchCountdownTimer/res/images/icon-facebook.svg";
import Instagram from "@/app/LaunchCountdownTimer/res/images/icon-instagram.svg";
import Pinterest from "@/app/LaunchCountdownTimer/res/images/icon-pinterest.svg";
import SocialMediaButton from "./components/SocialMediaButton";
import CountDownItem from "./components/CountDownItem";

const AgeCalculatorApp: NextPage = () => {
  return (
    <main
      className="h-screen w-screen bg-[#191a24] relative"
      style={{ fontFamily: "Red Hat Text" }}
    >
      <Image
        className="h-full w-full z-0 object-cover"
        src={Stars}
        alt="stars"
      />
      <div className="relative z-40">
        <Image
          className="min-w-full h-[25vh] absolute bottom-0 object-cover"
          src={Mountains}
          alt="moutains"
        />

        <div className="w-full h-[20vh] md:h-[25vh] bottom-0 absolute flex flex-row justify-center items-center gap-8 z-10">
          <SocialMediaButton src={Facebook} alt="facebook" link="#" />
          <SocialMediaButton src={Instagram} alt="instagram" link="#" />
          <SocialMediaButton src={Pinterest} alt="pinterest" link="#" />
        </div>
      </div>
      <div
        id="content"
        className="h-[75vh] w-full absolute top-0 z-20 flex flex-col justify-evenly items-center"
      >
        <h1 className="text-xl text-white uppercase tracking-widest">
          {"We're launching soon"}
        </h1>

        <div className="flex flex-row jusitfy-center items-center gap-4">
          <CountDownItem value={8} label="days" />
          <CountDownItem value={23} label="hours" />
          <CountDownItem value={55} label="minutes" />
          <CountDownItem value={41} label="seconds" />
        </div>
      </div>
    </main>
  );
};

export default AgeCalculatorApp;
