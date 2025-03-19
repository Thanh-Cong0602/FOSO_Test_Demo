import dynamic from "next/dynamic";

const HomepageComponent = dynamic(() => import("@/components/homepage/page"), { ssr: false });
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <HomepageComponent />
    </div>
  );
}
