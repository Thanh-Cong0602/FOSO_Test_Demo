import Banner2 from "@/assets/images/Banner2.png";
import ExperienceBg from "@/assets/images/ExperienceBg.png";
import Image from "next/image";
import ButtonComponent from "./fields/button-custom";

const JoinNowItem = () => {
  return (
    <div
      className="grid h-fit w-[366px] items-start gap-10 rounded-6 bg-cover bg-center py-7"
      style={{ backgroundImage: `url(${ExperienceBg.src})` }}
    >
      <div className="mt-7">
        <Image src={Banner2} alt="ExperienceImage" />
      </div>

      <p className="text-white mx-auto max-w-[318px] text-xl font-bold leading-1.5">
        Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!
      </p>

      <div className="mx-auto mb-7">
        <ButtonComponent text="Tham gia ngay" width="318px" />
      </div>
    </div>
  );
};

export default JoinNowItem;
