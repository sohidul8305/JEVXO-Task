import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';
import Card from '../UI/Card';
import { BarChart3, Mail, Users, CheckCircle, Database, Settings } from 'lucide-react';

const features = [
  { title: 'Analytics Integration', description: 'Get deep insights into your audience and content performance.', icon: BarChart3 },
  { title: 'Marketing Automation', description: 'Automate your email and social marketing campaigns effortlessly.', icon: Mail },
  { title: 'Team Collaboration', description: 'Work together seamlessly with built-in tools and roles.', icon: Users },
  { title: 'Task Management', description: 'Keep projects on track with integrated task boards.', icon: CheckCircle },
  { title: 'Secure Database', description: 'Your data is safe, encrypted, and backed up automatically.', icon: Database },
  { title: 'Custom Workflows', description: 'Build powerful custom logic without writing a single line of code.', icon: Settings },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Features = () => {
  return (
    <section className="py-20 relative bg-surface-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything You Need"
          subtitle="Explore the powerful features built to accelerate your success."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="flex flex-col h-full group">
                  <div className="w-11 h-11 bg-surface-light border border-gray-700 rounded-lg flex items-center justify-center mb-5 group-hover:border-secondary/50 transition-colors duration-300">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
