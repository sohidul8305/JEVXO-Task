import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'The Hub', href: '/', active: true },
  { name: 'Solutions', href: '#', hasDropdown: true },
  { name: 'Products', href: '#' },
  { name: 'Success Stories', href: '#' },
  { name: 'Partnership', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 px-4 md:px-8">
      <div 
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl border border-white/10 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl py-2' : 'bg-[#0a0a0a]/60 backdrop-blur-md py-3'
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          
          {/* ── Logo ── */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Custom X Logo Placeholder */}
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[2.5px] stroke-cyan-400">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              JEVXO
            </span>
          </div>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-colors flex items-center gap-1 ${
                  link.active ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
              </a>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-400 to-orange-300 text-black text-[13px] font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-orange-500/20"
            >
              Launch Your Project
            </a>
            
            {/* Lock Icon */}
            <button className="text-blue-500 p-2">
              <Lock size={18} fill="currentColor" fillOpacity={0.2} />
            </button>

            {/* Theme Toggle (Image Style) */}
            <div 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-12 h-6 rounded-full bg-indigo-950 border border-white/10 relative cursor-pointer overflow-hidden"
            >
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white transition-all duration-300 ${isDarkMode ? 'right-1' : 'left-1'}`} />
                {/* Background stars pattern simplified */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium ${link.active ? 'text-blue-500' : 'text-gray-300'}`}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <button className="w-full bg-orange-400 text-black font-bold py-3 rounded-xl">
                Launch Your Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;