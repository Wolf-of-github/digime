import React from 'react';

const blogs = [
  {
    title: "The Rise of Generative AI",
    excerpt: "Explore how generative AI is reshaping industries through creativity and automation.",
    image: "https://source.unsplash.com/400x250/?technology,ai",
    link: "/blog/ai"
  },
  {
    title: "Mastering MLOps",
    excerpt: "A guide to streamlining ML workflows, from training to deployment with modern tools.",
    image: "https://source.unsplash.com/400x250/?devops,cloud",
    link: "/blog/mlops"
  },
  {
    title: "Building Scalable Web Apps",
    excerpt: "Architecting web apps with scalability and performance in mind using modern stacks.",
    image: "https://source.unsplash.com/400x250/?coding,web",
    link: "/blog/webapps"
  },
];

const BlogGallery = () => {
  return (
    <div className="text-white">
      <div className="text-3xl font-bold text-gray-100 font-mono text-center mb-12">
        Blog Gallery
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{blog.excerpt}</p>
              <a href={blog.link} className="text-purple-400 hover:text-purple-200 text-sm font-semibold underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGallery;