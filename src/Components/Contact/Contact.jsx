import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Button from '../UI/Button';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: '123 Empire Building, San Francisco, CA 94105',
    color: 'text-secondary',
    bg: 'bg-secondary/10 border-secondary/20',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@jevxo.com',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 123-4567',
    color: 'text-secondary',
    bg: 'bg-secondary/10 border-secondary/20',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); };

  const inputClass =
    'w-full bg-surface border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors duration-200';

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left: contact info cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, color, bg }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-surface border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors duration-200"
              >
                <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg border ${bg}`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
                  <p className="text-sm text-gray-200 leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="flex-1 bg-surface border border-gray-800 rounded-xl overflow-hidden min-h-[140px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin size={28} className="text-secondary/50" />
                <span className="text-xs text-gray-600">San Francisco, CA</span>
              </div>
              {/* Grid lines for map feel */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00E5FF" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-surface border border-gray-800 rounded-xl p-6 sm:p-8 h-full">
              <h3 className="text-lg font-bold text-white mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button variant="primary" size="md" className="w-full sm:w-auto px-10">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
