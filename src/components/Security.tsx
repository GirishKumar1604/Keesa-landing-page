import React from 'react';
import { Lock, Shield, AlertCircle } from 'lucide-react';

export const Security: React.FC = () => {
  const securityPoints = [
    {
      icon: <Lock className="text-purple-400" size={24} />,
      text: 'We never read OTPs or passwords — only financial SMS.',
    },
    {
      icon: <Shield className="text-purple-400" size={24} />,
      text: 'Your data stays on-device. No cloud sync unless you opt in.',
    },
    {
      icon: <AlertCircle className="text-purple-400" size={24} />,
      text: 'No ads. No spam. Just encrypted, intelligent insights.',
    },
  ];

  return (
    <section className="py-24 relative" id="security">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full opacity-10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-12">
            Trust isn’t optional.
            <br className="hidden md:block" />
            It’s built-in.
          </h2>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-[1px] rounded-2xl">
            <div className="bg-black bg-opacity-60 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {securityPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-purple-900/20 rounded-2xl p-6"
                  >
                    <div className="mb-4 p-3 rounded-full bg-purple-700/20 backdrop-blur-sm border border-purple-500/20">
                      {point.icon}
                    </div>
                    <p className="text-gray-300">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
