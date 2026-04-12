import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/cakes";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden z-0">
      {/* --- STRICT THEME BACKGROUND BLEND --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-6 border-primary/50 text-primary px-5 py-2 rounded-full uppercase tracking-widest text-xs font-bold bg-background/50 backdrop-blur-sm shadow-sm"
          >
            Happy Customers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Join hundreds of happy customers who celebrate their special moments
            with us.
          </p>
        </div>

        {/* Premium Testimonials Grid - Now 2 columns on mobile! */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              // Adjusted padding and radiuses for smaller screens so content doesn't get squished
              className="relative p-5 sm:p-6 md:p-8 bg-card rounded-2xl md:rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up group flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large Decorative Quote Icon */}
              <Quote className="absolute top-3 right-3 md:top-6 md:right-6 w-6 h-6 md:w-12 md:h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-500 -rotate-12" />

              <div>
                {/* Golden Rating Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-4 md:mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Elegant Italic Text - Scaled for mobile */}
                <p className="text-foreground/90 text-[11px] sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 italic relative z-10 line-clamp-5 sm:line-clamp-none">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Details Profile */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pt-3 md:pt-5 border-t border-border/60">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-xs md:text-lg shadow-md shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-foreground text-[10px] sm:text-sm truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-[9px] sm:text-xs text-primary font-medium truncate mt-0.5">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
