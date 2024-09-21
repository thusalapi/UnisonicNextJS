import React from "react";
import { BlogPost } from "@/constants/blogData";

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <img
      src={post.imageUrl}
      alt={post.title}
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
