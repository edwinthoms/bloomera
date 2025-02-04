import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag, Clock, User, Calendar } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog post data
  const blogPosts = {
    '1': {
      title: 'The Art of Sustainable Fashion',
      date: 'February 4, 2024',
      author: 'Emma Watson',
      readTime: '5 min read',
      mainImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800',
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Sustainable fashion is more than just a trend—it's a movement that's reshaping the industry. 
            As consumers become more conscious of their environmental impact, brands are adapting their 
            practices to meet these new demands.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Why Sustainable Fashion Matters
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            The fashion industry is one of the world's largest polluters, contributing significantly to 
            water pollution, textile waste, and carbon emissions. By choosing sustainable fashion, we can:
          </p>
          <ul className="mb-6 list-disc pl-6 text-lg text-gray-700 dark:text-gray-300">
            <li className="mb-2">Reduce environmental impact</li>
            <li className="mb-2">Support ethical labor practices</li>
            <li className="mb-2">Promote innovative, eco-friendly materials</li>
          </ul>
        </>
      )
    },
    '2': {
      title: 'Summer Fashion Trends 2024',
      date: 'February 3, 2024',
      author: 'Michael Chen',
      readTime: '4 min read',
      mainImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800',
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            As we approach summer 2024, exciting new trends are emerging in the fashion world. From vibrant 
            colors to innovative silhouettes, this season promises to be both bold and comfortable.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Key Trends to Watch
          </h2>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h3 className="mb-2 font-semibold text-[#A47551]">Color Palette</h3>
              <p className="text-gray-700 dark:text-gray-300">Sunset oranges, ocean blues, and earth tones dominate this season.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h3 className="mb-2 font-semibold text-[#A47551]">Fabrics</h3>
              <p className="text-gray-700 dark:text-gray-300">Lightweight linens and recycled materials take center stage.</p>
            </div>
          </div>
        </>
      )
    },
    '3': {
      title: 'Accessorizing with Minimalism',
      date: 'February 2, 2024',
      author: 'Sofia Garcia',
      readTime: '3 min read',
      mainImage: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800',
      content: (
        <>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Minimalist accessories have become increasingly popular, offering a sophisticated way to 
            elevate any outfit without overwhelming it. The key lies in selecting pieces that make a 
            subtle yet impactful statement.
          </p>
          <div className="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Essential Minimalist Accessories
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-[#A47551]">•</span>
                Delicate gold necklaces
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#A47551]">•</span>
                Simple leather watches
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#A47551]">•</span>
                Classic stud earrings
              </li>
            </ul>
          </div>
        </>
      )
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Blog Post Not Found</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="mb-6 text-4xl font-bold text-[#A47551]">{post.title}</h1>
          
          {/* Meta information */}
          <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <div className="mb-8 overflow-hidden rounded-xl">
          <img
            src={post.mainImage}
            alt={post.title}
            className="h-[400px] w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {post.content}
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                alt={post.author}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Written by</p>
                <p className="text-[#A47551]">{post.author}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;