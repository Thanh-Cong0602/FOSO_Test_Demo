"use client";

import { MENU_NAVBAR_CONFIGS } from "@/constants/navbar-config";
import ArrowUpRightIcon from "@/assets/ArrowUpRight.svg";
import ChevronDownIcon from "@/assets/CaretDown.svg";
import FOSO_Logo from "@/assets/images/FOSO_Logo.png";
import Icon_Country from "@/assets/images/Icon_country.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobile-navbar";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className="mx-auto mt-10 box-border max-w-screen-xl rounded-10 px-2 py-0 backdrop-blur-[25px] md:px-9 md:py-3"
      style={{
        boxShadow: `
      inset 0px 2px 84px 0px rgba(0, 0, 0, 0.02), 
      -9px 20px 60px -24px rgba(0, 0, 0, 0.08), 
      1px -1px 0px 0px #FFFFFF, 
      -1px 1px 0px 0px #F0F0F0`,
      }}
    >
      <div className="flex items-center justify-center gap-8 xl:gap-16">
        <a href="/">
          <Image src={FOSO_Logo} alt="FOSO Logo" className="h-auto w-[134px]" priority width={134} />
        </a>

        <div className="hidden lg:block">
          <ul className="flex h-[37px] gap-2">
            {MENU_NAVBAR_CONFIGS.map((item, index) => (
              <li key={index} className="flex items-center justify-center px-2">
                <a href={item.href} className="relative flex h-[37px] flex-col items-center justify-center">
                  {item.sub_menu ? (
                    <div className="flex items-center gap-2">
                      <p className={pathname === item.href ? "font-bold" : ""}>{item.title}</p>
                      <Image src={ChevronDownIcon} alt="ChevronDownIcon" className="size-4 text-sm" />
                    </div>
                  ) : (
                    <p className={pathname === item.href ? "font-bold" : ""}>{item.title}</p>
                  )}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 size-1.5 rounded-full bg-turquoise-400"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block lg:hidden">
          <MobileNavbar />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-10 cursor-pointer items-center gap-3 rounded-10 border border-solid border-gray-200 bg-gradient-to-t from-[rgba(9,9,11,0.05)] to-[rgba(9,9,11,0.1)] px-3 py-2">
            <Image src={Icon_Country} alt="Icon Country" />
            <div className=" flex items-center gap-1">
              <p>VI</p>
              <Image src={ChevronDownIcon} alt="ChevronDownIcon" className="size-4" />
            </div>
          </div>

          <div className="flex h-10 cursor-pointer items-center gap-3 rounded-10 bg-turquoise-400 px-3 py-2">
            <p className="hidden font-bold capitalize sm:block">Trở thành khách hàng</p>
            <div className="flex size-[22px] items-center justify-center rounded-full bg-black-900">
              <Image src={ArrowUpRightIcon} alt="ArrowUpRightIcon" className="size-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
