import LeftContent from "./left-content";
import RightContent from "./right-content";

const HomepageWrapper = () => {
  return (
    <div className="mx-auto flex min-h-[2000px] w-full max-w-[1440px] flex-col items-start justify-between gap-8 px-2 md:px-5 lg:flex-row lg:px-10 xl:px-0">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default HomepageWrapper;
