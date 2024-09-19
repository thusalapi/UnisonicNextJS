import Image from "next/image";
import img1 from "../assets/images/img3.png"; // Adjust paths as necessary
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img20.png";
import img4 from "../assets/images/img21.png";

// Array of categories
const categories = [
  {
    image: img1,
    title: "Pantry Cupboards",
    description:
      "Organize your kitchen in style with our custom-designed pantries.",
  },
  {
    image: img2,
    title: "Office Furniture",
    description:
      "Create an inspiring and productive workspace with ergonomic desks and comfortable chairs.",
  },
  {
    image: img3,
    title: "Home & Living",
    description:
      "Elevate your living space with stylish and comfortable furniture.",
  },
  {
    image: img4,
    title: "Kids Furniture",
    description:
      "Spark their imagination with playful and durable furniture designed for kids.",
  },
];

const FurnitureCategory = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Our Furniture Categories
        </h1>
        <p className="text-lg text-center mb-12 text-black">
          Discover our wide range of furniture, crafted to meet your every need.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 flex flex-col text-center"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  {category.title}
                </h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureCategory;
