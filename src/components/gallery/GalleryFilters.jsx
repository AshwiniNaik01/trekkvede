// import React from "react";
// import { Calendar, Layers, MapPin, Sparkles, Wind } from "lucide-react";

// const GalleryFilters = ({ filters, setFilters }) => {
//     const filterSections = [
//         {
//             id: "season",
//             label: "Season",
//             icon: <Wind size={16} className="text-blue-400" />,
//             options: ["All", "Winter", "Spring", "Summer", "Autumn"],
//         },
//         {
//             id: "month",
//             label: "Month",
//             icon: <Calendar size={16} className="text-emerald-400" />,
//             options: [
//                 "All", "January", "February", "March", "April", "May", "June",
//                 "July", "August", "September", "October", "November", "December"
//             ],
//         },
//         {
//             id: "year",
//             label: "Year",
//             icon: <Sparkles size={16} className="text-amber-400" />,
//             options: ["All", "2023", "2024", "2025"],
//         },
//         {
//             id: "experience",
//             label: "Experience",
//             icon: <Layers size={16} className="text-indigo-400" />,
//             options: ["All", "Beginner", "Moderate", "Advanced"],
//         },
//         {
//             id: "region",
//             label: "Region",
//             icon: <MapPin size={16} className="text-rose-400" />,
//             options: ["All", "Uttarakhand", "Himachal", "Kashmir", "Nepal", "Sikkim"],
//         },
//     ];

//     return (
//         <div className="space-y-6">
//             {filterSections.map((section) => (
//                 <div key={section.id} className="space-y-3">
//                     <div className="flex items-center gap-2 px-1">
//                         {section.icon}
//                         <label className="text-xs font-black uppercase tracking-widest text-gray-400">
//                             {section.label}
//                         </label>
//                     </div>

//                     <select
//                         value={filters[section.id]}
//                         onChange={(e) => setFilters({ ...filters, [section.id]: e.target.value })}
//                         className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 font-bold text-sm outline-none cursor-pointer focus:ring-2 focus:ring-emerald-500 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJncmF5Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE5IDlsLTcgNy03LTciLz48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center] bg-[length:1em]"
//                     >
//                         {section.options.map((opt) => (
//                             <option key={opt} value={opt}>
//                                 {opt}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default GalleryFilters;


import React from "react";
import { Calendar, Layers, MapPin, Sparkles, Wind } from "lucide-react";

const GalleryFilters = ({ filters, setFilters }) => {
    // Define filter sections
    const filterSections = [
        {
            id: "season",
            label: "Season",
            icon: <Wind size={16} className="text-blue-400" />,
            options: ["All", "Winter", "Spring", "Summer", "Autumn"],
        },
        {
            id: "month",
            label: "Month",
            icon: <Calendar size={16} className="text-emerald-400" />,
            options: [
                "All",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        {
            id: "year",
            label: "Year",
            icon: <Sparkles size={16} className="text-amber-400" />,
            options: ["All", "2023", "2024", "2025"],
        },
        {
            id: "experience",
            label: "Experience",
            icon: <Layers size={16} className="text-indigo-400" />,
            options: ["All", "Beginner", "Moderate", "Advanced"],
        },
        {
            id: "region",
            label: "Region",
            icon: <MapPin size={16} className="text-rose-400" />,
            options: ["All", "Uttarakhand", "Himachal", "Kashmir", "Nepal", "Sikkim"],
        },
    ];

    // Handle filter change
    const handleFilterChange = (id, value) => {
        setFilters((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="space-y-6">
            {filterSections.map((section) => (
                <div key={section.id} className="space-y-3">
                    {/* Label with icon */}
                    <div className="flex items-center gap-2 px-1">
                        {section.icon}
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                            {section.label}
                        </label>
                    </div>

                    {/* Select dropdown */}
                    <select
                        value={filters[section.id] || "All"}
                        onChange={(e) => handleFilterChange(section.id, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 font-bold text-sm outline-none cursor-pointer focus:ring-2 focus:ring-emerald-500 transition-all appearance-none
              bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJncmF5Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE5IDlsLTcgNy03LTciLz48L3N2Zz4=')] 
              bg-no-repeat bg-[right_1rem_center] bg-[length:1em]"
                    >
                        {section.options.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default GalleryFilters;
