import React from 'react';
import { Heart, Users, Leaf, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-24 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1600"
            alt="About Hero"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 to-neutral-50 dark:from-neutral-900/80 dark:to-neutral-900" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#A47551] sm:text-5xl">
              Our Story
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Founded with a vision to revolutionize period care, Bloom Era is committed to 
              providing comfortable, sustainable, and stylish solutions for menstrual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#A47551]">Our Mission</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                At Bloom Era, we believe that period care should be comfortable, 
                sustainable, and accessible to everyone. Our mission is to empower 
                individuals by providing innovative menstrual products that are both 
                eco-friendly and effective.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Heart,
                  title: 'Comfort First',
                  description: 'Designed for maximum comfort during your period'
                },
                {
                  icon: Users,
                  title: 'Inclusive Design',
                  description: 'Products for every body type and flow'
                },
                {
                  icon: Leaf,
                  title: 'Eco-Friendly',
                  description: 'Sustainable materials and production methods'
                },
                {
                  icon: Shield,
                  title: 'Quality Assured',
                  description: 'Rigorous testing for reliable protection'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-800"
                >
                  <item.icon className="mb-4 h-8 w-8 text-[#A47551]" />
                  <h3 className="mb-2 font-semibold text-[#A47551]">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#A47551]/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#A47551]">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Sustainability',
                description: 'Committed to reducing environmental impact through eco-friendly materials and practices.'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our products through research and technology.'
              },
              {
                title: 'Empowerment',
                description: 'Supporting individuals to feel confident and comfortable during their period.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg dark:bg-neutral-800"
              >
                <h3 className="mb-4 text-xl font-semibold text-[#A47551]">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About