"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/constants/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-950 to-black text-white flex items-center justify-center">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 text-black">
      <Navbar textColor="text-black" />
      <div className="container w-2/4 mx-auto px-4 py-12 mb-12">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8 mt-44"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-400">{post.author}</span>
          <span className="text-gray-400">{post.date}</span>
        </div>
        <div className="prose prose-lg prose-invert max-w-none mb-8">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/blogs"
          className="mt-4 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold transition duration-300"
        >
          Go Back to Blogs
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
