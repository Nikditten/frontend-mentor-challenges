"use client";
import "leaflet/dist/leaflet.css";
import { NextPage } from "next";
import DesktopBackground from "@/app/IPAddressTracker/res/images/pattern-bg-desktop.png";
import Image from "next/image";
import Map from "./components/map/Map";
import { MdChevronRight } from "react-icons/md";

const IPAddressTracker: NextPage = () => {
  return (
    <main className="h-screen w-screen relative flex flex-col">
      <div className="w-full relative">
        <Image src={DesktopBackground} alt="Background" className="w-full" />
        <div className="h-full w-full absolute z-10 top-0 flex flex-col justify-start items-center gap-8 pt-8">
          <h1 className="text-white text-2xl">IP Address Tracker</h1>

          <div className="w-full flex flex-row justify-center items-center">
            <input
              className="h-12 w-1/3 px-4 py-2 rounded-l-xl focus:outline-none"
              placeholder="Search for any IP address or domain"
            />

            <button className="h-12 w-12 bg-black rounded-r-xl text-white p-2">
              <MdChevronRight className="h-full w-full" />
            </button>
          </div>

          <div className="h-40 w-1/2 absolute bottom-0 translate-y-1/2 z-50 bg-white rounded-2xl flex flex-row justify-evenly items-center p-6">
            <div className="h-full flex flex-col justify-start items-start gap-2">
              <h2 className="uppercase text-gray-400 text-xs">IP Address</h2>
              <p className="text-black text-xl">192.128.167.1</p>
            </div>

            <div className="h-3/4 w-0.5 bg-gray-200 rounded-full" />

            <div className="h-full flex flex-col justify-start items-start gap-2">
              <h2 className="uppercase text-gray-400 text-xs">Location</h2>
              <p className="text-black text-xl">Brooklyn, NY 10001</p>
            </div>

            <div className="h-3/4 w-0.5 bg-gray-200 rounded-full" />

            <div className="h-full flex flex-col justify-start items-start gap-2">
              <h2 className="uppercase text-gray-400 text-xs">Timezone</h2>
              <p className="text-black text-xl">UTC -05:00</p>
            </div>

            <div className="h-3/4 w-0.5 bg-gray-200 rounded-full" />

            <div className="h-full flex flex-col justify-start items-start gap-2">
              <h2 className="uppercase text-gray-400 text-xs">ISP</h2>
              <p className="text-black text-xl">SpaceX Starlink</p>
            </div>
          </div>
        </div>
      </div>
      <Map className="h-full w-full z-0" lat={53} lng={9} />
    </main>
  );
};

export default IPAddressTracker;
