import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { AppShowcase } from './components/AppShowcase';
import { CreditClarity } from './components/CreditClarity';
import { FeatureCards } from './components/FeatureCards';
import { Security } from './components/Security';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import WaitlistForm from './components/WaitlistForm'; // ✅ Import the modal

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = 'Keesa | Understand your money. Effortlessly.';

    // Add font styles
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
    ];

    fontLinks.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });

    return () => {
      // Clean up font links when component unmounts
      const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      links.forEach((link) => {
        document.head.removeChild(link);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <Header />
      <Hero onJoinClick={() => setShowForm(true)} /> {/* ✅ Pass prop */}
      <Mission />
      <AppShowcase />
      <CreditClarity />
      <FeatureCards />
      <Security />
      <FinalCTA onJoinClick={() => setShowForm(true)} /> {/* ✅ Pass prop */}
      <FAQ />
      <Footer />

      {/* ✅ Mount the form modal */}
      <WaitlistForm visible={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
}

export default App;
