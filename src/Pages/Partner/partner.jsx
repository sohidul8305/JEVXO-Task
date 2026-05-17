import React from 'react';
import { Handshake, Globe, Award, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Partner = () => {
    // ডাটাবেজ ফ্রেন্ডলি স্ট্যাটিক পার্টনারশিপ ডেটা
    const partnerPrograms = [
        {
            "id": "prog_01",
            "title": "Technology Partners",
            "badge": "Integrate",
            "description": "Integrate your SaaS or hardware solutions with the JEVXO ecosystem to create unmatched value for mutual enterprise clients.",
            "perks": ["Co-marketing Opportunities", "Advanced API Access", "Dedicated Dev Support"]
        },
        {
            "id": "prog_02",
            "title": "Agency & Solution Partners",
            "badge": "Build & Scale",
            "description": "Expand your agency services by deploying JEVXO solutions. Perfect for digital consulting groups and elite dev shops.",
            "perks": ["Generous Revenue Share", "Certified Training", "Priority Client Referrals"]
        },
        {
            "id": "prog_03",
            "title": "Strategic Resellers",
            "badge": "Distribute",
            "description": "Unlock brand-new revenue streams by bringing the industry's most advanced AI and DevOps platforms to your local market.",
            "perks": ["Flexible Tiered Pricing", "Exclusive Regional Rights", "White-glove Sales Assets"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
            
            {/* ── Header Section ── */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-950/40 border border-orange-500/20 px-3 py-1 rounded-full">
                    Ecosystem Growth
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                    Let's Build the Future Together
                </h1>
                <p className="text-base sm:text-lg text-gray-400">
                    Join the JEVXO Partnership Network and gain elite access to cutting-edge tech infrastructures, co-selling resources, and expert technical backing.
                </p>
            </div>

            {/* ── Main Responsive Cards Grid ── */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {partnerPrograms.map((program) => (
                        <div 
                            key={program.id}
                            className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-orange-500/20 transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[11px] font-bold text-orange-400 bg-orange-950/40 border border-orange-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                                    {program.badge}
                                </span>
                                <Handshake className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors" />
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {program.description}
                                </p>
                            </div>

                            {/* Key Perks List */}
                            <div className="pt-6 border-t border-white/5 mt-auto">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Benefits</h4>
                                <ul className="space-y-2">
                                    {program.perks.map((perk, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                                            <span>{perk}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Statistics / Trust Banner (Fully Responsive) ── */}
            <div className="max-w-7xl mx-auto bg-zinc-900/30 rounded-2xl border border-white/5 p-6 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                    <div className="text-2xl sm:text-4xl font-extrabold text-white">50+</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Global Integrations</div>
                </div>
                <div>
                    <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400">৳2.5M+</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Partner Payouts</div>
                </div>
                <div>
                    <div className="text-2xl sm:text-4xl font-extrabold text-white">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Tech Escalation</div>
                </div>
                <div>
                    <div className="text-2xl sm:text-4xl font-extrabold text-orange-400">98%</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Partner Retention</div>
                </div>
            </div>

            {/* ── CTA Action Row ── */}
            <div className="max-w-xl mx-auto text-center mt-16">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-300 text-black text-sm font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-orange-500/10 group">
                    Become a Partner Today
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
};

// React কনভেনশন অনুযায়ী ফার্স্ট লেটার বড় হাতের (Partner) করে দেওয়া হলো
export default Partner;