import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import BrandStatement from "@/components/BrandStatement";
import CampaignBanner from "@/components/CampaignBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collection />
      <BrandStatement />
      <CampaignBanner />
      <Footer />
    </main>
  );
}