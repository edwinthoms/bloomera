import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Period Care',
    excerpt: 'Exploring how sustainable period products are changing the game...',
    image: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800',
    date: '2024-02-15',
    category: 'Sustainability'
  },
  {
    id: '2',
    title: 'Understanding Your Cycle',
    excerpt: 'A comprehensive guide to tracking and understanding your menstrual cycle...',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    date: '2024-02-10',
    category: 'Health'
  },
  {
    id: '3',
    title: 'Eco-Friendly Period Products',
    excerpt: 'How switching to reusable period products can help the environment...',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    date: '2024-02-05',
    category: 'Environment'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-24 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=1600"
            alt="Blog Hero"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 to-neutral-50 dark:from-neutral-900/80 dark:to-neutral-900" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#A47551] sm:text-5xl">
              Bloom Era Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Explore our latest articles on period care, sustainability, and women's health.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1 dark:bg-neutral-800"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#A47551]/10 px-3 py-1 text-sm font-medium text-[#A47551]">
                      {post.category}
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#A47551]">
                    <span className="font-medium">Read More</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog