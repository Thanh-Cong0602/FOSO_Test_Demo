import ExperienceItem from "@/components/experience-item";
import JoinNowItem from "@/components/join-now-item";
import CaretDownIcon from "@/public/CaretDown.svg";
import CaretUpIcon from "@/public/CaretUp.svg";
import Image from "next/image";
import { useState } from "react";

interface RightBlogDetailsProps {
  sections: Record<string, React.RefObject<HTMLParagraphElement>>;
}

const RightBlogDetails = ({ sections }: Readonly<RightBlogDetailsProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const scrollToSection = (ref: React.RefObject<HTMLParagraphElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex-1 max-w-[492px]">
      <div className="grid gap-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <p className="text-black-500 text-xl md:text-2xl leading-2 font-extrabold">Nội dung bài viết</p>
          <Image
            src={isOpen ? CaretUpIcon : CaretDownIcon}
            alt="CaretUpIcon"
            className="size-6 text-turquoise-300"
          />
        </div>

        <div
          className={`transition-all duration-300 ease-in-out text-sm md:text-lg leading-2 font-medium text-gray-300 grid gap-[6px] ${isOpen ? "block" : "hidden"}`}
        >
          <p
            onClick={() => scrollToSection(sections.s1)}
            className="font-bold text-turquoise-300 hover:underline cursor-pointer"
          >
            1. Quy trình 5S là gì?
          </p>
          <p onClick={() => scrollToSection(sections.s2)} className="hover:underline cursor-pointer">
            2. Lợi ích quy trình 5S đem lại
          </p>
          <p onClick={() => scrollToSection(sections.s3)} className="hover:underline cursor-pointer">
            3. Tại sao doanh nghiệp nên áp dụng quy trình 5S
          </p>
          <div className="pl-2">
            <p onClick={() => scrollToSection(sections.s31)} className="hover:underline cursor-pointer">
              3.1 Cải thiện rõ nét môi trường làm việc
            </p>
            <p onClick={() => scrollToSection(sections.s32)} className="hover:underline cursor-pointer">
              3.2 Tiết kiệm thời gian đáng kể
            </p>
            <p onClick={() => scrollToSection(sections.s33)} className="hover:underline cursor-pointer">
              3.3 Tăng năng suất làm việc
            </p>
            <p onClick={() => scrollToSection(sections.s34)} className="hover:underline cursor-pointer">
              3.4 Tiết kiệm chi phí
            </p>
            <p onClick={() => scrollToSection(sections.s35)} className="hover:underline cursor-pointer">
              3.5 Tăng chất lượng sản phẩm
            </p>
          </div>

          <p onClick={() => scrollToSection(sections.s4)} className="hover:underline cursor-pointer">
            4. Quy trình 5S gồm các bước:
          </p>
          <div className="pl-2">
            <p onClick={() => scrollToSection(sections.s41)} className="hover:underline cursor-pointer">
              4.1 Seiri (Ngăn nắp)
            </p>
            <p onClick={() => scrollToSection(sections.s42)} className="hover:underline cursor-pointer">
              4.2 Seiton (Sắp xếp)
            </p>
            <p onClick={() => scrollToSection(sections.s43)} className="hover:underline cursor-pointer">
              4.3 Seiso (Vệ sinh)
            </p>
            <p onClick={() => scrollToSection(sections.s44)} className="hover:underline cursor-pointer">
              4.4 Seiketsu (Tiêu chuẩn hóa)
            </p>
            <p onClick={() => scrollToSection(sections.s45)} className="hover:underline cursor-pointer">
              4.5 Shitsuke (Kỷ luật)
            </p>
          </div>

          <p onClick={() => scrollToSection(sections.s5)} className="hover:underline cursor-pointer">
            5. Quy trình được thực hiện như sau:
          </p>
          <div className="pl-2">
            <p onClick={() => scrollToSection(sections.s51)} className="hover:underline cursor-pointer">
              5.1 Giai đoạn chuẩn bị
            </p>
            <p onClick={() => scrollToSection(sections.s52)} className="hover:underline cursor-pointer">
              5.2 Triển khai rộng rãi
            </p>
            <p onClick={() => scrollToSection(sections.s53)} className="hover:underline cursor-pointer">
              5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
            </p>
            <p onClick={() => scrollToSection(sections.s54)} className="hover:underline cursor-pointer">
              5.4 Sàng lọc, sắp xếp và đánh giá
            </p>
            <p onClick={() => scrollToSection(sections.s55)} className="hover:underline cursor-pointer">
              5.5 Đánh giá
            </p>
          </div>
          <p onClick={() => scrollToSection(sections.s6)} className="hover:underline cursor-pointer">
            6. Quy trình 5S có giống với Kaizen?
          </p>
          <p onClick={() => scrollToSection(sections.s7)} className="hover:underline cursor-pointer">
            7. Đối tượng nào nên áp dụng 5S?
          </p>
          <p onClick={() => scrollToSection(sections.s8)} className="hover:underline cursor-pointer">
            8. Các yếu tố tạo nên thành công cho quy trình 5S
          </p>
        </div>

        <ExperienceItem />

        <JoinNowItem />
      </div>
    </div>
  );
};

export default RightBlogDetails;
