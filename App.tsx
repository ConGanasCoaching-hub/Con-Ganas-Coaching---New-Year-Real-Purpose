
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ClientCarousel from './components/ClientCarousel';
import Offer from './components/Offer';
import Scarcity from './components/Scarcity';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const goHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  if (currentPage === 'privacy') {
    return <Privacy onBack={goHome} />;
  }

  if (currentPage === 'terms') {
    return <Terms onBack={goHome} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero onApply={toggleModal} />
      <Problem />
      <Solution />
      <ClientCarousel />
      <Offer />
      <Scarcity onApply={toggleModal} />
      <Footer />
      
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
