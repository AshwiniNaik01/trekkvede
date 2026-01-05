import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  X,
  ChevronDown,
  Mountain,
  Compass,
  Sun,
  Sparkles,
  TrendingUp,
  Award,
  Heart,
  ShoppingCart,
  ChevronRight
} from 'lucide-react';

const PopularTreks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTreks, setFilteredTreks] = useState([]);

  const allTreks = [
    {
      id: 1,
      title: "Everest Base Camp",
      location: "Nepal Himalayas",
      difficulty: "Challenging",
      duration: "14 Days",
      groupSize: "4-12 People",
      price: 1899,
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      featured: true,
      season: "Spring/Autumn",
      altitude: "5,364m",
      tags: ["Himalayas", "Classic", "High Altitude"],
    },
    {
      id: 2,
      title: "Inca Trail to Machu Picchu",
      location: "Peruvian Andes",
      difficulty: "Moderate",
      duration: "7 Days",
      groupSize: "6-16 People",
      price: 1299,
      rating: 4.8,
      reviews: 215,
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      season: "May-Sep",
      altitude: "4,200m",
      tags: ["Archaeology", "Cultural", "UNESCO"],
    },
    {
      id: 3,
      title: "Kilimanjaro Summit",
      location: "Tanzania",
      difficulty: "Difficult",
      duration: "9 Days",
      groupSize: "4-10 People",
      price: 2499,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      season: "Jun-Oct",
      altitude: "5,895m",
      tags: ["Africa", "Volcano", "Seven Summits"],
    },
    {
      id: 4,
      title: "Annapurna Circuit",
      location: "Nepal",
      difficulty: "Challenging",
      duration: "18 Days",
      groupSize: "4-12 People",
      price: 1599,
      rating: 4.9,
      reviews: 278,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      featured: true,
      season: "Mar-May, Sep-Nov",
      altitude: "5,416m",
      tags: ["Himalayas", "Classic", "Cultural"],
    },
    {
      id: 5,
      title: "Torres del Paine Circuit",
      location: "Patagonia, Chile",
      difficulty: "Difficult",
      duration: "10 Days",
      groupSize: "4-8 People",
      price: 2199,
      rating: 4.8,
      reviews: 154,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      season: "Nov-Mar",
      altitude: "1,000m",
      tags: ["Patagonia", "Glaciers", "Wilderness"],
    },
    {
      id: 6,
      title: "Tour du Mont Blanc",
      location: "Swiss Alps",
      difficulty: "Moderate",
      duration: "12 Days",
      groupSize: "6-14 People",
      price: 1899,
      rating: 4.9,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070",
      season: "Jun-Sep",
      altitude: "2,665m",
      tags: ["Alps", "Europe", "Scenic"],
    }
  ];

  const difficultyOptions = [
    { value: 'all', label: 'All Difficulties', color: 'bg-gray-100 text-gray-800' },
    { value: 'easy', label: 'Easy', color: 'bg-emerald-100 text-emerald-800', count: 3 },
    { value: 'moderate', label: 'Moderate', color: 'bg-amber-100 text-amber-800', count: 5 },
    { value: 'challenging', label: 'Challenging', color: 'bg-orange-100 text-orange-800', count: 7 },
    { value: 'difficult', label: 'Difficult', color: 'bg-red-100 text-red-800', count: 4 }
  ];

  const durationOptions = [
    { value: 'all', label: 'All Durations' },
    { value: 'short', label: '1-3 Days', count: 5 },
    { value: 'medium', label: '4-7 Days', count: 8 },
    { value: 'long', label: '8-14 Days', count: 10 },
    { value: 'extended', label: '15+ Days', count: 3 }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $500', min: 0, max: 500 },
    { value: 'standard', label: '$500 - $1500', min: 500, max: 1500 },
    { value: 'premium', label: '$1500 - $2500', min: 1500, max: 2500 },
    { value: 'luxury', label: 'Above $2500', min: 2500, max: 10000 }
  ];

  useEffect(() => {
    let results = allTreks;

    if (searchQuery) {
      results = results.filter(trek =>
        trek.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trek.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trek.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedDifficulty !== 'all') {
      results = results.filter(trek => 
        trek.difficulty.toLowerCase().includes(selectedDifficulty)
      );
    }

    if (selectedDuration !== 'all') {
      const getDays = (duration) => parseInt(duration.split(' ')[0]);
      switch (selectedDuration) {
        case 'short':
          results = results.filter(trek => getDays(trek.duration) <= 3);
          break;
        case 'medium':
          results = results.filter(trek => getDays(trek.duration) >= 4 && getDays(trek.duration) <= 7);
          break;
        case 'long':
          results = results.filter(trek => getDays(trek.duration) >= 8 && getDays(trek.duration) <= 14);
          break;
        case 'extended':
          results = results.filter(trek => getDays(trek.duration) >= 15);
          break;
      }
    }

    if (selectedPrice !== 'all') {
      const range = priceRanges.find(r => r.value === selectedPrice);
      if (range) {
        results = results.filter(trek => trek.price >= range.min && trek.price <= range.max);
      }
    }

    setFilteredTreks(results);
  }, [searchQuery, selectedDifficulty, selectedDuration, selectedPrice]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedDuration('all');
    setSelectedPrice('all');
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'moderate': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'challenging': return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'difficult': return 'bg-red-100 text-red-800 border border-red-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <section id="treks" className="py-20 bg-gradient-to-b from-amber-50 via-gray-200 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full mb-6 shadow-md">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold tracking-wide">EXPLORE ADVENTURES</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Discover World-Class
            <span className="text-emerald-800"> Trekking Experiences</span>
          </h1>

          <p className="text-gray-900 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
            Handpicked treks across the globe's most spectacular landscapes. 
            Find your perfect adventure with our curated collection.
          </p>

          {/* Stats Cards */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">{allTreks.length}</div>
              <div className="text-sm text-gray-600 font-medium">Treks Available</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">25+</div>
              <div className="text-sm text-gray-600 font-medium">Countries</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">98%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">10K+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Trekkers</div>
            </div>
          </div> */}
        </div>

        {/* Search and Filter Section */}
    <div className="mb-12 mx-30">
  <div className="p-2  rounded-b-lg">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center">
      
      {/* Destination / Event */}
      <div className="lg:col-span-4 relative">
        <label className="block text-md font-semibold text-black mb-1 px-3">
          Destination / Event
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
          <input
            type="text"
            placeholder="Harishchandragad, Rafting"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-black rounded-xl border-2 border-emerald-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
          />
        </div>
      </div>

      {/* Date */}
      <div className="lg:col-span-3 text-black">
        <label className="block text-md font-semibold text-black mb-1 px-3">
          Date
        </label>
        <input
          type="date"
          className="w-full px-4 py-3 text-black rounded-xl border-2 border-emerald-900 focus:border-amber-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
        />
      </div>

      {/* Travellers */}
      <div className="lg:col-span-3">
        <label className="block text-md font-semibold text-black mb-1 px-3">
          Travellers
        </label>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="w-full px-4 py-3 text-black rounded-xl border-2 border-emerald-900 focus:border-amber-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
        />
      </div>

      {/* Search Button */}
      <div className="lg:col-span-2 flex items-end mt-5">
        <button
          className="w-full bg-amber-500 hover:bg-amber-700 text-white py-3 rounded-xl text-lg font-bold transition-all duration-200 shadow-md"
        >
          Search
        </button>
      </div>
    </div>
  </div>

  {/* Optional: Clear Filters */}
  {(searchQuery || selectedDifficulty !== "all" || selectedDuration !== "all" || selectedPrice !== "all") && (
    <div className="flex gap-3 mt-4">
      <button
        onClick={clearFilters}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
      >
        <X className="w-4 h-4" />
        Clear All
      </button>
    </div>
  )}
</div>


        {/* Results Section */}
        <div className="mb-12 mx-20">
          {/* Results Header */}
          {/* <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {filteredTreks.length} {filteredTreks.length === 1 ? 'Trek' : 'Treks'} Found
              </h3>
              <p className="text-gray-600 text-sm">
                Showing {Math.min(6, filteredTreks.length)} of {filteredTreks.length} results
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-500 text-sm">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration</option>
                <option>Difficulty</option>
              </select>
            </div>
          </div> */}

          {/* Treks Grid */}
          {filteredTreks.length === 0 ? (
            <div className="text-center py-16 bg-gradient-to-br from-white to-emerald-50 rounded-2xl border border-gray-200">
              <Compass className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Treks Found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or filters to discover amazing adventures
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Show All Treks
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTreks.slice(0, 6).map((trek) => (
                <div
                  key={trek.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg border-3 border-emerald-900 transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-68 overflow-hidden">
                    <img
                      src={trek.image}
                      alt={trek.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Featured Badge */}
                    {trek.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-semibold rounded">
                          FEATURED
                        </span>
                      </div>
                    )}

                    {/* Difficulty Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getDifficultyColor(trek.difficulty)}`}>
                        {trek.difficulty}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="ml-1 text-sm font-semibold text-gray-900">{trek.rating}</span>
                      <span className="ml-1 text-xs text-gray-600">({trek.reviews})</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded hover:bg-white transition-colors">
                        <ShoppingCart className="w-4 h-4 text-gray-600 hover:text-emerald-600" />
                      </button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 bg-emerald-50">
                    {/* Title and Location */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                        {trek.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{trek.location}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 mb-">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-emerald-600 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Duration</div>
                          <div className="text-sm font-medium text-gray-900">{trek.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-emerald-600 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Group Size</div>
                          <div className="text-sm font-medium text-gray-900">{trek.groupSize}</div>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div>
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-xl font-bold text-gray-900">${trek.price.toLocaleString()}</div>
                      </div>
                      <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View More Section */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group">
            View All {allTreks.length}+ Treks
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default PopularTreks;