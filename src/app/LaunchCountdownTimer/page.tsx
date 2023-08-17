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
import { useEffect, useState } from "react";

const AgeCalculatorApp: NextPage = () => {
  const [daysReamining, setDaysRemaining] = useState<number>(0);
  const [hoursReamining, setHoursRemaining] = useState<number>(0);
  const [minutesReamining, setMinutesRemaining] = useState<number>(0);
  const [secondsReamining, setSecondsRemaining] = useState<number>(0);

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear;
    const targetDate = new Date(`December 31, ${nextYear} 23:59:59`);

    const interval = setInterval(() => {
      const difference = targetDate.getTime() - now.getTime();
      setDaysRemaining(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHoursRemaining(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutesRemaining(Math.floor((difference / 1000 / 60) % 60));
      setSecondsRemaining(Math.floor((difference / 1000) % 60));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [daysReamining, hoursReamining, minutesReamining, secondsReamining]);

  return (
    <main
      className="h-screen w-screen bg-[#191a24] relative"
      style={{ fontFamily: "Red Hat Text" }}
    >
      <Image
        className="h-3/4 relative z-0 object-cover"
        src={Stars}
        alt="stars"
      />
      <div className="h-1/4 relative z-40">
        <Image
          className="min-w-full h-full absolute bottom-0 object-cover"
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
          <CountDownItem value={daysReamining.toString()} label="days" />
          <CountDownItem value={hoursReamining.toString()} label="hours" />
          <CountDownItem value={minutesReamining.toString()} label="minutes" />
          <CountDownItem value={secondsReamining.toString()} label="seconds" />
        </div>
      </div>
    </main>
  );
};

export default AgeCalculatorApp;
