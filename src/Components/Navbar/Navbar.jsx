import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'SEO',       href: '#' },
  { name: 'Analytics', href: '#' },
  { name: 'Growth',    href: '#' },
  { name: 'Pricing',   href: '#' },
  { name: 'About',     href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-gray-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">

          {/* ── Logo ── */}
          <a href="#" className="flex-shrink-0 text-xl font-black tracking-tight text-white">
            <span className="text-secondary">J</span>evxo
          </a>

          {/* ── Desktop nav links (centered) ── */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-background text-sm font-bold px-5 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-1.5 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-surface border-b border-gray-800"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-800">
                <a
                  href="#"
                  className="flex items-center justify-center bg-primary text-background text-sm font-bold px-5 py-2.5 rounded-full w-full hover:bg-primary/90 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
