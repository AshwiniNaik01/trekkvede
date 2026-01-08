import React, { useState } from "react";
import {
  Snowflake,
  Leaf,
  Sun,
  ChevronDown,
  Info,
  CheckCircle2,
  ShieldCheck,
  IndianRupee,
  Clock,
  Calendar,
  AlertCircle
} from "lucide-react";

const months = [
  {
    month: "January 2026",
    season: "Big Snow",
    icon: <Snowflake className="w-4 h-4 text-blue-500" />,
    badge: "Peak Winter",
    color: "bg-blue-50 text-blue-700"
  },
  {
    month: "February 2026",
    season: "Big Snow",
    icon: <Snowflake className="w-4 h-4 text-blue-500" />,
    badge: "Snowy Trails",
    color: "bg-indigo-50 text-indigo-700"
  },
  {
    month: "March 2026",
    season: "Blooming Rhodos",
    icon: <Leaf className="w-4 h-4 text-pink-500" />,
    badge: "Best Flora",
    color: "bg-pink-50 text-pink-700"
  },
  {
    month: "November 2026",
    season: "Clear Views",
    icon: <Sun className="w-4 h-4 text-yellow-500" />,
    badge: "Crystal Views",
    color: "bg-yellow-50 text-yellow-700"
  },
];

const TrekFeeSidebar = () => {
  const [openMonth, setOpenMonth] = useState(null);

  return (
    <div className="space-y-6">
      {/* PRICE HEADER */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16 blur-2xl"></div>

        <div className="relative z-10 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Total Trek Fee</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">₹11,450</span>
            <span className="text-xs opacity-60">/ person</span>
          </div>
          <p className="text-[10px] opacity-60 font-medium">Inclusive of all taxes & 5% GST</p>
        </div>
      </div>

      {/* COST BREAKUP */}
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
            <ShieldCheck size={14} className="text-emerald-500" />
          </div>
          <span>₹180 Trek Insurance included</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
            <Clock size={14} className="text-blue-500" />
          </div>
          <span>₹2,800 Transport from Basecamp</span>
        </div>
      </div>

      {/* OPTIONAL ADD-ONS */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Special Upgrades</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50/50 p-3 hover:border-emerald-200 transition-colors group cursor-help">
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-emerald-500 transition-colors">Trek Shield</span>
            <span className="text-sm font-black text-gray-900">₹750</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50/50 p-3 hover:border-blue-200 transition-colors group cursor-help">
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-blue-500 transition-colors">Offloading</span>
            <span className="text-sm font-black text-gray-900">₹1,600</span>
          </div>
        </div>
      </div>

      {/* ELIGIBILITY BADGES */}
      <div className="space-y-2">
        <div className="flex items-start gap-3 rounded-xl bg-emerald-50/50 border border-emerald-100/50 p-3 text-[11px] leading-relaxed group">
          <div className="mt-0.5 p-1 bg-white rounded-md shadow-sm border border-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform">
            <CheckCircle2 size={12} />
          </div>
          <p className="text-gray-700">
            <strong className="text-emerald-700">Pro Trekker Eligible</strong>
            <br />Your 5th trek with us is completely <span className="font-bold">FREE</span>.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-blue-50/50 border border-blue-100/50 p-3 text-[11px] leading-relaxed group">
          <div className="mt-0.5 p-1 bg-white rounded-md shadow-sm border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
            <Info size={12} />
          </div>
          <p className="text-gray-700">
            <strong className="text-blue-700">Govt. Employees</strong>
            <br />Avail <span className="font-bold">Special Casual Leave (SCL)</span>.
          </p>
        </div>
      </div>

      {/* DATE SELECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Available Batches</h4>
          <Calendar size={14} className="text-gray-400" />
        </div>

        <div className="space-y-2.5">
          {months.map((m, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl border transition-all duration-300 ${openMonth === i
                  ? "border-emerald-500 ring-4 ring-emerald-50 bg-white"
                  : "border-gray-100 bg-white hover:border-gray-300 hover:shadow-lg"
                }`}
              onClick={() => setOpenMonth(openMonth === i ? null : i)}
            >
              <div className="flex items-center justify-between p-3.5 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${openMonth === i ? 'bg-emerald-500 text-white' : 'bg-gray-50'}`}>
                    {openMonth === i ? <Calendar size={18} /> : m.icon}
                  </div>
                  <div>
                    <p className={`font-bold text-[13px] ${openMonth === i ? 'text-emerald-700' : 'text-gray-900'}`}>{m.month}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{m.season}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tight ${m.color}`}>
                    {m.badge}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-gray-300 transition-transform duration-500 ${openMonth === i ? "rotate-180 text-emerald-500" : "group-hover:text-gray-600"
                      }`}
                  />
                </div>
              </div>

              {openMonth === i && (
                <div className="px-4 pb-4 pt-1 animate-fade-in">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700">
                      <AlertCircle size={10} />
                      Limited Slots Left
                    </div>
                    <button className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-md hover:bg-emerald-700 transition shadow-sm">
                      Check Dates
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ACTION LINKS */}
      <div className="grid grid-cols-2 gap-y-3 px-1 pt-2">
        {["Inclusions", "Cancellation", "Scholarships", "Rules"].map((link) => (
          <a key={link} href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 hover:text-emerald-600 transition-colors group">
            <div className="w-1 h-1 rounded-full bg-gray-200 group-hover:bg-emerald-400 transition-colors"></div>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrekFeeSidebar;
