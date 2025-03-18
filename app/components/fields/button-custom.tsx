import Image from "next/image";
import React from "react";
import ArrowUpRightIcon from "@/public/ArrowUpRight.svg";

interface ButtonComponentProps {
  text: string;
  width?: string;
}
const ButtonComponent = ({ text, width }: Readonly<ButtonComponentProps>) => {
  return (
    <div
      style={{ width: `${width}` }}
      className=" border-2 border-white text-white rounded-[40px] px-6 py-2 w-fit h-[50px] flex items-center justify-between cursor-pointer gap-8"
    >
      <p className=" capitalize">{text}</p>
      <Image src={ArrowUpRightIcon} alt="Icon" />
    </div>
  );
};

export default ButtonComponent;
