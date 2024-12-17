//import { useInView } from "react-intersection-observer";
import Herosection from "./HomeComponents/HeroSection";
import MediaSection from "./HomeComponents/MediaSection";
import MiniGallery from "./HomeComponents/miniGallery";
//import useIntersectionObserver from "./Script/useIntersectionObserver";
import CarousellGallery from "./HomeComponents/CarousellGallery";
import Footer from "./Footer";
import WhyUs from "./HomeComponents/WhyUs";

export default function Homepage() {
  return (
    <section id="Homepage">
      <Herosection />
      <MiniGallery />
      <MediaSection />
      <CarousellGallery />
      <WhyUs />
      <Footer />
    </section>
  );
}
