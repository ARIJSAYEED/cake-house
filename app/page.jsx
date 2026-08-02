import About from "./components/pages/aboutUs/About";
import FeaturedCakes from "./components/pages/home/FeaturedCakes";
import Footer from "./components/pages/home/Footer";
import Hero from "./components/pages/home/Hero";
import HowItWorks from "./components/pages/home/HowItWorks";
import OrderCta from "./components/pages/home/OrderCta";
import Reviews from "./components/pages/home/Reviews";
import WhyChooseMe from "./components/pages/home/WhyChooseMe";


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyChooseMe />
        <FeaturedCakes />
        {/* <About /> */}
        <HowItWorks />
        <Reviews></Reviews>
        <OrderCta />
      </main>
      <Footer />
    </>
  );
}
