import Banner from "@/public/images/Banner.png";
import BannerImage from "@/public/images/BannerImage.png";
import Image from "next/image";
import BlogItem from "../blog-item";
import ButtonComponent from "../fields/button-custom";

const LeftContent = () => {
  return (
    <div className="grid w-full gap-6 lg:max-w-[1042px]">
      <div className="text-2xl font-extrabold leading-6 text-black-500 md:text-4xl md:leading-2">Tất cả bài viết</div>

      <div className=" grid gap-6 md:gap-12">
        <div
          className=" relative h-[318px] w-full rounded-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage.src})` }}
        >
          <div className=" absolute left-5 top-[60px] z-50 md:left-[60px]">
            <div className=" grid items-center justify-start gap-8">
              <p className="w-full text-2xl font-bold text-[#FFFFFF] md:w-[376px] md:text-4xl">
                Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
              </p>
              <ButtonComponent text="Tham gia ngay" />
            </div>
          </div>
          <div className=" absolute bottom-0 right-[25px] top-[25px] opacity-50 md:opacity-100 lg:opacity-50 xl:opacity-100 ">
            <Image src={Banner} alt="Banner" />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-between gap-0 md:grid-cols-2 md:gap-6">
          <BlogItem />
          <BlogItem />

          <BlogItem />
          <BlogItem />

          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
