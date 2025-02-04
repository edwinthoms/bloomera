import React from 'react';
import { Button } from './ui/Button';
import { Flower } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center">
            <Flower className="mr-3 h-12 w-12 text-rose-500 sm:h-16 sm:w-16" />
            <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Bloom Era
            </h1>
          </div>
          <p className="mb-8 text-lg text-white drop-shadow-lg sm:text-xl md:text-2xl lg:text-3xl">
            Summer Collection 2024
          </p>
          <Button
            variant="primary"
            size="lg"
            className="rounded-full bg-rose-500 px-12 text-white transition-transform hover:scale-105 hover:bg-rose-600"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white dark:from-gray-900" />
    </div>
  );
};