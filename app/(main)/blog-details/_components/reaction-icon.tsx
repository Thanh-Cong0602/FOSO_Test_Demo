import Image, { StaticImageData } from "next/image";

interface ReactionIconProps {
  icon: StaticImageData;
  total: number;
  title: string;
}

const ReactionIcon = ({ icon, total, title }: Readonly<ReactionIconProps>) => {
  return (
    <div className="grid p-1 gap-1 items-center justify-center w-[90px]">
      <Image src={icon} alt={title} />
      <p
        className={`text-base font-bold leading-1.5 text-center ${title === "Hữu ích" ? "text-turquoise-100" : "text-gray-300"}`}
      >
        {total}
      </p>

      <p
        className={`text-sm font-medium leading-1.5 text-center ${title === "Hữu ích" ? "text-turquoise-100" : "text-gray-300"}`}
      >
        {title}
      </p>
    </div>
  );
};

export default ReactionIcon;
