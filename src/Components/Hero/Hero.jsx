import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background radial glow — top center */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.1] mb-5"
            >
              <span className="text-secondary">Stop Building Sites,</span>
              <br />
              <span className="text-white">Start Building Empires.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
              className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              The only platform you need to build, scale, and manage your entire web presence with ease.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.28}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10"
            >
              <Button variant="primary" size="lg">Start Building</Button>
              <Button variant="ghost" size="lg">Watch Demo</Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.42}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              {[
                { value: '10X', label: 'Faster' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="w-px h-8 bg-gray-700" />}
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest mt-0.5">{stat.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Globe / Network Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 relative flex items-center justify-center w-full max-w-[420px] lg:max-w-none"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
              {/* Glow behind globe */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[60px]" />

              {/* Outer spinning ring */}
              <div className="absolute inset-0 border border-secondary/20 rounded-full animate-[spin_25s_linear_infinite]" />

              {/* Middle dashed ring */}
              <div className="absolute inset-[10%] border border-dashed border-secondary/30 rounded-full animate-[spin_18s_linear_infinite_reverse]" />

              {/* Inner solid ring */}
              <div className="absolute inset-[22%] border-2 border-secondary/50 rounded-full" />

              {/* Core glowing sphere */}
              <div className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 bg-secondary rounded-full shadow-[0_0_60px_rgba(0,229,255,0.9),0_0_120px_rgba(0,229,255,0.4)]" />

              {/* Network nodes on outer ring */}
              {[0, 72, 144, 216, 288].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const r = 47; // % from center
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-secondary/80 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
                  />
                );
              })}

              {/* Floating accent dots */}
              <div className="absolute top-[12%] right-[14%] w-4 h-4 bg-primary rounded-full shadow-[0_0_16px_rgba(255,194,71,0.9)] animate-pulse" />
              <div className="absolute bottom-[18%] left-[10%] w-3 h-3 bg-secondary rounded-full shadow-[0_0_12px_rgba(0,229,255,0.8)] animate-pulse" style={{ animationDelay: '0.8s' }} />
              <div className="absolute top-[40%] left-[4%] w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
