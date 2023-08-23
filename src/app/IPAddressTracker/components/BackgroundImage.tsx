import { useMediaQuery } from "@/hooks/useMediaQuery";
import DesktopBackground from "@/app/IPAddressTracker/res/images/pattern-bg-desktop.png";
import MobileBackground from "@/app/IPAddressTracker/res/images/pattern-bg-mobile.png";
import Image, { StaticImageData } from "next/image";
import { use, useEffect, useState } from "react";

const BackgroundImage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [background, setBackground] =
    useState<StaticImageData>(DesktopBackground);

  useEffect(() => {
    setBackground(isDesktop ? DesktopBackground : MobileBackground);
  }, [isDesktop]);

  return <Image src={background} alt="Background" className="h-full w-full" />;
};

export default BackgroundImage;
