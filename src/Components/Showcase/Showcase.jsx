import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ── Mini browser mockup inside the large card ── */
const BrowserMockup = () => (
  <div className="w-full h-full bg-[#1a1f2e] rounded-lg overflow-hidden flex flex-col">
    {/* Chrome bar */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0f1420] border-b border-gray-700/50 flex-shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      <div className="flex-1 mx-3 h-3 bg-gray-700/60 rounded-full max-w-[140px]" />
    </div>
    {/* Page layout */}
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#0d1220] border-r border-gray-700/30 p-2 space-y-1.5 flex-shrink-0">
        <div className="h-2.5 bg-secondary/30 rounded w-3/4" />
        {[80, 60, 90, 70, 55].map((w, i) => (
          <div key={i} className="h-2 bg-gray-700/50 rounded" style={{ width: `${w}%` }} />
        ))}
        <div className="mt-3 h-2 bg-gray-700/40 rounded w-1/2" />
        {[65, 75, 50].map((w, i) => (
          <div key={i} className="h-2 bg-gray-700/40 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
      {/* Main content */}
      <div className="flex-1 p-3 space-y-2.5">
        {/* Top stat cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { color: 'bg-secondary/20 border-secondary/30', label: 'bg-secondary/40' },
            { color: 'bg-primary/20 border-primary/30',     label: 'bg-primary/40' },
            { color: 'bg-purple-500/20 border-purple-500/30', label: 'bg-purple-500/40' },
          ].map((c, i) => (
            <div key={i} className={`${c.color} border rounded-md p-2`}>
              <div className={`h-1.5 ${c.label} rounded w-1/2 mb-1.5`} />
              <div className="h-3 bg-white/20 rounded w-3/4" />
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div className="bg-[#0d1220] rounded-md p-2 border border-gray-700/30">
          <div className="h-2 bg-gray-700/50 rounded w-1/3 mb-2" />
          <div className="flex items-end gap-1 h-12">
            {[35, 55, 42, 68, 52, 78, 60, 85, 70, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i % 2 === 0
                    ? 'rgba(0,229,255,0.35)'
                    : 'rgba(255,194,71,0.35)',
                }}
              />
            ))}
          </div>
        </div>
        {/* Table rows */}
        <div className="space-y-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded bg-gray-700/50 flex-shrink-0" />
              <div className="h-2 bg-gray-700/50 rounded flex-1" />
              <div className="h-2 bg-gray-700/30 rounded w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── Small preview card ── */
const SmallCard = ({ title, subtitle, desc, accentColor, barColor, dotColor }) => (
  <div className="bg-surface border border-gray-800 rounded-xl p-4 flex flex-col gap-3 hover:border-gray-600 transition-colors duration-300 h-full">
    {/* Preview thumbnail */}
    <div className="relative h-28 sm:h-32 bg-surface-light rounded-lg overflow-hidden border border-gray-700/50">
      {/* Gradient tint */}
      <div className={`absolute inset-0 ${accentColor} opacity-30`} />
      {/* Mini chart bars */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end gap-0.5 px-2 pb-1 h-16">
        {[40, 65, 48, 72, 55, 80, 62, 75, 58, 85].map((h, i) => (
          <div
            key={i}
            className={`flex-1 ${barColor} rounded-t-sm opacity-60`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      {/* Dot accent */}
      <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${dotColor} shadow-lg`} />
    </div>
    {/* Text */}
    <div>
      <h4 className="text-sm font-bold text-white mb-0.5">{title}</h4>
      <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const smallCards = [
  {
    title: 'Creative Portfolio',
    desc: 'Stand out with stunning animations and smooth transitions.',
    accentColor: 'bg-primary',
    barColor: 'bg-primary',
    dotColor: 'bg-primary',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Complex data visualization made simple and beautiful.',
    accentColor: 'bg-secondary',
    barColor: 'bg-secondary',
    dotColor: 'bg-secondary',
  },
  {
    title: 'Content Hub',
    desc: 'SEO-optimized blogging with rich media support.',
    accentColor: 'bg-purple-500',
    barColor: 'bg-purple-500',
    dotColor: 'bg-purple-400',
  },
  {
    title: 'LMS System',
    desc: 'Complete learning management for schools and courses.',
    accentColor: 'bg-green-500',
    barColor: 'bg-green-500',
    dotColor: 'bg-green-400',
  },
];

const Showcase = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Showcase"
          subtitle="See what our customers have built with Jevxo."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10"
        >
          {/* ── Large card — left, spans 2 cols ── */}
          <motion.div variants={item} className="lg:col-span-2">
            <div className="bg-surface border border-gray-800 rounded-xl p-5 h-full flex flex-col hover:border-gray-600 transition-colors duration-300 min-h-[420px]">
              <div className="mb-4">
                <span className="inline-block text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 rounded-full px-3 py-0.5 mb-3">
                  Featured
                </span>
                <h3 className="text-xl font-bold text-white mb-1">Modern E-Commerce</h3>
                <p className="text-gray-400 text-sm">
                  A fully functional, high-performance online store built in days.
                </p>
              </div>
              {/* Browser mockup fills remaining space */}
              <div className="flex-1 min-h-[260px]">
                <BrowserMockup />
              </div>
            </div>
          </motion.div>

          {/* ── 4 small cards — right column, 2x2 grid ── */}
          <motion.div variants={item} className="lg:col-span-1">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 h-full">
              {/* On lg: stack 2x2 using nested grid */}
              <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4">
                {smallCards.map((card) => (
                  <SmallCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
