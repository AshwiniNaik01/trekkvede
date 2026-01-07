import React from 'react'

const AboutUs = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black/70 to-black/50"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
         <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        {/* Main Title Card */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Adventure With Confidence
            </h1>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ff7e30] mb-4">
                Why Choose TrekkVede
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                At TrekkVede, we blend expert planning, personalized experiences, and local insights to offer unparalleled adventures. Choose us for a journey that's safe, memorable, and tailored just for you.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid - Layered over background */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Expertly Planned Journeys */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8  transition-all duration-300 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expertly Planned Journeys
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every trek and trip is crafted with precision, ensuring a seamless, safe, and memorable experience from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Tailored Experiences */}
          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-1  rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tailored Experiences for Every Adventurer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From first-time explorers to seasoned trekkers, our customized trips ensure an adventure that perfectly aligns with your skills.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Unmatched Local Knowledge */}
          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-1  rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unmatched Local Knowledge
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our guides provide deep insights into local cultures, hidden gems, and the natural environment, enriching every adventure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-gradient-to-r from-[#1a3c34]/90 to-[#2d5a4e]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Adventure Today
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of adventurers who have experienced the TrekenTrip difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-[#ff7e30] text-white font-semibold rounded-full hover:bg-[#e86d1f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Book Your Trek Now
                </button>
                <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1a3c34] transition-all duration-300">
                  View All Packages
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AboutUs