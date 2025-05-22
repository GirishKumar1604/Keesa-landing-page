import React from 'react';
import { Quote } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          {/* Headline */}
          <h2 className="uppercase text-sm font-medium text-gray-400 tracking-widest mb-8 text-center">
            Built for the quietly informed.
          </h2>

          {/* Left-border quote block */}
          <div className="relative md:pl-12 border-l-4 border-purple-700 border-animated-left">
            {/* Optional quote icon */}
            <Quote
              className="absolute -left-8 top-1 text-purple-500 opacity-50 hidden md:block"
              size={24}
            />

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
              Your inbox already knows how you spend — Keesa simply listens.
            </p>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
              No bank login. No account linking. Just a private assistant that
              turns SMS into savings, safety, and smarter moves.
            </p>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              Built for those who want clarity. Not clutter.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-8 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 blur-[60px]" />
    </section>
  );
};
