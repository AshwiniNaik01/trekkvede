import React from "react";

const trekInfo = [
  {
    title: "TREK DIFFICULTY",
    value: "Easy – Moderate",
    img: "https://images.prismic.io/indiahike/aEkehLNJEFaPX2TN_difficultyicon_easymoderate.png",
  },
  {
    title: "TREK DURATION",
    value: "6 Days / 22 km",
    img: "https://images.prismic.io/indiahike/4902f37f-15b9-4b5d-ace9-ad71d477a4e9_Trek_duration_icon.png",
  },
  {
    title: "HIGHEST ALTITUDE",
    value: "12,250 ft",
    img: "https://images.prismic.io/indiahike/c67b49bd-854f-4450-a803-a24db9f283fd_Highest_altitude_icon.png",
  },
  {
    title: "SUITABLE FOR",
    value: "8 Years & Above",
    img: "https://images.prismic.io/indiahike/cefde51a-92aa-4cc0-a80b-cd7f98c51d5e_Age+Icon+.png",
  },
  {
    title: "BASECAMP",
    value: "Lohajung, Uttarakhand",
    img: "https://images.prismic.io/indiahike/07baea47-6aea-47fb-80e1-c79f051d7596_How_to_reach_the_basecamp.png",
  },
  {
    title: "ACCOMMODATION",
    value: "Tents",
    img: "https://images.prismic.io/indiahike/ZwPatbVsGrYSwcir_tent_icon.png",
  },
  {
    title: "FITNESS CRITERIA",
    value: "5 km in 38 mins",
    img: "https://images.prismic.io/indiahike/766f83b1-1cbc-4435-8e00-d93c6ba79c14_How_to_get_fit.png",
  },
  {
    title: "PICKUP",
    value: "Rishikesh – 5:30 AM",
    img: "https://images.prismic.io/indiahike/Z_ZYHHdAxsiBwews_PickupTime_icon.png",
  },
  {
    title: "DROPOFF",
    value: "Rishikesh – 7:00 PM",
    img: "https://images.prismic.io/indiahike/Z_ZYG3dAxsiBwewr_DropOffTime_icon.png",
  },
  {
    title: "GEAR RENTAL",
    value: "Available",
    img: "https://images.prismic.io/indiahike/aSbv_WGnmrmGqWJ3_rentalgearquickinfoicon.jpg",
  },
  {
    title: "CLOAKROOM",
    value: "Available",
    img: "https://images.prismic.io/indiahike/Z-5jYHdAxsiBwREN_Cloakroom_Icon_New.png",
  },
  {
    title: "OFFLOADING",
    value: "Available",
    img: "https://images.prismic.io/indiahike/Z-4my3dAxsiBwQLj_OffloadingIcon.png",
  },
];

const TrekInfoCard = () => {
  return (
    <section className="w-full py-14 bg-gradient-to-br from-sky-200 via-white to-emerald-200">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold font-serif  text-center text-gray-900 mb-16 drop-shadow-lg">
          Trek <span className="text-emerald-600">Quick Facts</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {trekInfo.map((item, index) => (
            <div
              key={index}
              className="group bg-white/20 backdrop-blur-xl border border-white/30 
                     rounded-3xl p-6 flex flex-col items-center text-center
                     shadow-md hover:shadow-2xl hover:-translate-y-3 
                     transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 
                        flex items-center justify-center mb-4 group-hover:scale-110 
                        transition-transform duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xs font-semibold text-gray-700 tracking-wide">
                {item.title}
              </h3>

              <p className="text-sm font-bold text-gray-800 mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekInfoCard;
