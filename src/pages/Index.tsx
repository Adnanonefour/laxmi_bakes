import HeroSection from "@/components/HeroSection";
import FeaturedCakes from "@/components/FeaturedCakes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import PrepTimeBanner from "@/components/PrepTimeBanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      
      {/* Highlight Banner */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <PrepTimeBanner />
        </div>
      </section>

      <FeaturedCakes />
      <WhyChooseUs />
      <Testimonials />
      <InstagramGallery />
    </main>
  );
};

export default Index;
