import { REACTION_CONFIGS } from "@/constants/reaction-config";
import ReactionIcon from "./reaction-icon";

const ReactionGroup = () => {
  return (
    <div className="grid grid-cols-3 grid-flow-row lg:grid-cols-6 gap-8 items-center justify-center">
      {REACTION_CONFIGS.map((item, index) => (
        <ReactionIcon key={index} icon={item.icon} title={item.title} total={item.total} />
      ))}
    </div>
  );
};

export default ReactionGroup;
