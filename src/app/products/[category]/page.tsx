import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "@/assets/images/img3.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img20.png";
import img4 from "@/assets/images/img21.png";

const categories = [
  { name: "Living Room", slug: "living-room" },
  { name: "Office", slug: "office" },
  { name: "Children", slug: "children" },
  { name: "Pantry Cupboard", slug: "pantry-cupboard" },
  { name: "Under Stairbase Cabinets", slug: "under-stairbase-cabinets" },
  { name: "Custom Made", slug: "custom-made" },
];

const getProductsByCategory = (category: string) => {
  // This is a mock function. In a real application, you would fetch this data from an API or database
  return [
    { id: 1, name: "Modern Sofa", price: 999, image: img1 },
    { id: 2, name: "Leather Armchair", price: 599, image: img2 },
    { id: 3, name: "Coffee Table", price: 299, image: img3 },
    { id: 4, name: "Bookshelf", price: 399, image: img4 },
  ];
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const products = getProductsByCategory(params.category);
  const currentCategory = categories.find(
    (cat) => cat.slug === params.category
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Navbar textColor="text-black" />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-light text-gray-800 mb-8 text-center capitalize mt-36">
            {currentCategory?.name || params.category.replace("-", " ")}{" "}
            Collection
          </h1>

          {/* Category Navigation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Categories
            </h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Link
                  href={`/products/${category.slug}`}
                  key={category.slug}
                  className={`px-4 py-2 rounded-full ${
                    category.slug === params.category
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors duration-300`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
