import HomepageComponent from "@/components/homepage/page";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <HomepageComponent />
    </div>
  );
}
