import { useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Cake {
  id: string;
  name: string;
  short_description: string;
  starting_price: number;
  image: string;
  category: string;
  is_popular?: boolean;
}

export default function FeaturedCakes({ cakes }: { cakes: Cake[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!cakes || cakes.length === 0) return null;

  // Scroll function for the left/right buttons (Desktop)
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of the visible width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="featured"
      className="py-20 md:py-28 relative overflow-hidden z-0 bg-background"
    >
 
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/20 -z-10 pointer-events-none" />
      <div className="absolute top-10 -right-20 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[25rem] h-[25rem] bg-secondary/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/50 text-primary px-4 py-1.5 rounded-full uppercase tracking-widest text-xs font-semibold bg-background/50 backdrop-blur-sm shadow-sm"
          >
            Best Sellers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Our Popular Creations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl px-2">
            Handcrafted with love and the finest ingredients. These are the
            favorites that our customers keep coming back for.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
   
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-[40%] -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-background border border-border/50 rounded-full shadow-lg items-center justify-center text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrolling Track - Highly Mobile Optimized */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 md:px-0"
          >
            {cakes.map((cake, index) => (
              <div
                key={cake.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="w-[65vw] max-w-[220px] sm:max-w-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] flex-shrink-0 snap-center sm:snap-start cake-card group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay so text is always readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {cake.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 min-h-[36px] sm:min-h-[40px] leading-relaxed">
                      {cake.short_description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/60">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        Starting at
                      </span>
                      <span className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                        ₹{cake.starting_price}
                      </span>
                    </div>

                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="rounded-full px-4 sm:px-5 h-9 sm:h-10 text-xs sm:text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-transform"
                    >
                      <Link to={`/customize/${cake.id}`}>Order</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-[40%] -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-background border border-border/50 rounded-full shadow-lg items-center justify-center text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-full px-8 h-14 text-base border-2 hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
          >
            <Link to="/cakes">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
