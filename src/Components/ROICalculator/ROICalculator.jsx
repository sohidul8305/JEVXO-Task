import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';
import Card from '../UI/Card';

// Build bar chart data points based on traffic
const buildBars = (traffic) => {
  const base = [30, 45, 38, 55, 48, 62, 58, 70, 65, 80];
  const boost = traffic / 200000;
  return base.map((v) => Math.min(95, v + boost * 40));
};

const ROICalculator = () => {
  const [traffic, setTraffic] = useState(50000);

  const calculatedROI = Math.floor(traffic * 0.15);
  const bars = buildBars(traffic);

  // SVG area path for the "With Jevxo" line
  const svgPoints = bars.map((v, i) => {
    const x = (i / (bars.length - 1)) * 100;
    const y = 100 - v;
    return `${x},${y}`;
  });
  const linePath = `M ${svgPoints.join(' L ')}`;
  const areaPath = `M 0,100 L ${svgPoints.join(' L ')} L 100,100 Z`;

  // Baseline (flat-ish)
  const basePoints = bars.map((_, i) => {
    const x = (i / (bars.length - 1)) * 100;
    const y = 100 - (20 + i * 1.5);
    return `${x},${y}`;
  });
  const baseLine = `M ${basePoints.join(' L ')}`;

  return (
    <section className="py-20 bg-surface-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="ROI Calculator"
          subtitle="See how much you could save and earn with Jevxo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">

          {/* ── Left column: slider + revenue card ── */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Card hover={false}>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Monthly Traffic</h3>
              <input
                type="range"
                min="1000"
                max="200000"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer accent-secondary"
                aria-label="Monthly traffic"
              />
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-gray-500">1k</span>
                <span className="text-lg font-bold text-white">{traffic.toLocaleString()}</span>
                <span className="text-xs text-gray-500">200k+</span>
              </div>
            </Card>

            {/* Revenue result */}
            <Card hover={false} className="border-secondary/20 bg-gradient-to-br from-surface-light to-surface">
              <p className="text-xs text-gray-400 mb-1">Estimated Extra Revenue</p>
              <motion.p
                key={calculatedROI}
                initial={{ opacity: 0.6, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="text-3xl sm:text-4xl font-black text-primary"
              >
                ${calculatedROI.toLocaleString()}
              </motion.p>
              <p className="text-[11px] text-gray-500 mt-1.5">Based on average conversion rates.</p>
            </Card>
          </div>

          {/* ── Right column: area chart ── */}
          <div className="lg:col-span-2">
            <Card hover={false} className="h-full flex flex-col min-h-[260px] sm:min-h-[300px]">
              <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <h3 className="text-sm font-semibold text-white">Growth Projection</h3>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-gray-600 inline-block" />
                    Current
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    With Jevxo
                  </span>
                </div>
              </div>

              {/* Chart area */}
              <div className="relative flex-1 w-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{ minHeight: '180px' }}
                >
                  {/* Horizontal grid lines */}
                  {[25, 50, 75].map((y) => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  ))}

                  {/* Area fill — Jevxo */}
                  <path d={areaPath} fill="rgba(255,194,71,0.12)" />

                  {/* Baseline */}
                  <path d={baseLine} fill="none" stroke="rgba(107,114,128,0.6)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />

                  {/* Jevxo line */}
                  <path d={linePath} fill="none" stroke="#FFC247" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

                  {/* Dots on Jevxo line */}
                  {bars.map((v, i) => {
                    const x = (i / (bars.length - 1)) * 100;
                    const y = 100 - v;
                    return <circle key={i} cx={x} cy={y} r="1.2" fill="#FFC247" vectorEffect="non-scaling-stroke" />;
                  })}
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between mt-1 px-0.5">
                  {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m) => (
                    <span key={m} className="text-[9px] text-gray-600">{m}</span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
