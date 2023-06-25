"use client";

import { useState } from "react";
import Input from "./components/Input";
import { NextPage } from "next";
import { HiArrowDown } from "react-icons/hi";

const AgeCalculatorApp: NextPage = () => {
  const [day, setDay] = useState<string>("");
  return (
    <main className="h-screen w-screen bg-[#F0F0F0] flex justify-center items-center">
      <div className="h-[550px] w-[650px] bg-white rounded-t-2xl rounded-bl-2xl rounded-br-[200px] p-8 flex flex-col items-center gap-3">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <Input key="day" name="day" value={day} onChange={setDay} />
          <Input key="day" name="month" value={day} onChange={setDay} />
          <Input key="day" name="year" value={day} onChange={setDay} />
        </div>

        <div className="w-full flex flex-row items-center">
          <span className="h-[0.5px] w-full bg-gray-400/25" />
          <button className="p-3 rounded-full bg-indigo-500">
            <HiArrowDown className="text-2xl m-auto text-white" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default AgeCalculatorApp;
