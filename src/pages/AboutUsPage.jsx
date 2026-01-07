import React from "react";
import {
  FaFlag,
  FaUsers,
  FaUtensils,
  FaBeer,
  FaFirstAid,
  FaMountain,
  FaCampground,
  FaCar,
} from "react-icons/fa";

const heroCards = [
  { img: "/demo2.webp", delay: "delay-0" },
  { img: "/image2.jpg", delay: "delay-300" },
  { img: "/Demo1.webp", delay: "delay-600" },
];

const coreValues = [
  "Customer care",
  "Integrity",
  "Professionalism",
  "Teamwork",
  "Safety",
  "Reliability & Flexibility",
  "Efficiency",
  "Excellence",
  "Quality",
  "Sustainability",
];

// ================= TEAM & FACILITIES DATA =================
const teamFacilities = [
  {
    icon: <FaFlag className="w-12 h-12 mx-auto text-green-800" />,
    title: "Trek Leaders",
    desc: "Qualified with Basic Mountaineering Course and Advanced Mountaineering Course. Each of the Trek Leaders holds Wilderness First Aid Responder Certification.",
  },
  {
    icon: <FaUsers className="w-12 h-12 mx-auto text-green-800" />,
    title: "Team",
    desc: "Besides Trek Leaders, every batch has sufficient support staff including local guides, cooks and helpers.",
  },
  {
    icon: <FaUtensils className="w-12 h-12 mx-auto text-green-800" />,
    title: "Food",
    desc: "Hygienic, energising and majorly vegetarian food with the occasional egg dishes.",
  },
  {
    icon: <FaBeer className="w-12 h-12 mx-auto text-green-800" />,
    title: "Equipment",
    desc: "High-end and well maintained sleeping, dining and toilet tents and other equipment like climbing ropes and crampons.",
  },
  {
    icon: <FaFirstAid className="w-12 h-12 mx-auto text-green-800" />,
    title: "Emergency Equipment",
    desc: "Stretcher, oxygen cylinders and well-stocked First Aid kits.",
  },
  {
    icon: <FaMountain className="w-12 h-12 mx-auto text-green-800" />,
    title: "High Altitude Chambers",
    desc: "(GEMO Bag) in certain high altitude treks. (Specially in Roopkund and Stok Kangri).",
  },
  {
    icon: <FaCampground className="w-12 h-12 mx-auto text-green-800" />,
    title: "Accommodation",
    desc: "Hygienic, energising and majorly vegetarian food with the occasional egg dishes.",
  },
  {
    icon: <FaCar className="w-12 h-12 mx-auto text-green-800" />,
    title: "Transport",
    desc: "From pick-up point to base camp in MUV or smaller vehicles for safe and comfortable rides.",
  },
];

// ================= TEAM & FACILITIES COMPONENT =================
const TeamFacilitiesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Team and Facilities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamFacilities.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            {item.icon}
            <h5 className="text-lg md:text-xl font-semibold text-gray-900 mt-4 mb-2">
              {item.title}
            </h5>
            <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================= ABOUT US PAGE =================
const AboutUsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src="./about.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          alt="TrekVede"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-5xl font-serif text-white tracking-wide">
            TrekkVede
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400  mt-8 font-semibold">
            Explore The Himalayas With Experts
          </p>
        </div>

        {/* HERO IMAGE CARDS */}
        <div className="absolute bottom-8 w-full z-20">
          <div className="max-w-6xl mx-auto flex justify-center gap-8 px-6">
            {heroCards.map((card, i) => (
              <div
                key={i}
                className={`w-[240px] h-[180px] rounded-2xl overflow-hidden border-4 border-white/80 shadow-2xl animate-slideUp opacity-0 ${card.delay}`}
                style={{ animationFillMode: "forwards" }}
              >
                <img
                  src={card.img}
                  alt="trek"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="relative py-28 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-28 items-center">
            {/* -------- LEFT CONTENT -------- */}
            <div>
              <span className="text-sm uppercase tracking-widest text-green-600 font-semibold">
                About TrekkVede
              </span>

              <h2 className="text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
                Who We Are
              </h2>

              {/* Accent line */}
              <div className="w-20 h-1 bg-green-600 mt-6 rounded-full" />

              <p className="text-gray-600 mt-8 leading-relaxed text-lg">
                TrekVede is a premium trekking platform crafted for explorers
                who crave authentic Himalayan adventures. We are not just a
                trekking company—we are a community of passionate mountaineers,
                nature lovers, and travel professionals who believe that the
                mountains are best experienced with respect, responsibility, and
                preparation.
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                Founded with a vision to redefine trekking standards in India,
                TrekVede bridges the gap between adventure and professionalism.
                Every trek we design is thoughtfully curated, blending raw
                Himalayan beauty with structured planning, modern safety
                protocols, and ethical tourism practices.
              </p>
            </div>

            {/* -------- RIGHT IMAGES -------- */}
            <div className="relative">
              {/* Main Image */}
              <img
                src="/Sample1.heic"
                alt="Trekking Adventure"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />

              {/* Overlapping Image */}
              <img
                src="/Sample1.heic"
                alt="Himalayan Trek"
                className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-00  object-cover rounded-3xl shadow-xl border-8 border-white hidden md:block"
              />

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-500">Trusted by</p>
                <p className="text-xl font-bold text-gray-900">
                  Adventure Lovers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="w-full min-h-screen px-6 py-20 bg-gray-50 bg-gradient-to-br from-white via-emerald-50 to-white">
        <h2 className="text-4xl font-bold text-center text-green-800">
          Why Choose TrekVede
        </h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch h-full">
          {/* Left Column */}
          <div className="grid gap-6">
            <div className="bg-green-800 text-white rounded-2xl p-6 flex items-start gap-4 h-full">
              <div className="text-2xl">🌞</div>
              <div>
                <h3 className="font-semibold">Certified Trek Leaders</h3>
                <p className="text-sm mt-1">
                  Trained in mountaineering, safety & first aid.
                </p>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-6 flex items-start gap-4 border border-gray-200 h-full">
              <div className="text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold">Safety First</h3>
                <p className="text-sm mt-1">
                  Medical kits, oxygen cylinders & protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="row-span-2 h-full">
            <img
              src="/Demo1.webp"
              alt="Trekking"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="grid gap-6">
            <div className="bg-green-800 text-white rounded-2xl p-6 flex items-start gap-4 h-full">
              <div className="text-2xl">📅</div>
              <div>
                <h3 className="font-semibold">Eco-Friendly Treks</h3>
                <p className="text-sm mt-1">
                  Responsible trekking & sustainability.
                </p>
              </div>
            </div>
            <div className="bg-black text-white rounded-2xl p-6 flex items-start gap-4 h-full">
              <div className="text-2xl">⚙️</div>
              <div>
                <h3 className="font-semibold">Custom Itineraries</h3>
                <p className="text-sm mt-1">
                  Tailor-made experiences for all levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20 bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-emerald-100">Happy Trekkers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-emerald-100">Treks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-emerald-100">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15</div>
            <div className="text-emerald-100">Countries Covered</div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="core_values_col  bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                <span className="text-green-800 mr-2">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM & FACILITIES ================= */}
      <TeamFacilitiesSection />
    </div>
  );
};

export default AboutUsPage;
