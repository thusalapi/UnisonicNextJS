import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, getProductsByCategory } from "@/constants";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const products = getProductsByCategory(params.category);

  const currentCategory = categories.find(
    (cat) => cat.slug === params.category
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
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
                  <Link href={`/products/${product.category}/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
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
