import React from "react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const getProductDetails = (category: string, productId: string) => {
  // Simulated product data
  return {
    id: productId,
    name: "Modern Sofa",
    price: 999,
    description:
      "A sleek and comfortable sofa perfect for modern living spaces.",
    image: "/images/products/sofa.jpg",
    features: [
      "Stain-resistant fabric",
      "Ergonomic design",
      "Easy to assemble",
    ],
  };
};

const ProductPage = ({
  params,
}: {
  params: { category: string; productId: string };
}) => {
  const product = getProductDetails(params.category, params.productId);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link
          href={`/products/${params.category}`}
          className="text-green-600 hover:underline"
        >
          ← Back to {params.category.replace("-", " ")}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-light text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-gray-600 mb-6">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <h2 className="text-xl font-medium text-gray-800 mb-4">Features:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
