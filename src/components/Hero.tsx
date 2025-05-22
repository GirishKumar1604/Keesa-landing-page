import React from 'react';


export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-24 pb-16 px-4">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-600 rounded-full opacity-20 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 space-y-6 animate-fadeIn">
        {/* Headline */}
        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
          Understand your money. <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Effortlessly.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Every transaction tells a story. We turn yours into insights, protection, and smarter financial moves.
        </p>

        {/* CTA Button */}
        <button
          className="bg-white text-black border border-white py-3 px-8 rounded-full
          hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 text-lg font-semibold
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-md"
        >
          Join the waitlist
        </button>
      </div>

      {/* Scroll cue */}
      

    </section>
  );
};
