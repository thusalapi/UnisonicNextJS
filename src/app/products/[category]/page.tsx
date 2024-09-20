import React from "react";
import Link from "next/link";
import Image from "next/image";

// This would typically come from an API or database
const getProductsByCategory = (category: string) => {
  // Simulated product data
  return [
    {
      id: 1,
      name: "Modern Sofa",
      price: 999,
      image: "/placeholder.jpg", // Changed to a placeholder image
    },
    {
      id: 2,
      name: "Leather Armchair",
      price: 599,
      image: "/placeholder.jpg", // Changed to a placeholder image
    },
    // Add more products
  ];
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const products = getProductsByCategory(params.category);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-light text-gray-800 mb-8 text-center capitalize">
        {params.category.replace("-", " ")} Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${params.category}/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={225}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
