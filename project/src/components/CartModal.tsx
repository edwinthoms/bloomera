import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { Button } from './ui/Button';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div className="relative mx-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="sticky top-0 z-10 bg-white px-6 py-4 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold dark:text-white">Your Cart</h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-12">
            <ShoppingBag size={64} className="mb-4 text-gray-300 dark:text-gray-600" />
            <p className="text-center text-gray-500 dark:text-gray-400">Your cart is empty</p>
            <Button
              variant="primary"
              size="lg"
              onClick={onClose}
              className="mt-6 rounded-full"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="max-h-[60vh] space-y-4 overflow-auto px-6 py-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border p-4 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold dark:text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Minus size={16} className="text-gray-500 dark:text-gray-400" />
                      </button>
                      <span className="min-w-[2rem] text-center font-medium dark:text-white">
                        {item.quantity}
                      </span>
                      <button className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Plus size={16} className="text-gray-500 dark:text-gray-400" />
                      </button>
                      <button className="ml-auto rounded-full p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sticky bottom-0 bg-white px-6 py-4 dark:bg-gray-800">
              <div className="mb-4 flex justify-between text-lg font-semibold dark:text-white">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-full"
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};