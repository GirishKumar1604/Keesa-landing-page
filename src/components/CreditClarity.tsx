import React from 'react';
import { CreditCard } from 'lucide-react';

export const CreditClarity: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Background wave animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A63D2" />
                <stop offset="100%" stopColor="#D63384" />
              </linearGradient>
            </defs>
            <path
              d="M0,800 C200,1000 800,600 1000,800 L1000,1000 L0,1000 Z"
              fill="url(#a)"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M0,800 C200,1000 800,600 1000,800 L1000,1000 L0,1000 Z;
                  M0,900 C200,700 800,900 1000,700 L1000,1000 L0,1000 Z;
                  M0,800 C200,1000 800,600 1000,800 L1000,1000 L0,1000 Z
                "
              />
            </path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white text-center mb-12">
            The right card. For the real you.
          </h2>

          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Left: Text Panel */}
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-2xl backdrop-blur-sm">
                <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-inner">
                  <CreditCard size={48} className="text-purple-400 mb-4" />
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Keesa reads your SMS patterns to understand how you actually
                    spend — from dining and travel to shopping or EMIs.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mt-4">
                    Then it recommends the card that fits you — not the
                    flashiest, not the trendiest. The smartest.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Card Stack */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[250px] perspective-1000">
                {/* Background Cards */}
                <div className="absolute top-8 -left-4 w-[400px] h-[220px] bg-gradient-to-br from-[#2d005f]/80 via-[#560e8f]/80 to-[#ff2e63]/80 rounded-xl transform rotate-6 shadow-xl"></div>
                <div className="absolute top-4 -left-2 w-[400px] h-[220px] bg-gradient-to-br from-[#2d005f]/90 via-[#560e8f]/90 to-[#ff2e63]/90 rounded-xl transform rotate-3 shadow-xl"></div>

                {/* Main Card with Shine */}
                <div className="group relative w-[400px] h-[220px] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                  <img
                    src="/credit card.png"
                    alt="HDFC Credit Card"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                  />

                  {/* Shine overlay */}
                  <div className="absolute inset-0 z-10 overflow-hidden">
                    <div className="shine" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
