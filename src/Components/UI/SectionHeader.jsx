import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
