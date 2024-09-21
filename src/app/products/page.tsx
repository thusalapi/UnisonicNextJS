import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";

import img1 from "../../assets/images/img3.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img20.png";
import img4 from "../../assets/images/img21.png";

const categories = [
  {
    name: "Living Room",
    description: "Stylish and comfortable furniture for your living space.",
    image: img1,
  },
  {
    name: "Office",
    description:
      "Functional and ergonomic solutions for your work environment.",
    image: img3,
  },
  {
    name: "Pantry Cupboard",
    description: "Efficient storage solutions for your kitchen and pantry.",
    image: img1,
  },
  {
    name: "Children",
    description: "Fun and safe furniture designed for kids of all ages.",
    image: img4,
  },
  {
    name: "Under Staircase Cabinets",
    description: "Clever storage options to maximize space under staircases.",
    image: img2,
  },
  {
    name: "Custom Made",
    description:
      "Bespoke furniture tailored to your specific needs and preferences.",
    image: img3,
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
          <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center mt-44">
            Explore Collection
          </h1>
          {currentCategory && (
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          )}

          <div className="mt-16 mb-24">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 mt-10">
              Our Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.name}
                  name={category.name}
                  description={category.description}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
