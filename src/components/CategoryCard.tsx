import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  name: string;
  description: string;
  image: StaticImageData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <Link
      href={`/products/${name.toLowerCase().replace(" ", "-")}`}
      className="block bg-white rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
    >
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          {name}
        </h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
