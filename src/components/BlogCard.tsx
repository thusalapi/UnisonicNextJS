import React from "react";
import Image from "next/image";
import { BlogPost } from "@/constants/blogData";
import img2 from "@/assets/images/img2.png";

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <Image
      src={img2}
      alt={post.title}
      width={600}
      height={192}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{post.author}</span>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
    </div>
  </div>
);

export default BlogCard;
