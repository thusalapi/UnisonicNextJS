import img1 from "@/assets/images/img3.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img20.png";
import img4 from "@/assets/images/img21.png";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "Living Room", slug: "living-room" },
  { name: "Office", slug: "office" },
  { name: "Children", slug: "children" },
  { name: "Pantry Cupboard", slug: "pantry-cupboard" },
  { name: "Under Stairbase Cabinets", slug: "under-stairbase-cabinets" },
  { name: "Custom Made", slug: "custom-made" },
];

export const products = [
  {
    id: "1",
    name: "Modern Sofa",
    price: 999,
    image: img1,
    category: "living-room",
    description:
      "A comfortable and stylish modern sofa perfect for your living room.",
  },
  {
    id: "2",
    name: "Leather Armchair",
    price: 599,
    image: img2,
    category: "living-room",
    description:
      "A luxurious leather armchair that adds elegance to any space.",
  },
  {
    id: "3",
    name: "Coffee Table",
    price: 299,
    image: img3,
    category: "office",
    description: "A sleek coffee table ideal for your office or living area.",
  },
  {
    id: "4",
    name: "Bookshelf",
    price: 399,
    image: img4,
    category: "office",
    description:
      "A spacious bookshelf to organize your books and display items.",
  },
];

export const getProductsByCategory = (category: string) => {
  if (category === "all") {
    return products;
  }
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id.toLowerCase() === id.toLowerCase());
};
