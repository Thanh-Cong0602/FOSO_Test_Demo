import Image from "next/image";
import React from "react";
import ArrowUpRightIcon from "@/assets/ArrowUpRight.svg";

interface ButtonComponentProps {
  text: string;
  width?: string;
}
const ButtonComponent = ({ text, width }: Readonly<ButtonComponentProps>) => {
  return (
    <div
      style={{ width: `${width}` }}
      className=" flex h-[50px] w-fit cursor-pointer items-center justify-between gap-8 rounded-10 border-2 border-white-100 px-6 py-2 text-white-100"
    >
      <p className=" capitalize">{text}</p>
      <Image src={ArrowUpRightIcon} alt="Icon" />
    </div>
  );
};

export default ButtonComponent;
