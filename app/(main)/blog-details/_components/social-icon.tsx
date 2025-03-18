import Image from "next/image";

interface SocialIconProps {
  href: string;
  icon: string;
}
const SocialIcon = ({ href, icon }: Readonly<SocialIconProps>) => {
  return (
    <a
      href={href}
      className="flex size-12 cursor-pointer items-center justify-center rounded-2xl border border-solid border-turquoise-300 hover:opacity-50"
    >
      <Image src={icon} alt="Social Icon" />
    </a>
  );
};

export default SocialIcon;
