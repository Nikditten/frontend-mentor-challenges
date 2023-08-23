"use client";
import "leaflet/dist/leaflet.css";
import { NextPage } from "next";
import { MdChevronRight } from "react-icons/md";
import InfoItem from "./components/Info/InfoItem";
import Divider from "./components/Info/Divider";
import { useEffect, useState } from "react";
import DynamicMap from "./components/Map/DynamicMap";
import BackgroundImage from "./components/BackgroundImage";
import InfoContainer from "./components/Info/InfoContainer";
import SearchForm from "./components/SearchForm";

// use Rubic font - https://fonts.google.com/specimen/Rubik

interface IIPInfo {
  ip: string;
  location: {
    description: string;
    lat: number;
    lng: number;
  };
  timezone: string;
  isp: string;
}

const IPAddressTracker: NextPage = () => {
  const [searchIp, setSearchIp] = useState<string>("");

  const [ipInfo, setIpInfo] = useState<IIPInfo>({
    ip: "",
    location: {
      description: "",
      lat: 53,
      lng: 9,
    },
    timezone: "",
    isp: "",
  });

  const peformIpLookup = async () => {
    const res = await fetch("https://api.ipify.org/?format=json", {
      method: "GET",
    });

    const data = await res.json();

    return data.ip;
  };

  const peformIpInfoLookup = async (ip?: string) => {
    const ipLookup = ip ? ip : await peformIpLookup();

    const res = await fetch(`http://ip-api.com/json/${ipLookup}`, {
      method: "GET",
    });

    const data = await res.json();

    const locationDescription =
      data.city && data.zip ? `${data.city}, ${data.zip}` : "Unknown";

    const ipInfo: IIPInfo = {
      ip: data.query ?? "",
      location: {
        description: locationDescription,
        lat: data.lat ?? 0,
        lng: data.lon ?? 0,
      },
      timezone: data.timezone ?? "Unknown",
      isp: data.isp ?? "Unknown",
    };

    setIpInfo(ipInfo);
  };

  useEffect(() => {
    peformIpInfoLookup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="h-screen w-screen relative flex flex-col">
      <div className="h-1/3 w-full relative">
        <BackgroundImage />

        <h1 className="w-full text-center text-white text-2xl absolute top-5 left-1/2 -translate-x-1/2">
          IP Address Tracker
        </h1>

        <SearchForm
          onSubmit={() => peformIpInfoLookup(searchIp)}
          onChange={setSearchIp}
        />

        <InfoContainer>
          <InfoItem label="IP Address" value={ipInfo.ip} />

          <Divider />

          <InfoItem label="Location" value={ipInfo.location.description} />

          <Divider />

          <InfoItem label="Timezone" value={ipInfo.timezone} />

          <Divider />

          <InfoItem label="ISP" value={ipInfo.isp} />
        </InfoContainer>
      </div>
      <DynamicMap
        className="z-0"
        lat={ipInfo.location.lat}
        lng={ipInfo.location.lng}
      />
    </main>
  );
};

export default IPAddressTracker;
