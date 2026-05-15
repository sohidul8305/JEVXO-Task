import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Button from '../UI/Button';

const productLinks = ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'];
const companyLinks = ['About Us', 'Careers', 'Blog', 'Contact', 'Partners'];

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-gray-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand + Contact ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo — matches screenshot: cyan "X" + "evxo" */}
            <a href="#" className="inline-flex items-center gap-0.5 text-2xl font-black text-white mb-5">
              <span className="text-secondary">X</span>evxo
            </a>

            <h4 className="text-sm font-bold text-secondary mb-3 uppercase tracking-wider">Contact Us</h4>
            <address className="not-italic text-gray-400 text-sm leading-7 mb-5">
              <p>Jevxo Headquarters</p>
              <p>123 Empire Building,</p>
              <p>San Francisco, CA 94105</p>
              <p className="mt-1">contact@jevxo.com</p>
              <p>+1 (555) 123-4567</p>
            </address>

            <div className="flex gap-3">
              {[FaTwitter, FaLinkedin, FaFacebook, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-light border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Product links ── */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company links ── */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-surface-light border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors duration-200"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-surface-light border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors duration-200"
              />
              <Button variant="primary" size="sm" className="w-full">Subscribe</Button>
            </form>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 Jevxo Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
