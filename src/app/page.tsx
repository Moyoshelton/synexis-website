import CompanyIntro from "@/components/home/CompanyIntro";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import PartnershipCTA from "@/components/home/PartnershipCTA";
import Services from "@/components/home/Services";
import WhySynexis from "@/components/home/WhySynexis";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyIntro />
        <Services />
        <FeaturedProducts />
        <WhySynexis />
        <PartnershipCTA />
      </main>
      <Footer />
    </>
  );
}
