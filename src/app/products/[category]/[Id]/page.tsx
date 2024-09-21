import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/constants";

export default function ProductPage({
  params,
}: {
  params: { category: string; id?: string; Id?: string };
}) {
  const productId = params.id || params.Id;
  const product = productId ? getProductById(productId) : null;

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Navbar textColor="text-black" />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="mt-36 bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-red-600">
              Product not found
            </h1>
            <p className="mt-4">
              Sorry, we couldn&apos;t find the product you&apos;re looking for.
            </p>
            <Link
              href="/products/all"
              className="mt-6 inline-block bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
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
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Navbar textColor="text-black" />
      <main className="flex-grow container w-3/5 mx-auto px-4 py-16 mb-10">
        <h1 className="text-6xl font-bold text-gray-800 p-8 mt-32 ">
          {" "}
          {product.name}
        </h1>
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Large Product Image */}
            <div className="md:w-2/3">
              <div className="relative h-96 md:h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="md:w-1/3 p-8 ml-8">
              <div className="uppercase tracking-wide text-sm text-green-700 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-4xl font-bold text-green-800">
                ${product.price}
              </p>
              <div className="mt-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Description
                </h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="mt-8 space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Features
                </h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>High-quality materials</li>
                  <li>Ergonomic design</li>
                  <li>Easy to clean</li>
                  <li>Durable construction</li>
                </ul>
              </div>
              <div className="mt-10 space-y-4">
                <Link
                  href={`/contact`}
                  className="block text-center w-full bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href={`/products/${product.category}`}
                  className="block text-center w-full border border-green-800 text-green-800 px-6 py-3 rounded-md hover:bg-green-50 transition-colors duration-300"
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
