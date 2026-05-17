import React from 'react';
import { Code, Cloud, Cpu, Shield, BarChart, Smartphone } from 'lucide-react'; // সুন্দর আইকন ব্যবহারের জন্য

const Solutions = () => {
    // ডাটাবেজে ইনসার্ট করার উপযোগী ১০টি ডাইনামিক ফ্রেন্ডলি স্ট্যাটিক ডেটা
    const solutionData = [
        {
            "id": "sol_01",
            "title": "Custom Software Development",
            "description": "Tailor-made software solutions designed to fit your unique business infrastructure and optimize daily operations.",
            "category": "Development",
            "icon": "Code",
            "features": ["Scalable Architecture", "API Integrations", "High Security"]
        },
        {
            "id": "sol_02",
            "title": "Cloud Infrastructure & DevOps",
            "description": "Migrate, manage, and scale your applications seamlessly using advanced AWS and Google Cloud configurations.",
            "category": "Cloud",
            "icon": "Cloud",
            "features": ["99.9% Uptime", "Automated Backups", "CI/CD Pipelines"]
        },
        {
            "id": "sol_03",
            "title": "Artificial Intelligence & ML",
            "description": "Integrate smart AI models and predictive analytics into your products to automate decision-making processes.",
            "category": "AI & Tech",
            "icon": "Cpu",
            "features": ["Data Engineering", "NLP Processing", "Smart Automation"]
        },
        {
            "id": "sol_04",
            "title": "Cybersecurity Solutions",
            "description": "Protect your enterprise data and application layers from malicious threats with continuous security audits.",
            "category": "Security",
            "icon": "Shield",
            "features": ["End-to-end Encryption", "Vulnerability Testing", "24/7 Monitoring"]
        },
        {
            "id": "sol_05",
            "title": "E-Commerce Ecosystems",
            "description": "High-performance storefronts built with modern tech stacks to handle millions of transactions smoothly.",
            "category": "Development",
            "icon": "Smartphone",
            "features": ["Fast Checkout", "Multi-vendor Support", "Analytics Dashboard"]
        },
        {
            "id": "sol_06",
            "title": "Data Analytics & BI",
            "description": "Transform raw system data into visually beautiful, interactive dashboards to drive business insights.",
            "category": "Analytics",
            "icon": "BarChart",
            "features": ["Real-time Tracking", "Custom Reports", "User Behavior Insights"]
        }
    ];

    // আইকন ম্যাপার ফাংশন (লুসিডি আইকন ডায়নামিক রেন্ডার করার জন্য)
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'Code': return <Code className="w-6 h-6 text-cyan-400" />;
            case 'Cloud': return <Cloud className="w-6 h-6 text-blue-400" />;
            case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
            case 'Shield': return <Shield className="w-6 h-6 text-emerald-400" />;
            case 'Smartphone': return <Smartphone className="w-6 h-6 text-orange-400" />;
            case 'BarChart': return <BarChart className="w-6 h-6 text-pink-400" />;
            default: return <Code className="w-6 h-6 text-cyan-400" />;
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Header section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                    Our Services
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                    Innovative Tech Solutions
                </h1>
                <p className="text-base sm:text-lg text-gray-400">
                    We empower enterprise teams to design, build, and scale world-class digital products with extreme velocity.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {solutionData.map((sol) => (
                        <div 
                            key={sol.id} 
                            className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col group hover:shadow-2xl hover:shadow-cyan-500/5"
                        >
                            {/* Icon Top bar */}
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
                                {renderIcon(sol.icon)}
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <span className="text-xs font-medium text-gray-500 block mb-1">
                                    {sol.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {sol.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {sol.description}
                                </p>
                            </div>

                            {/* Features Tags inside Card */}
                            <div className="pt-4 border-t border-white/5 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {sol.features.map((feature, index) => (
                                        <span 
                                            key={index} 
                                            className="text-[11px] font-medium bg-zinc-800 text-gray-300 px-2.5 py-1 rounded-md"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// রিয়্যাক্ট স্ট্যান্ডার্ড অনুযায়ী কম্পোনেন্টের প্রথম অক্ষর বড় হাতের (Solutions) করে দেওয়া হলো
export default Solutions;