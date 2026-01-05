import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaMountain } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddSiderForm = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
    },
    {
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto grid grid-cols-12 gap-1 h-[300px] md:h-[420px]">
      {/* BIG IMAGE SWIPER */}
      <div className="col-span-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img
                  src={s.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                  <FaMountain size={36} className="mb-3" />
                  <h3 className="text-2xl font-bold">TREK EXPERIENCE</h3>
                  <p className="opacity-90">Scenic Brahmatal Views</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT GRID - STATIC */}
      <div className="col-span-6 grid grid-cols-2 grid-rows-2 gap-1">
        {galleryImages.slice(1, 5).map((img, i) =>
          i === 3 ? (
            <div
              key={i}
              onClick={() => navigate("/trek-gallery")}
              className="relative cursor-pointer"
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-bold">
                +6 More
              </div>
            </div>
          ) : (
            <img
              key={i}
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          )
        )}
      </div>
    </div>
  );
};

export default AddSiderForm;
