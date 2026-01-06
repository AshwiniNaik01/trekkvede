import React, { useState } from "react";
import { Calendar, User, Phone } from "lucide-react";

const BookNowPage = () => {
  const treks = ["Kedarkantha", "Har Ki Dun", "Valley of Flowers", "Triund"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503416997304-4319c3f7c9ec?fm=jpg&q=60&w=3000"
          alt="Book Trek"
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-[slowzoom_25s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Book Your Trek
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-yellow-400 drop-shadow-sm">
            Secure your spot for an unforgettable trekking adventure
          </p>

          {/* Book Now Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ================= TREK HIGHLIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-emerald-700 text-center mb-10">
          Why Trek With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { title: "Expert Guides", icon: <User size={30} /> },
            { title: "Safety First", icon: <Phone size={30} /> },
            { title: "Best Trails", icon: <Calendar size={30} /> },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-semibold text-emerald-700 mb-8 text-center">
              Fill Your Details
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm hover:shadow-md transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm hover:shadow-md transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm hover:shadow-md transition"
              />
              <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm hover:shadow-md transition">
                <option disabled selected>
                  Select Trek
                </option>
                {treks.map((trek, i) => (
                  <option key={i}>{trek}</option>
                ))}
              </select>
              <input
                type="date"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm hover:shadow-md transition"
              />
              <input
                type="number"
                placeholder="Number of Participants"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm hover:shadow-md transition"
              />
              <button
                type="submit"
                className="md:col-span-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= TAILWIND CUSTOM ANIMATIONS ================= */}
      <style>
        {`
          @keyframes slowzoom {
            0%,100% { transform: scale(1.1); }
            50% { transform: scale(1.15); }
          }
          .animate-[slowzoom_25s_ease-in-out_infinite] { animation: slowzoom 25s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default BookNowPage;
