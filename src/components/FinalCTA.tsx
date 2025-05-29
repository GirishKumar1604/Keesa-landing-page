import React from 'react';

interface FinalCTAProps {
  onJoinClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onJoinClick }) => {
  return (
    <section className="py-24 relative">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-black opacity-70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-12">
            Built for the quietly informed.
          </h2>

          <button
            onClick={onJoinClick}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border border-white rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0 origin-center" />
            <span className="relative z-10 transition-colors duration-300">
              Join Keesa
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
