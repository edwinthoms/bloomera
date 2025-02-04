import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { useProducts } from '../hooks/useProducts';
import { CartItem } from '../types';

interface ProductsProps {
  onAddToCart: (product: CartItem) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-[#A47551]">Our Products</h1>
      <ProductGrid products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Products;