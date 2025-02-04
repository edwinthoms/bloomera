import React from 'react';
import { Product } from '../types';
import { Button } from './ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

// Changed to default export
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative h-[450px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800/90">
      {/* Image Container */}
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-[#A47551] px-3 py-1 text-xs font-medium text-white">
            New
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="flex h-[200px] flex-col p-5">
        {/* Product Info */}
        <div className="flex-grow">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
        </div>

        {/* Price and Action */}
        <div className="mt-4 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="block text-sm text-gray-500 line-through dark:text-gray-400">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            variant="primary"
            size="sm"
            className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ShoppingCart size={16} className="transition-transform group-hover:animate-bounce" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

// Add default export
export default ProductCard;

// Also add named export if needed
export { ProductCard };