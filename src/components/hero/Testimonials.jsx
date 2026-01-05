// import React from 'react';

// const reviews = [
//   { name: "Rohan", comment: "Amazing trek! Highly recommend.", image: "/images/user1.jpg" },
//   { name: "Anita", comment: "Great guides and beautiful views!", image: "/images/user2.jpg" },
//   { name: "Vikram", comment: "A lifetime experience!", image: "/images/user3.jpg" },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-10">What Our Trekkers Say</h2>
//         <div className="flex flex-col md:flex-row justify-center gap-8">
//           {reviews.map((review, index) => (
//             <div key={index} className="bg-white p-6 rounded shadow w-64">
//               <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
//               <p className="italic">"{review.comment}"</p>
//               <p className="mt-2 font-bold">{review.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



// components/Testimonials.jsx
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Adventure Photographer",
      content: "The Everest Base Camp trek was the most transformative experience of my life. The guides were incredibly knowledgeable and supportive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000"
    },
    {
      name: "Michael Chen",
      role: "Mountain Enthusiast",
      content: "Professional, safe, and absolutely breathtaking. The Annapurna Circuit exceeded all my expectations. Can't wait for my next adventure!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000"
    },
    {
      name: "Emma Rodriguez",
      role: "First-time Trekker",
      content: "As someone new to trekking, I was nervous. But the team made me feel safe and supported every step of the way. Life-changing experience!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories from
            <span className="text-emerald-700"> Our Adventurers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <Quote className="w-12 h-12 text-emerald-100 mb-6" />
              
              <p className="text-gray-600 italic mb-6 text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
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
      </div>
    </section>
  );
};

export default Testimonials;