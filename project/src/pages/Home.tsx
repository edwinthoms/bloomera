import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Leaf, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CartItem } from '../types';

const backgroundImages = [
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1600",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600"
];

interface HomeProps {
  onAddToCart: (product: CartItem) => void;
}

const Home: React.FC<HomeProps> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#A47551]/30 to-neutral-900/80" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-screen items-center justify-center text-center">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Revolutionizing Period Care with Comfort & Style
              </h1>
              <p className="mb-8 text-lg text-neutral-200 sm:text-xl">
                Experience leak-proof protection with our innovative period panties. 
                Sustainable, comfortable, and designed for every body.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/products')}
                  className="w-full rounded-full bg-[#A47551] sm:w-auto"
                >
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/about')}
                  className="w-full rounded-full border-white text-white hover:bg-white hover:text-[#A47551] sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#A47551] sm:text-4xl">
              Why Choose Bloom Era?
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Our period panties are designed with your comfort and confidence in mind.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Leak-Proof Protection',
                description: 'Multiple layers of protection for worry-free wear'
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly',
                description: 'Sustainable alternative to disposable period products'
              },
              {
                icon: Heart,
                title: 'Ultimate Comfort',
                description: 'Soft, breathable fabric for all-day comfort'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-1 dark:bg-neutral-800"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A47551]/10">
                  <feature.icon className="h-6 w-6 text-[#A47551]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#A47551]">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home