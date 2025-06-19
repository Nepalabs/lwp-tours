import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TravelThemes from "./components/TravelThemes";
import SmallGroupTours from "./components/SmallGroupTours";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingProcess from "./components/BookingProcess";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TravelThemes />
        <SmallGroupTours />
        <WhyChooseUs />
        <BookingProcess />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
