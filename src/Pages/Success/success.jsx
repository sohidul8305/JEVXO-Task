import React, { useEffect, useState } from 'react';

const Success = () => {
    // ডাইনামিক ডেটা স্টেট-এ রাখার জন্য
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    // API থেকে ডেটা ফেচ (GET) করা
    useEffect(() => {
        fetch('https://jevoxo-backend.vercel.app/success')
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Data fetch করতে সমস্যা হয়েছে:", err);
                setLoading(false);
            });
    }, []);

    // ডেটা লোড হওয়ার সময় আধুনিক স্পিনার দেখাবে
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Success Header Message */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Action Successful!
                </h1>
                <p className="text-base sm:text-lg text-slate-600">
                    Your request has been processed smoothly. Here are our top handpicked destinations for you.
                </p>
            </div>

            {/* Responsive Grid Layout - Dynamic Data Render */}
            <div className="max-w-7xl mx-auto">
                {destinations.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <p className="text-slate-500 font-medium">No destinations found in database.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                        {destinations.map((item) => (
                            <div 
                                key={item._id} 
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
                            >
                                {/* Card Image Area */}
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {item.rating && (
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {item.rating}
                                        </div>
                                    )}
                                </div>

                                {/* Card Content Area */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors truncate">
                                        {item.name}
                                    </h3>
                                    
                                    <p className="text-slate-500 text-sm flex items-center gap-1 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="truncate">{item.destination}</span>
                                    </p>

                                    {/* Footer row inside Card */}
                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <div className="text-xs text-slate-400 font-medium">
                                            <div>Duration</div>
                                            <div className="text-slate-600 font-semibold">{item.duration || "N/A"}</div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs text-slate-400 block font-medium">Starts from</span>
                                            <span className="text-lg font-extrabold text-emerald-600">৳{item.price || 0}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Success;