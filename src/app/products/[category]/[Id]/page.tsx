import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/constants";

export default function ProductPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-200">
        <Navbar textColor="text-black" />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="mt-36 bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-red-600">
              Product not found
            </h1>
            <p className="mt-4">
              Sorry, we couldn't find a product with ID {params.id}.
            </p>
            <Link
              href="/products/all"
              className="mt-4 inline-block bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Back to All Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Navbar textColor="text-black" />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="mt-36 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-1 text-4xl font-medium leading-tight text-gray-900">
                {product.name}
              </h1>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-4 text-2xl font-bold text-gray-900">
                ${product.price}
              </p>
              <div className="mt-6">
                <Link
                  href={`/products/${product.category}`}
                  className="inline-block bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                >
                  Back to {product.category}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
