import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PackagePlus, User, DollarSign, Tag, ShoppingBag, Calendar } from 'lucide-react';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'Electronics',
        addedBy: ''
    });

    // ১. ডাটাবেজ থেকে সব প্রোডাক্ট লোড করা (GET Request)
    useEffect(() => {
        fetch('https://jevoxo-backend.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    // ইনপুট চেঞ্জ হ্যান্ডলার
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ২. ফর্ম সাবমিট করে ডাটাবেজে সেভ করা (POST Request)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price || !formData.addedBy) {
            alert("সবগুলো ঘর সঠিকভাবে পূরণ করুন!");
            return;
        }

        const newProduct = {
            name: formData.name,
            price: formData.price,
            category: formData.category,
            addedBy: formData.addedBy,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        };

        // ব্যাকএন্ডে ডাটা পাঠানো
        fetch('https://jevoxo-backend.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                // ডাটাবেজে সফলভাবে সেভ হলে ইউআই (UI) আপডেট করা
                setProducts([{ _id: data.insertedId, ...newProduct }, ...products]);
                // ফর্ম রিসেট
                setFormData({ name: '', price: '', category: 'Electronics', addedBy: '' });
                alert("প্রোডাক্টটি সফলভাবে ডাটাবেজে সেভ হয়েছে!");
            }
        })
        .catch(err => {
            console.error("Error adding product:", err);
            alert("কিছু একটা সমস্যা হয়েছে!");
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-4 md:p-8 selection:bg-indigo-500/30">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
                
                {/* ফর্ম সেকশন */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl h-fit shadow-xl"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <PackagePlus className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-xl font-semibold tracking-tight">Add New Product</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1.5">Product Name</label>
                            <div className="relative">
                                <ShoppingBag className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Wireless Mouse"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1.5">Price ($)</label>
                            <div className="relative">
                                <DollarSign className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1.5">Category</label>
                            <div className="relative">
                                <Tag className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer text-slate-300"
                                >
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Home Decor">Home Decor</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Name (Adder)</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    name="addedBy"
                                    value={formData.addedBy}
                                    onChange={handleChange}
                                    placeholder="e.g. John Doe"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium text-sm py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                        >
                            Add Product
                        </button>
                    </form>
                </motion.div>

                {/* প্রোডাক্ট টেবিল সেকশন */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-3 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl shadow-xl overflow-hidden"
                >
                    <h2 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-indigo-400" />
                        Added Products ({products.length})
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                                    <th className="pb-3 font-semibold">Product</th>
                                    <th className="pb-3 font-semibold">Category</th>
                                    <th className="pb-3 font-semibold">Price</th>
                                    <th className="pb-3 font-semibold">Added By</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50 text-sm">
                                {products.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-6 text-slate-500">No products found. Add some!</td>
                                    </tr>
                                ) : (
                                    products.map((item) => (
                                        <tr key={item._id || item.id} className="hover:bg-slate-800/30 transition-colors group">
                                            <td className="py-3.5 font-medium text-slate-200">{item.name}</td>
                                            <td className="py-3.5">
                                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className="py-3.5 font-semibold text-emerald-400">${item.price}</td>
                                            <td className="py-3.5">
                                                <div className="flex flex-col">
                                                    <span className="text-slate-300 font-medium flex items-center gap-1">
                                                        <User className="w-3 h-3 text-indigo-400" /> {item.addedBy}
                                                    </span>
                                                    <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                                                        <Calendar className="w-2.5 h-2.5" /> {item.date}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Product;