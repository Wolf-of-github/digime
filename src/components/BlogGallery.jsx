import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoRA_QLoRA_Blog_1 from "../assets/LoRA_QLoRA_Blog-1.png";

const BlogGallery = () => {
  const blogs = [
    {
      id: 1,
      title: 'LoRA and QLoRA: Efficient Fine-Tuning',
      date: 'July 7, 2025',
      summary: 'Explore parameter-efficient methods for fine-tuning large models like LoRA and QLoRA.',
      image: LoRA_QLoRA_Blog_1,
      link: '#/blogs/lora-qlora'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="flex-grow px-4 sm:px-8 md:px-16 lg:px-40 py-20">
        <div className="text-3xl font-bold text-gray-100 font-mono text-center mb-10">
          Blog Gallery
        </div>
        {/* Blog tiles can be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white bg-opacity-10 p-4 rounded-xl shadow-md backdrop-blur-md text-white min-h-[400px] flex flex-col"
            >
              <img
                src={blog.image}
                alt={`Blog ${blog.id}`}
                className="rounded-md mb-4 w-full aspect-video object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-300 mb-4">Posted on: {blog.date}</p>
              <p className="mb-4">{blog.summary}</p>
              <a
                href={blog.link}
                className="text-purple-400 hover:underline font-semibold mt-auto"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogGallery;