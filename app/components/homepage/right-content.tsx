"use client";

import ExperienceImage1 from "@/public/images/ExperienceImage1.png";
import MaskGroup from "@/public/images/MaskGroup.png";
import MRPBeta from "@/public/images/MRPBeta.png";
import MagnifyingGlassIcon from "@/public/MagnifyingGlass.svg";
import Image from "next/image";
import ButtonComponent from "../fields/button-custom";
import Banner2 from "@/public/images/Banner2.png";
import ExperienceBg from "@/public/images/ExperienceBg.png";

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
              className="rounded border border-transparent p-2 text-base font-medium leading-1.5 text-black outline-none 
               ring-0 focus:border-transparent focus:outline-none focus:ring-0"
            />
          </label>

          <div className="flex size-12 cursor-pointer items-center justify-center rounded-2xl bg-[#15AA7A]">
            <Image src={MagnifyingGlassIcon} alt="MagnifyingGlassIcon" className="size-6" />
          </div>
        </div>
      </div>

      <div className=" grid gap-3 md:gap-6">
        <p className="text-xl font-extrabold uppercase leading-2 md:text-2xl">Danh mục</p>
        <div className="grid gap-2 text-base font-medium leading-1.5 text-[#33404A] md:gap-4 md:text-lg">
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
        <div
          className="grid h-fit w-[366px] items-start gap-10 rounded-6 bg-cover bg-center py-7"
          style={{ backgroundImage: `url(${ExperienceBg.src})` }}
        >
          <div className="relative mt-7 h-[250px]">
            <Image
              src={ExperienceImage1}
              alt="ExperienceImage"
              style={{ position: "absolute", right: "0px" }}
            />
          </div>

          <div className="relative h-[136px] px-3 md:px-6">
            <Image src={MaskGroup} alt="MaskGroup" style={{ position: "absolute" }} />

            <Image src={MRPBeta} alt="MRPBeta" style={{ position: "absolute" }} />
          </div>

          <div className="mx-auto mb-7">
            <ButtonComponent text="Trải nghiệm ngay" width="318px" />
          </div>
        </div>

        <div
          className="grid h-fit w-[366px] items-start gap-10 rounded-6 bg-cover bg-center py-7"
          style={{ backgroundImage: `url(${ExperienceBg.src})` }}
        >
          <div className="mt-7">
            <Image src={Banner2} alt="ExperienceImage" />
          </div>

          <p className="mx-auto max-w-[318px] text-xl font-bold leading-1.5 text-white">
            Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!
          </p>

          <div className="mx-auto mb-7">
            <ButtonComponent text="Tham gia ngay" width="318px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
