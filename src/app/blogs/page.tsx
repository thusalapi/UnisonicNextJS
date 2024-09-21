import React from "react";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/constants/blogData";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FurnitureBlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-black">
      <Navbar textColor="text-black" />
      <div className="container mx-auto px-4 py-12 mb-36">
        <h1 className="text-5xl font-bold text-center mt-36 mb-12">
          Our Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FurnitureBlogPage;
