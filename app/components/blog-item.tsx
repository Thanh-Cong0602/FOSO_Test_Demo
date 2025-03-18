import ArrowRightIcon from "@/public/ArrowRight.svg";
import CalendarBlankIcon from "@/public/CalendarBlank.svg";
import ClockIcon from "@/public/Clock.svg";
import BlogImage from "@/public/images/BlogImage.png";
import Image from "next/image";

const BlogItem = () => {
  return (
    <div>
      <Image src={BlogImage} alt="Blog Image" className="w-full rounded-3xl" />
      <div className="mt-3 grid gap-3 md:mt-6">
        <div className=" w-fit rounded-lg bg-[#E2F0FE] px-2 py-1 text-xs leading-[150%]">
          <p className="text-[#0F4F9E]">Quản Lý Sản Xuất</p>
        </div>
        <p className=" text-xl font-extrabold text-[#33404A] md:text-2xl md:leading-[150%]">
          Tại sao BOM quan trọng trong quản lý sản xuất?
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src={CalendarBlankIcon} alt="CalendarBlankIcon" className="size-5 md:size-auto" />
            <p className="text-sm text-[#667F93] md:text-base">17/11/2022</p>
          </div>

          <div className=" h-6 w-px border border-[#D9E1E7]"></div>

          <div className="flex items-center gap-2">
            <Image src={ClockIcon} alt="VecotrIcon" className="size-5 md:size-auto" />
            <p className="text-sm text-[#667F93] md:text-base">10 phút đọc</p>
          </div>
        </div>

        <div className=" flex cursor-pointer items-center gap-4 text-[#667F93]  transition-transform duration-300 hover:translate-x-2">
          <p className="text-base font-semibold leading-[150%] md:text-lg">Khám phá thêm</p>

          <div className=" flex size-12 items-center justify-center">
            <Image src={ArrowRightIcon} alt="ArrowRightIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
