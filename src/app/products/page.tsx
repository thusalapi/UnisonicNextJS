import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import img1 from "../../assets/images/img3.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img20.png";
import img4 from "../../assets/images/img21.png";

const categories = [
  {
    name: "All",
    description: "Discover all options to fulfil your dream furniture.",
  },
  {
    name: "Living Room",
    description: "Stylish and comfortable furniture for your living space.",
  },
  {
    name: "Office",
    description:
      "Functional and ergonomic solutions for your work environment.",
  },
  {
    name: "Children",
    description: "Fun and safe furniture designed for kids of all ages.",
  },
  {
    name: "Pantry Cupboard",
    description: "Efficient storage solutions for your kitchen and pantry.",
  },
  {
    name: "Under Stairbase Cabinets",
    description: "Clever storage options to maximize space under staircases.",
  },
  {
    name: "Custom Made",
    description:
      "Bespoke furniture tailored to your specific needs and preferences.",
  },
];

const getProductsByCategory = (category: string) => {
  return [
    {
      id: 1,
      name: "Modern Sofa",
      price: 999,
      image: img1,
    },
    {
      id: 2,
      name: "Leather Armchair",
      price: 599,
      image: img2,
    },
    {
      id: 3,
      name: "Coffee Table",
      price: 299,
      image: img3,
    },
    {
      id: 4,
      name: "Bookshelf",
      price: 399,
      image: img4,
    },
  ];
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const products = getProductsByCategory(params.category);
  const currentCategory = categories.find(
    (cat) => cat.name.toLowerCase() === params.category
  );

  if (!products || products.length === 0) {
    return <div>No products found for this category.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Navbar textColor="text-black" />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-light text-gray-800 mb-4 text-center capitalize mt-36">
            Explore Collection
          </h1>
          {currentCategory && (
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          )}

          <div className="mt-16 mb-24">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">
              Our Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link
                  href={`/products/${category.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  key={category.name}
                  className="block p-14 text-lg bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <Link
                href={`/products/${params.category}/${product.id}`}
                key={product.id}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-lg">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
