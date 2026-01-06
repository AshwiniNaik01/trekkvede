// const Gallery = () => (
//   <section className="py-16 bg-gray-100">
//     <h2 className="text-center text-3xl mb-8">Gallery</h2>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
//       {[1,2,3,4].map(i => (
//         <div key={i} className="h-32 bg-gray-300 rounded"></div>
//       ))}
//     </div>
//   </section>
// );

// export default Gallery;



// components/Gallery.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      category: "Mountain Views"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      category: "Summit"
    },
    {
      url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      category: "Trails"
    },
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      category: "Camping"
    },
    {
      url: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      category: "Base Camp"
    },
    {
      url: "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?cs=srgb&dl=pexels-saikat-ghosh-323099-914128.jpg&fm=jpg",
      category: "Himalayans"
    }
  ];

  return (
    <section id="gallery" className="py-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
         <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold tracking-wide text-sm">
             GALLERY
            </span>
            {/* <Mountain className="w-6 h-6" /> */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Moments of
            <span className="text-emerald-700"> Adventure</span>  
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Capture the breathtaking beauty of mountains through the lens of our adventurers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white font-semibold">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        {/* <div className="mt-16 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-amber-900/30 z-10"></div>
          <video
            className="w-full h-[500px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://player.vimeo.com/external/412511534.sd.mp4?s=bf2eaa261ba73441be1166b6d3e2cd4e440f0a0f&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Experience the Journey</h3>
              <p className="text-xl mb-8">Watch our documentary series</p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Watch Series
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 transition-colors duration-300"
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.url === selectedImage);
                const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                setSelectedImage(galleryImages[prevIndex].url);
              }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 transition-colors duration-300"
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.url === selectedImage);
                const nextIndex = (currentIndex + 1) % galleryImages.length;
                setSelectedImage(galleryImages[nextIndex].url);
              }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;