import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog Post: {id}</h1>
        <p className="text-lg leading-relaxed">
          This is a placeholder page for blog post <strong>{id}</strong>. You can render detailed content here based on routing or API data.
        </p>
      </div>
    </div>
  );
};

export default Blog;
