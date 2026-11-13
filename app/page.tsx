import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import TrustStats from "@/components/TrustStats";
import Gallery from "@/components/Gallery";
import HomeServices from "@/components/HomeServices";

const page = () => {
  return (
    <main>
      <Hero />
      <TrustStats />
      <HomeServices />
      <Gallery />
      <FAQ />
    </main>
  );
};

export default page;
