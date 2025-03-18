import Saly_25 from "@/public/images/Saly-25.png";
import Saly_42 from "@/public/images/Saly-42.png";
import Image from "next/image";
import Breadcrumb from "../fields/breadcrumb";
const Header = () => {
  return (
    <div className=" flex w-full items-center justify-center px-2 md:px-10">
      {/* Left Header */}
      <div className="hidden items-center justify-center lg:flex">
        <Image src={Saly_42} alt="Saly 42" className="h-auto w-[195px]" />
      </div>

      {/* Center Header Content */}
      <div className="grid w-full items-center justify-center gap-2 py-8 md:py-12 xl:w-[1280px]">
        <div className="mx-auto md:h-[85px]">
          <Breadcrumb
            items={[
              { name: "Trang chủ", href: "#" },
              { name: "Tài nguyên", href: "#" },
              { name: "Blog", href: "#", isCurrentPage: true },
            ]}
          />
        </div>

        <div className="text-center text-2xl font-normal capitalize leading-10 tracking-normal text-[#050505] md:text-[64px] md:leading-[100px]">
          <p>
            Blog <span className="font-extrabold text-[#53B086]">FOSO</span> -
          </p>

          <div>
            Cập Nhật Tin Tức{" "}
            <div className="relative inline-block w-fit font-bold leading-7 text-black md:leading-[60px]">
              Mới Nhất
              <span className="absolute bottom-0 left-0 -z-10 h-3 w-full rounded-10 bg-[#A3EAC3] md:h-5"></span>
            </div>
          </div>
        </div>

        <div className=" text-center text-sm leading-[150%] text-[#33404A] md:text-lg">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </div>
      </div>

      {/* Right Header */}
      <div className="hidden items-center justify-center lg:flex">
        <Image src={Saly_25} alt="Saly 25" className="h-auto w-[195px]" />
      </div>
    </div>
  );
};

export default Header;
