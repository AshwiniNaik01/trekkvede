import { useState } from "react";
import {
  FaSnowflake,
  FaLeaf,
  FaSun,
  FaChevronDown,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

const months = [
  {
    month: "January 2026",
    season: "Big Snow",
    icon: <FaSnowflake className="text-blue-500" />,
    badge: "Peak Winter",
  },
  {
    month: "February 2026",
    season: "Big Snow",
    icon: <FaSnowflake className="text-blue-500" />,
    badge: "Snowy Trails",
  },
  {
    month: "March 2026",
    season: "Blooming Rhodos",
    icon: <FaLeaf className="text-pink-500" />,
    badge: "Best Flora",
  },
  {
    month: "November 2026",
    season: "Clear Views",
    icon: <FaSun className="text-yellow-500" />,
    badge: "Crystal Views",
  },
];

const TrekFeeSidebarCompact = () => {
  const [openMonth, setOpenMonth] = useState(null);

  return (
    <aside className="sticky top-6 space-y-5 rounded-2xl bg-white p-5 shadow-xl border border-gray-200">
      {/* PRICE HEADER */}
      <div className="rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 p-4 text-white">
        <p className="text-xs opacity-90">Trek Fee</p>
        <p className="text-3xl font-extrabold">₹11,450</p>
        <p className="text-xs mt-1 opacity-90">+ 5% GST</p>
      </div>

      {/* COST BREAKUP */}
      <div className="space-y-1 text-xs text-gray-600">
        <p>• ₹180 Trek Insurance</p>
        <p>• ₹2,800 Transport (Basecamp)</p>
      </div>

      {/* OPTIONAL ADD-ONS */}
      <div>
        <p className="text-sm font-semibold mb-2">Optional Add-ons</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            ₹750 Shield
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            ₹1,600 Offloading
          </span>
        </div>
      </div>

      {/* PRO TREKKER */}
      <div className="flex gap-2 rounded-xl bg-green-50 border border-green-200 p-3 text-xs text-green-800">
        <FaCheckCircle className="mt-0.5 shrink-0" />
        <p>
          <b>Pro Trekker Eligible</b>
          <br />
          5th trek is <b>FREE</b> with us
        </p>
      </div>

      {/* GOVT INFO */}
      <div className="flex gap-2 rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-800">
        <FaInfoCircle className="mt-0.5 shrink-0" />
        <p>
          Central Govt. employees can avail
          <br />
          <b>Special Casual Leave</b>
        </p>
      </div>

      {/* QUICK LINKS */}
      <div className="grid grid-cols-2 gap-2 text-xs font-medium text-yellow-700">
        <a href="#">Inclusions</a>
        <a href="#">Terms</a>
        <a href="#">Cancellation</a>
        <a href="#">Scholarships</a>
      </div>

      {/* DATE SELECTION */}
      <div>
        <p className="text-sm font-bold mb-2">Select Date – 2026</p>

        <div className="space-y-3">
          {months.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-gray-50 p-3 hover:shadow-md transition cursor-pointer"
              onClick={() => setOpenMonth(openMonth === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{m.month}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    {m.icon} {m.season}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-700">
                    {m.badge}
                  </span>
                  <FaChevronDown
                    className={`transition-transform ${
                      openMonth === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {openMonth === i && (
                <div className="mt-3 rounded-lg bg-green-50 p-2 text-xs text-green-700">
                  ✔ Slots Available
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TrekFeeSidebarCompact;
