import ExperienceBg from "@/public/images/ExperienceBg.png";
import ExperienceImage1 from "@/public/images/ExperienceImage1.png";
import MaskGroup from "@/public/images/MaskGroup.png";
import MRPBeta from "@/public/images/MRPBeta.png";
import Image from "next/image";
import ButtonComponent from "./fields/button-custom";

const ExperienceItem = () => {
  return (
    <div
      className="grid h-fit w-[366px] items-start gap-10 rounded-6 bg-cover bg-center py-7"
      style={{ backgroundImage: `url(${ExperienceBg.src})` }}
    >
      <div className="relative mt-7 h-[250px]">
        <Image src={ExperienceImage1} alt="ExperienceImage" style={{ position: "absolute", right: "0px" }} />
      </div>

      <div className="relative h-[136px] px-3 md:px-6">
        <Image src={MaskGroup} alt="MaskGroup" style={{ position: "absolute" }} />

        <Image src={MRPBeta} alt="MRPBeta" style={{ position: "absolute" }} />
      </div>

      <div className="mx-auto mb-7">
        <ButtonComponent text="Trải nghiệm ngay" width="318px" />
      </div>
    </div>
  );
};

export default ExperienceItem;
