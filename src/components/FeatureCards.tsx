import React from 'react';
import { MessageSquare, User, AlertTriangle, CreditCard } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, text, icon, gradientFrom, gradientTo }) => {
  return (
    <div 
      className="rounded-2xl p-[1px] bg-gradient-to-br transition-transform hover:scale-[1.02] duration-300"
      style={{ backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}
    >
      <div className="bg-black rounded-2xl p-6 h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "Turns Your SMS into Smart Insights",
      text: "Effortlessly extracts amount, merchant, bank, and transaction type from your financial messages.",
      icon: <MessageSquare size={32} className="text-purple-400" />,
      gradientFrom: "#8A63D2",
      gradientTo: "#8A63D280"
    },
    {
      title: "Builds Your Financial Identity",
      text: "Analyzes your habits to define your spending style — from Balanced Spender to Foodie to EMI-Heavy.",
      icon: <User size={32} className="text-pink-400" />,
      gradientFrom: "#D63384",
      gradientTo: "#D6338480"
    },
    {
      title: "Detects fraud in real time",
      text: "Instantly flags suspicious activity or risky SMS — before they become problems.",
      icon: <AlertTriangle size={32} className="text-yellow-400" />,
      gradientFrom: "#CA8A04",
      gradientTo: "#CA8A0480"
    },
    {
      title: "Recommends What Fits You",
      text: "Not ads. Not noise. Just credit cards and loans that truly match your financial behavior.",
      icon: <CreditCard size={32} className="text-blue-400" />,
      gradientFrom: "#3B82F6",
      gradientTo: "#3B82F680"
    }
  ];

  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white text-center mb-16">
          Upgrade your financial life. <br/>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Bit by bit.
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};