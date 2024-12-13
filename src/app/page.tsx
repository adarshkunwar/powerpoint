import Layout from "@/components/HOC/layout/layout";
import Homepage from "@/components/home-page/homepage";
import Navbar from "@/components/shared-components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">
        <Layout />
      </h1>
    </div>
  );
}
