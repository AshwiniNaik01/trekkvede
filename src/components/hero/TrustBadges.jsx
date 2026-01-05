// const TrustBadges = () => (
//   <section className="py-12 bg-gray-100">
//     <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
//       <div>⭐ 5K+ Trekkers</div>
//       <div>🏔️ 10+ Years Experience</div>
//       <div>🧭 Certified Guides</div>
//       <div>🛡️ Safety First</div>
//     </div>
//   </section>
// );

// export default TrustBadges;



const TrustBadges = () => (
  <section className="py-16 bg-gradient-to-b from-blue-950/30 to-emerald-950/20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "👑",
            value: "5K+ Elite Trekkers",
            desc: "Royal Adventure Community",
            color: "from-amber-500 to-yellow-500"
          },
          {
            icon: "⛰️",
            value: "10+ Years Legacy",
            desc: "Mountain Masters Since 2013",
            color: "from-blue-500 to-cyan-500"
          },
          {
            icon: "🎖️",
            value: "Certified Royal Guides",
            desc: "International Certification",
            color: "from-emerald-500 to-green-500"
          },
          {
            icon: "⚔️",
            value: "Safety First Protocol",
            desc: "Military Grade Safety",
            color: "from-orange-500 to-amber-500"
          }
        ].map((badge, index) => (
          <div 
            key={index} 
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
              <div className={`text-4xl mb-4 bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
                {badge.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{badge.value}</div>
              <div className="text-sm text-white/60">{badge.desc}</div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;