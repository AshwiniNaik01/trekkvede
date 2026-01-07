import React from "react";
import { X } from "lucide-react";

const BookNowModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const treks = ["Kedarkantha", "Har Ki Dun", "Valley of Flowers", "Triund"];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            {/* Overlay click to close */}
            <div className="absolute inset-0" onClick={onClose}></div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl w-full relative z-10 animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all"
                >
                    <X size={24} />
                </button>

                <h2 className="text-3xl font-bold text-emerald-800 mb-2 text-center">
                    Book Your Adventure
                </h2>
                <p className="text-center text-gray-500 mb-8">Fill in your details below to secure your spot</p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm hover:shadow-md transition-all bg-gray-50 focus:bg-white"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm hover:shadow-md transition-all bg-gray-50 focus:bg-white"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm hover:shadow-md transition-all bg-gray-50 focus:bg-white"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Select Trek</label>
                        <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm hover:shadow-md transition-all bg-gray-50 focus:bg-white appearance-none">
                            <option value="" disabled selected>
                                Choose your destination
                            </option>
                            {treks.map((trek, i) => (
                                <option key={i} value={trek}>{trek}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Date</label>
                        <input
                            type="date"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm hover:shadow-md transition-all bg-gray-50 focus:bg-white"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Participants</label>
                        <input
                            type="number"
                            min="1"
                            placeholder="1"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm hover:shadow-md transition-all bg-gray-50 focus:bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="md:col-span-2 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/30 transform transition-all duration-300 active:scale-[0.98] mt-2"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>

            <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
        `}</style>
        </div>
    );
};

export default BookNowModal;
