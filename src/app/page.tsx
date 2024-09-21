import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import FurnitureCategory from "@/components/FurnitureCategory";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import ServicesSection from "@/components/ServicesSection";
import WhySectionUnisonic from "@/components/WhySectionUnisonic";

// const featuredProducts = [
//   { id: 1, name: "Sofa", image: "/images/sofa.jpg", link: "/products/sofa" },
//   {
//     id: 2,
//     name: "Dining Table",
//     image: "/images/dining-table.jpg",
//     link: "/products/dining-table",
//   },
//   { id: 3, name: "Bed", image: "/images/bed.jpg", link: "/products/bed" },
// ];

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FurnitureCategory />
      <WhySectionUnisonic />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}
