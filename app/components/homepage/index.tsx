"use client";

import Pagination from "@/components/pagination";
import { DATA_LIMIT } from "@/constants/number";
import Header from "./header";
import HomepageWrapper from "./homepage-wrapper";

const HomepageComponent = () => {
  return (
    <div className="mb-5 grid md:mb-10 md:gap-[96px]">
      <Header />
      <HomepageWrapper />
      <Pagination totalItems={400} limit={DATA_LIMIT} />
    </div>
  );
};

export default HomepageComponent;
