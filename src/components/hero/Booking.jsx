// components/Booking.jsx
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Search } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    groupSize: '',
    experience: ''
  });

  const destinations = [
    'Everest Base Camp',
    'Annapurna Circuit',
    'Kilimanjaro',
    'Inca Trail',
    'Swiss Alps',
    'Patagonia'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking inquiry submitted! We\'ll contact you soon.');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold mb-4">
                  BOOK YOUR ADVENTURE
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ready to
                  <span className="text-emerald-700"> Explore?</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form and our team will help you plan the perfect trek
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Destination
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select Destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Group Size
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={formData.groupSize}
                        onChange={(e) => setFormData({...formData, groupSize: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select Size</option>
                        <option value="1">Solo (1 person)</option>
                        <option value="2">Duo (2 people)</option>
                        <option value="3-5">Small Group (3-5)</option>
                        <option value="6-10">Medium Group (6-10)</option>
                        <option value="11+">Large Group (11+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Experience Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Special Requirements
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                    placeholder="Tell us about any special requirements, dietary restrictions, or specific goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Find Your Trek
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                By submitting, you agree to our Terms and Conditions. Your data is secure with us.
              </p>
            </div>

            {/* Right Column - Info */}
            <div className="text-white">
              <h3 className="text-4xl font-bold mb-6">
                Why Book With
                <span className="text-amber-300"> TrekQuest?</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-xl">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Flexible Booking</h4>
                    <p className="text-emerald-100">Free date changes up to 30 days before departure</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Small Groups</h4>
                    <p className="text-emerald-100">Maximum 12 people per group for personalized attention</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Local Experts</h4>
                    <p className="text-emerald-100">Guides born and raised in the mountains they lead</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4">Need Help Deciding?</h4>
                <p className="text-emerald-100 mb-4">
                  Our adventure consultants are available 7 days a week to help you choose the perfect trek
                </p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-300 mb-2">+1 (234) 567-8900</div>
                  <p className="text-emerald-100">contact@trekquest.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;