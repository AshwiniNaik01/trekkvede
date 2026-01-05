import FeaturedTreks from "../../components/hero/FeaturedTreks";
import Gallery from "../../components/hero/Gallery";
import Hero from "../../components/hero/Hero";
import PopularTreks from "../../components/hero/PopularTreks";
import Testimonials from "../../components/hero/Testimonials";
import TrekCategories from "../../components/hero/TrekCategories";
import UpcomingDepartures from "../../components/hero/UpcomingDepartures";

const HomePage = () => {
  return (
    <>
      <Hero />
        <UpcomingDepartures />
      <PopularTreks />
      <TrekCategories />
      {/* <Booking /> */}
      <FeaturedTreks />
    

      {/* <HowItWorks /> */}
      <Gallery />
      <Testimonials />
      {/* <SafetySection /> */}
      {/* <WhyChooseUs /> */}
      {/* <FAQs />
      <AboutUs />
      <CTASection /> */}
    </>
  );
};

export default HomePage;
