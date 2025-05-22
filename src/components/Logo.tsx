import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small:  { img: 'h-6',  text: 'text-base' },
    medium: { img: 'h-8',  text: 'text-lg'   },
    large:  { img: 'h-10', text: 'text-xl'   },
  };

  const { img, text } = sizeClasses[size];

  return (
    <div className="flex items-center">
      <img
        src="/keesa-logo.png"         // your hex-K file in public/
        alt="Keesa logo"
        className={`${img} w-auto object-contain mr-2`}
      />
      <span className={`font-playfair font-bold text-white ${text}`}>
        Keesa
      </span>
    </div>
  );
};
