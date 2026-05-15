import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';
import { Activity, Target, Zap, Shield, TrendingUp } from 'lucide-react';

// Positions for 4 orbital nodes (top, right, bottom, left)
const orbitalNodes = [
  { icon: Target,   label: 'Targeting', angle: -90  },
  { icon: Zap,      label: 'Speed',     angle: 0    },
  { icon: Shield,   label: 'Security',  angle: 90   },
  { icon: Activity, label: 'Analytics', angle: 180  },
];

const OrbitalNode = ({ icon: Icon, label, angle, radius }) => {
  const rad = (angle * Math.PI) / 180;
  const x = 50 + radius * Math.cos(rad);
  const y = 50 + radius * Math.sin(rad);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.3 + (angle + 90) / 360 * 0.4 }}
      className="absolute flex flex-col items-center gap-1"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] bg-surface border border-gray-700 rounded-full flex items-center justify-center hover:border-secondary/60 transition-colors duration-300 shadow-lg">
        <Icon size={22} className="text-gray-400" />
      </div>
      <span className="text-[10px] text-gray-500 whitespace-nowrap">{label}</span>
    </motion.div>
  );
};

const GrowthEngine = () => {
  const orbitRadius = 42; // % of container

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Jevxo Growth Engine"
          subtitle="Everything you need to grow, connected in one single place."
        />

        {/* Diagram */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px]">

            {/* Outer dashed orbit ring */}
            <div className="absolute inset-0 border border-dashed border-gray-700/60 rounded-full animate-[spin_50s_linear_infinite_reverse]" />

            {/* Inner orbit ring */}
            <div className="absolute inset-[16%] border border-gray-800 rounded-full" />

            {/* SVG connector lines from center to each node */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {orbitalNodes.map(({ angle }) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + orbitRadius * Math.cos(rad);
                const y = 50 + orbitRadius * Math.sin(rad);
                return (
                  <line
                    key={angle}
                    x1="50" y1="50"
                    x2={x} y2={y}
                    stroke="rgba(0,229,255,0.12)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                );
              })}
            </svg>

            {/* Central node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="absolute inset-0 m-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-surface border-2 border-secondary rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,229,255,0.35)] z-10"
            >
              <TrendingUp size={26} className="text-secondary mb-1" />
              <span className="font-bold text-white text-xs sm:text-sm">Growth</span>
            </motion.div>

            {/* Orbital nodes */}
            {orbitalNodes.map((node) => (
              <OrbitalNode key={node.label} {...node} radius={orbitRadius} />
            ))}
          </div>
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {['SEO Optimization', 'Real-time Analytics', 'Auto Scaling', 'Smart Automation', 'Team Collaboration'].map((pill) => (
            <span
              key={pill}
              className="px-4 py-1.5 bg-surface-light border border-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:border-secondary/50 hover:text-white transition-colors duration-200"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthEngine;
