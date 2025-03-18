import GreenHeart from "@/public/images/reactions/GreenHeart.png";
import ThumbsUp from "@/public/images/reactions/ThumbsUp.png";
import StartStruck from "@/public/images/reactions/StarStruck.png";
import HushedFace from "@/public/images/reactions/HushedFace.png";
import YawningFace from "@/public/images/reactions/YawningFace.png";
import PoutingFace from "@/public/images/reactions/PoutingFace.png";

export const REACTION_CONFIGS = [
  {
    title: "Hữu ích",
    total: 1,
    icon: ThumbsUp,
  },

  {
    title: "Yêu thích",
    total: 2,
    icon: GreenHeart,
  },

  {
    title: "Thú vị",
    total: 0,
    icon: StartStruck,
  },

  {
    title: "Bất ngờ",
    total: 1,
    icon: HushedFace,
  },

  {
    title: "Nhàm chán",
    total: 0,
    icon: YawningFace,
  },

  {
    title: "Tức giận",
    total: 0,
    icon: PoutingFace,
  },
];
