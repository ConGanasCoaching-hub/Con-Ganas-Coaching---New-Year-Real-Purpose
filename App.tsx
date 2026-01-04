
import React, { useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ClientCarousel from './components/ClientCarousel';
import Offer from './components/Offer';
import Scarcity from './components/Scarcity';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
