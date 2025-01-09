import React from "react";
import Picture from "../attoms/Picture";
import {StaticImageData} from "next/image";
interface Skill_Interface {
  children: React.ReactNode;
  logo: StaticImageData | string;
  color?: string;
}

export default function Skill({children, logo, color}: Skill_Interface) {
  return (
    <div className="skill min-w-5 px-16 py-16  cursor-pointer  css-selector flex flex-col card gap-Skill-gap  rounded-Skill justify-center items-center hover:scale-110 transition-all  sm:h-max  md:flex-row md:flex-nowrap md:size-40 ">
      <Picture src={logo}></Picture>
      <div className="text-Skill-text text-regular md:text-base">{children}</div>
    </div>
  );
}
