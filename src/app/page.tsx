import AboutSection from "@/components/AboutSection";
import FurnitureCategory from "@/components/FurnitureCategory";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  { id: 1, name: "Sofa", image: "/images/sofa.jpg", link: "/products/sofa" },
  {
    id: 2,
    name: "Dining Table",
    image: "/images/dining-table.jpg",
    link: "/products/dining-table",
  },
  { id: 3, name: "Bed", image: "/images/bed.jpg", link: "/products/bed" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FurnitureCategory />
    </>
  );
}
