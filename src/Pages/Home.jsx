import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import GrowthEngine from '../Components/GrowthEngine/GrowthEngine';
import ROICalculator from '../Components/ROICalculator/ROICalculator';
import Showcase from '../Components/Showcase/Showcase';
import EduSection from '../Components/EduSection/EduSection';
import Features from '../Components/Features/Features';
import Pricing from '../Components/Pricing/Pricing';
import CTA from '../Components/CTA/CTA';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <GrowthEngine />
        <ROICalculator />
        <Showcase />
        <EduSection />
        <Features />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
