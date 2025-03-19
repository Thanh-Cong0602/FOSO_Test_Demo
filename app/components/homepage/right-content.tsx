"use client";

import MagnifyingGlassIcon from "@/assets/MagnifyingGlass.svg";
import Image from "next/image";
import ExperienceItem from "../experience-item";
import JoinNowItem from "../join-now-item";

const RightContent = () => {
  return (
    <div className="grid w-full gap-8 lg:max-w-[366px]">
      <div className="grid h-fit gap-6">
        <p className=" h-12 text-2xl font-extrabold leading-2">Tìm kiếm</p>
        <div className="flex items-center justify-between rounded-2xl px-3 py-2 shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.16)]">
          <label className="flex flex-col">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết"
              className="rounded border border-transparent p-2 text-base font-medium leading-1.5 text-black-200 outline-none 
               ring-0 focus:border-transparent focus:outline-none focus:ring-0"
            />
          </label>

          <div className="flex size-12 cursor-pointer items-center justify-center rounded-2xl bg-turquoise-300">
            <Image src={MagnifyingGlassIcon} alt="MagnifyingGlassIcon" className="size-6" />
          </div>
        </div>
      </div>

      <div className=" grid gap-3 md:gap-6">
        <p className="text-xl font-extrabold uppercase leading-2 md:text-2xl">Danh mục</p>
        <div className="grid gap-2 text-base font-medium leading-1.5 text-gray-300 md:gap-4 md:text-lg">
          <div className="flex items-center justify-between ">
            <p>Tất cả</p>
            <p>108</p>
          </div>

          <div className="flex items-center justify-between ">
            <p>Thiết Kế Website</p>
            <p>36</p>
          </div>

          <div className="flex items-center justify-between ">
            <p>Thiết Kế App Mobile</p>
            <p>13</p>
          </div>

          <div className="flex items-center justify-between ">
            <p>Quản Lý Sản Xuất</p>
            <p>25</p>
          </div>

          <div className="flex items-center justify-between ">
            <p>Quản Lý Bán Hàng</p>
            <p>22</p>
          </div>

          <div className="flex items-center justify-between ">
            <p>Báo Chí Nói Về FOSO</p>
            <p>7</p>
          </div>

          <div className="flex items-center justify-between ">
            <p>Tin Tức FOSO</p>
            <p>5</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 md:flex-row lg:flex-col">
        <ExperienceItem />

        <JoinNowItem />
      </div>
    </div>
  );
};

export default RightContent;
