import Pagination from "@/components/pagination";
import { DATA_LIMIT } from "@/constants/number";
import Header from "./header";
import HomepageWrapper from "./homepage-wrapper";

const HomepageComponent = () => {
  return (
    <div className="mb-10 grid gap-[96px]">
      <Header />
      <HomepageWrapper />
      <Pagination totalItems={400} limit={DATA_LIMIT} />
    </div>
  );
};

export default HomepageComponent;
