import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import BrandStatement from "@/components/BrandStatement";
import CampaignBanner from "@/components/CampaignBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CartDrawer />
      <Hero />
      <Collection />
      <BrandStatement />
      <CampaignBanner />
      <Footer />
    </main>
  );
}