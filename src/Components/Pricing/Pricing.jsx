import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Check } from 'lucide-react';

const essentialFeatures = ['Up to 5 Admins', 'Basic Analytics', 'Standard Support', 'Core Modules'];
const proFeatures = ['Unlimited Admins', 'Advanced Analytics', '24/7 Priority Support', 'All Modules + API Access', 'Custom Branding'];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [students, setStudents] = useState(500);

  const monthlyBase = 10;
  const monthlyPro  = 19;
  const yearlyBase  = 8;
  const yearlyPro   = 15;

  const activeBase = isYearly ? yearlyBase : monthlyBase;
  const activePro  = isYearly ? yearlyPro  : monthlyPro;

  const estimatedBasic = Math.floor(activeBase * students);
  const estimatedPro   = Math.floor(activePro  * students);

  // Yearly savings on pro plan
  const yearlySavings = isYearly
    ? Math.floor((monthlyPro - yearlyPro) * students * 12)
    : 0;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Flexible Pricing for Modern Schools"
          subtitle="Pay only for what you need. Scale as you grow."
        />

        {/* ── Billing toggle ── */}
        <div className="flex justify-center mb-10">
          <div className="bg-surface p-1 rounded-full border border-gray-800 flex items-center gap-0.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly ? 'bg-secondary text-background shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isYearly ? 'bg-secondary text-background shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* ── Student slider ── */}
        <div className="max-w-3xl mx-auto mb-12 bg-surface-light border border-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm sm:text-base font-semibold text-white">Estimated Students / Users</h3>
            <span className="text-xl sm:text-2xl font-black text-secondary">{students.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer accent-secondary"
            aria-label="Student count"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>100</span>
            <span>10,000+</span>
          </div>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Essential */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false} className="border-gray-800 flex flex-col h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-1.5 text-white">Essential</h3>
              <p className="text-gray-400 text-sm mb-6">Perfect for small schools just getting started.</p>

              <div className="mb-7">
                <motion.span
                  key={estimatedBasic}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl sm:text-4xl font-black text-white"
                >
                  ${estimatedBasic.toLocaleString()}
                </motion.span>
                <span className="text-gray-500 text-sm ml-1">/mo</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {essentialFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-secondary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full">Get Started</Button>
            </Card>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card
              hover={false}
              className="border-primary relative flex flex-col h-full bg-gradient-to-b from-surface-light to-surface shadow-[0_0_50px_rgba(255,194,71,0.1)]"
            >
              {/* Recommended badge */}
              <div className="absolute top-0 right-0 bg-primary text-background text-[10px] font-black px-3 py-1 rounded-bl-xl rounded-tr-xl tracking-wide">
                RECOMMENDED
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-1.5 text-primary">Pro Management</h3>
              <p className="text-gray-400 text-sm mb-6">Advanced features for growing institutions.</p>

              <div className="mb-2">
                <motion.span
                  key={estimatedPro}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl sm:text-4xl font-black text-white"
                >
                  ${estimatedPro.toLocaleString()}
                </motion.span>
                <span className="text-gray-500 text-sm ml-1">/mo</span>
              </div>

              {/* Yearly savings badge */}
              {isYearly && yearlySavings > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1.5 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-5 w-fit"
                >
                  Save ${yearlySavings.toLocaleString()} / year
                </motion.div>
              )}
              {!isYearly && <div className="mb-5" />}

              <ul className="space-y-3 flex-1 mb-8">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="primary" className="w-full">Get Started</Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
