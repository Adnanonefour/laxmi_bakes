import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedCakes from "@/components/FeaturedCakes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import OurPromiseBanner from "@/components/OurPromiseBanner";
import { supabase } from "@/lib/supabase";

const Index = () => {
  // 1. Create a "State" to hold your cakes
  const [popularCakes, setPopularCakes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the data when the page loads
  useEffect(() => {
    const fetchPopularCakes = async () => {
      try {
        const { data, error } = await supabase
          .from("cakes")
          .select("*")
          .eq("is_popular", true); // This targets the "Popular" checkbox in Admin

        if (error) throw error;
        if (data) setPopularCakes(data);
      } catch (err) {
        console.error("Error fetching featured cakes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularCakes();
  }, []);

  return (
    <main>
      <HeroSection />

      <section className="py-12 relative z-10 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <OurPromiseBanner />
        </div>
      </section>

      {/* 3. Pass the dynamic data to FeaturedCakes */}
      {/* Only render FeaturedCakes IF popularCakes actually exists and has items */}
      {popularCakes && popularCakes.length > 0 ? (
        <FeaturedCakes cakes={popularCakes} />
      ) : (
        <div className="py-20 text-center text-muted-foreground">
          {loading
            ? "Baking your favorites..."
            : "No featured cakes right now."}
        </div>
      )}

      <WhyChooseUs />
      <Testimonials />
      <InstagramGallery />
    </main>
  );
};

export default Index;
