// const FAQs = () => (
//   <section className="py-16 bg-gray-50">
//     <h2 className="text-center text-3xl mb-6">FAQs</h2>
//     <div className="max-w-3xl mx-auto space-y-4">
//       <p><strong>Is it safe?</strong> Yes, with trained leaders.</p>
//       <p><strong>Do I need experience?</strong> No, beginner treks available.</p>
//     </div>
//   </section>
// );

// export default FAQs;


import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  Heart, 
  MapPin, 
  Users,
  Mountain,
  Star,
  Zap
} from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqItems = [
    {
      id: 1,
      question: "Is trekking safe for beginners?",
      answer: "Absolutely! All our treks are led by certified guides with wilderness first aid training. We maintain a 1:4 guide-to-trekker ratio, carry satellite communication, and have emergency evacuation plans in place. Safety is our top priority.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      category: "Safety",
      stats: "99.7% Safety Record"
    },
    {
      id: 2,
      question: "What experience level do I need?",
      answer: "We offer treks for all levels! From easy day hikes to challenging multi-day expeditions. Our 'Beginner Bliss' series requires no prior experience, just average fitness. Each trek listing clearly indicates the required fitness level.",
      icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      category: "Experience",
      stats: "60% First-Time Trekkers"
    },
    {
      id: 3,
      question: "How do I prepare physically?",
      answer: "We provide a 4-week training guide tailored to each trek's difficulty. For moderate treks, we recommend regular walking and basic cardio. For challenging expeditions, we offer personalized fitness plans and virtual training sessions with our experts.",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      category: "Preparation",
      stats: "Free Training Plans"
    },
    {
      id: 4,
      question: "What's included in the price?",
      answer: "All-inclusive packages cover: certified guides, permits, accommodation (camping/lodges), meals, equipment rental, transportation from base camp, and basic insurance. Exclusions: personal gear, travel to starting point, and optional extras.",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      category: "Pricing",
      stats: "No Hidden Costs"
    },
    {
      id: 5,
      question: "Can I trek solo?",
      answer: "Yes! We offer solo-friendly treks with dedicated single supplements. You'll join a small group of like-minded adventurers. 40% of our trekkers join solo - it's a great way to meet new adventure buddies!",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      category: "Solo Travel",
      stats: "40% Solo Trekkers"
    },
    {
      id: 6,
      question: "What's the best time to trek?",
      answer: "It varies by destination! Himalayan treks are best March-May & Sept-Nov. Patagonia: Nov-March. European Alps: June-September. We provide season-specific recommendations for each destination on our detailed trek pages.",
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      category: "Timing",
      stats: "Optimal Season Guide"
    },
    {
      id: 7,
      question: "What equipment do I need?",
      answer: "We provide camping gear, cooking equipment, and first aid. You'll need personal items: hiking boots, layered clothing, daypack, water bottles, and sleeping bag (rental available). We send a detailed packing list 30 days before departure.",
      icon: <Mountain className="w-6 h-6 text-amber-500" />,
      category: "Gear",
      stats: "Free Gear Rental"
    },
    {
      id: 8,
      question: "How are groups formed?",
      answer: "Groups are limited to 12 trekkers maximum. We carefully match participants based on fitness levels and trek difficulty. Average group size is 8-10 people. Private group bookings are available for 4+ people with custom dates.",
      icon: <Users className="w-6 h-6 text-cyan-500" />,
      category: "Groups",
      stats: "Max 12 per Group"
    }
  ];

  const categories = [
    { name: "Safety", count: 2, color: "bg-emerald-100 text-emerald-800" },
    { name: "Planning", count: 3, color: "bg-blue-100 text-blue-800" },
    { name: "Booking", count: 2, color: "bg-purple-100 text-purple-800" },
    { name: "Experience", count: 1, color: "bg-amber-100 text-amber-800" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-50 to-transparent rounded-full -translate-x-48 translate-y-48"></div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-bold tracking-wide">QUESTIONS ANSWERED</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Adventure <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Questions</span> Answered
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Everything you need to know before embarking on your journey. Can't find your answer? 
            <a href="#contact" className="text-amber-600 font-semibold ml-2 hover:text-amber-700">
              Contact our adventure specialists →
            </a>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Categories */}
      

          {/* Right Column - FAQs */}
          <div className="lg:w-full">
            <div className="grid gap-6">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg border-2 border-amber-500 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                            {item.category}
                          </span>
                          <span className="text-xs text-emerald-600 font-semibold">
                            {item.stats}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    <div className="p-2 rounded-full bg-gray-100">
                      {openItems[item.id] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openItems[item.id] ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <div className="pl-16 border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.answer}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                        <span>💡</span>
                        <span>Still have questions? </span>
                        <a href="#contact" className="underline hover:text-emerald-700">
                          Ask our specialist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;