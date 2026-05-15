import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-primary/8 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 text-white leading-tight"
        >
          Ready to build your empire?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
        >
          Join thousands of other businesses that are building faster, scaling better, and growing their revenue with Jevxo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button variant="primary" size="lg">Get Started Now</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
