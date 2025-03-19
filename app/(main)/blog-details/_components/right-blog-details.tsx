import ExperienceItem from "@/components/experience-item";
import JoinNowItem from "@/components/join-now-item";
import CaretDownIcon from "@/assets/CaretDown.svg";
import CaretUpIcon from "@/assets/CaretUp.svg";
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
    <div className="max-w-[492px] flex-1">
      <div className="grid gap-6">
        <div className="flex cursor-pointer items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
          <p className="text-xl font-extrabold leading-2 text-black-500 md:text-2xl">Nội dung bài viết</p>
          <Image
            src={isOpen ? CaretUpIcon : CaretDownIcon}
            alt="CaretUpIcon"
            className="size-6 text-turquoise-300"
          />
        </div>

        <div
          className={`grid gap-[6px] text-sm font-medium leading-2 text-gray-300 transition-all duration-300 ease-in-out md:text-lg ${isOpen ? "block" : "hidden"}`}
        >
          <p
            onClick={() => scrollToSection(sections.s1)}
            className="cursor-pointer font-bold text-turquoise-300 hover:underline"
          >
            1. Quy trình 5S là gì?
          </p>
          <p onClick={() => scrollToSection(sections.s2)} className="cursor-pointer hover:underline">
            2. Lợi ích quy trình 5S đem lại
          </p>
          <p onClick={() => scrollToSection(sections.s3)} className="cursor-pointer hover:underline">
            3. Tại sao doanh nghiệp nên áp dụng quy trình 5S
          </p>
          <div className="pl-2">
            <p onClick={() => scrollToSection(sections.s31)} className="cursor-pointer hover:underline">
              3.1 Cải thiện rõ nét môi trường làm việc
            </p>
            <p onClick={() => scrollToSection(sections.s32)} className="cursor-pointer hover:underline">
              3.2 Tiết kiệm thời gian đáng kể
            </p>
            <p onClick={() => scrollToSection(sections.s33)} className="cursor-pointer hover:underline">
              3.3 Tăng năng suất làm việc
            </p>
            <p onClick={() => scrollToSection(sections.s34)} className="cursor-pointer hover:underline">
              3.4 Tiết kiệm chi phí
            </p>
            <p onClick={() => scrollToSection(sections.s35)} className="cursor-pointer hover:underline">
              3.5 Tăng chất lượng sản phẩm
            </p>
          </div>

          <p onClick={() => scrollToSection(sections.s4)} className="cursor-pointer hover:underline">
            4. Quy trình 5S gồm các bước:
          </p>
          <div className="pl-2">
            <p onClick={() => scrollToSection(sections.s41)} className="cursor-pointer hover:underline">
              4.1 Seiri (Ngăn nắp)
            </p>
            <p onClick={() => scrollToSection(sections.s42)} className="cursor-pointer hover:underline">
              4.2 Seiton (Sắp xếp)
            </p>
            <p onClick={() => scrollToSection(sections.s43)} className="cursor-pointer hover:underline">
              4.3 Seiso (Vệ sinh)
            </p>
            <p onClick={() => scrollToSection(sections.s44)} className="cursor-pointer hover:underline">
              4.4 Seiketsu (Tiêu chuẩn hóa)
            </p>
            <p onClick={() => scrollToSection(sections.s45)} className="cursor-pointer hover:underline">
              4.5 Shitsuke (Kỷ luật)
            </p>
          </div>

          <p onClick={() => scrollToSection(sections.s5)} className="cursor-pointer hover:underline">
            5. Quy trình được thực hiện như sau:
          </p>
          <div className="pl-2">
            <p onClick={() => scrollToSection(sections.s51)} className="cursor-pointer hover:underline">
              5.1 Giai đoạn chuẩn bị
            </p>
            <p onClick={() => scrollToSection(sections.s52)} className="cursor-pointer hover:underline">
              5.2 Triển khai rộng rãi
            </p>
            <p onClick={() => scrollToSection(sections.s53)} className="cursor-pointer hover:underline">
              5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
            </p>
            <p onClick={() => scrollToSection(sections.s54)} className="cursor-pointer hover:underline">
              5.4 Sàng lọc, sắp xếp và đánh giá
            </p>
            <p onClick={() => scrollToSection(sections.s55)} className="cursor-pointer hover:underline">
              5.5 Đánh giá
            </p>
          </div>
          <p onClick={() => scrollToSection(sections.s6)} className="cursor-pointer hover:underline">
            6. Quy trình 5S có giống với Kaizen?
          </p>
          <p onClick={() => scrollToSection(sections.s7)} className="cursor-pointer hover:underline">
            7. Đối tượng nào nên áp dụng 5S?
          </p>
          <p onClick={() => scrollToSection(sections.s8)} className="cursor-pointer hover:underline">
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
