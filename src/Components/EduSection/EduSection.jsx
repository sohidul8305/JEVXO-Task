import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const stats = [
  { value: '75k+', label: 'Students' },
  { value: '100+', label: 'Institutions' },
  { value: '95%', label: 'Pass Rate' },
];

const EduSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 text-white leading-tight"
        >
          Transform education with{' '}
          <span className="text-secondary">Jevxo Edu</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-8 leading-relaxed"
        >
          The ultimate platform for modern schools and institutions to manage everything from learning to administration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
        >
          <Button variant="primary" size="md">Learn More</Button>
          <Button variant="outline" size="md">Contact Sales</Button>
        </motion.div>

        {/* ── Classroom image ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-700 shadow-[0_0_60px_rgba(0,0,0,0.6)] mb-14"
        >
          {/* Real classroom photo via Unsplash */}
          <div className="aspect-video md:aspect-[21/9] relative overflow-hidden bg-surface-light">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80&auto=format&fit=crop"
              alt="Modern classroom"
              className="w-full h-full object-cover opacity-70"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

            {/* Bottom-left text overlay */}
            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Modern Classrooms</h3>
              <p className="text-gray-300 text-sm">Empower students and teachers</p>
            </div>
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-2xl sm:text-4xl font-black text-secondary mb-1">{stat.value}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EduSection;
