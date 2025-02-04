import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products as localProducts } from '../data/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API delay for realistic loading state
    const timer = setTimeout(() => {
      try {
        setProducts(localProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { products, loading, error };
};