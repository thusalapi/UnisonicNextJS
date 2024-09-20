import React from "react";
import Link from "next/link";
import Image from "next/image";

import img1 from "../../assets/images/img3.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img20.png";
import img4 from "../../assets/images/img21.png";

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

  if (!products || products.length === 0) {
    return <div>No products found for this category.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-light text-gray-800 mb-8 text-center capitalize">
        {params.category?.replace("-", " ") ?? "Default"} Collection{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${params.category}/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
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
