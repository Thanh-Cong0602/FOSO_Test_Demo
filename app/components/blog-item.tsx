"use client"

import { pathName } from "@/constants/routes";
import ArrowRightIcon from "@/public/ArrowRight.svg";
import CalendarBlankIcon from "@/public/CalendarBlank.svg";
import ClockIcon from "@/public/Clock.svg";
import BlogImage from "@/public/images/BlogImage.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogItem = () => {
  const router = useRouter()
  const handleOpenBlog = () => router.push(`${pathName.BLOG_DETAILS}/test-id`)
  return (
    <div>
      <Image src={BlogImage} alt="Blog Image" className="w-full rounded-3xl" />
      <div className="mt-3 grid gap-3 md:mt-6">
        <div className="w-fit rounded-lg bg-white-200 px-2 py-1 text-xs leading-1.5">
          <p className="text-blue-500">Quản Lý Sản Xuất</p>
        </div>
        <p className="text-xl font-extrabold text-gray-300 md:text-2xl md:leading-1.5">
          Tại sao BOM quan trọng trong quản lý sản xuất?
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src={CalendarBlankIcon} alt="CalendarBlankIcon" className="size-5 md:size-auto" />
            <p className="text-sm text-gray-500 md:text-base">17/11/2022</p>
          </div>

          <div className=" h-6 w-px border border-gray-100"></div>

          <div className="flex items-center gap-2">
            <Image src={ClockIcon} alt="VecotrIcon" className="size-5 md:size-auto" />
            <p className="text-sm text-gray-500 md:text-base">10 phút đọc</p>
          </div>
        </div>

        <div className=" flex cursor-pointer items-center gap-4 text-gray-500 transition-transform duration-300 hover:translate-x-2" onClick={handleOpenBlog}>
          <p className="text-base font-semibold leading-1.5 md:text-lg">Khám phá thêm</p>

          <div className=" flex size-12 items-center justify-center">
            <Image src={ArrowRightIcon} alt="ArrowRightIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
