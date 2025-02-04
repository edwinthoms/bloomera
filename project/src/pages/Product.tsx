import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { CartItem } from '../types';
import { Button } from '../components/ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  onAddToCart: (product: CartItem) => void;
}

const Product: React.FC<ProductProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const product = products.find(p => p.id === id);
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-[#A47551]">{product.name}</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-[#A47551]">
            ${product.price}
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;