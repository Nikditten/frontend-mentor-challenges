import { FC } from "react";
import Image from "next/image";

interface Props {
  link: string;
  src: string;
  alt: string;
}

const SocialMediaButton: FC<Props> = ({ link, src, alt }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image className="text-2xl m-auto text-white" src={src} alt={alt} />
    </a>
  );
};

export default SocialMediaButton;
