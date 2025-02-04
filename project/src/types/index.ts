export interface Product {
  oldPrice: any;
  isNew: any;
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}