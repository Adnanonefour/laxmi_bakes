import { Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
  "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80",
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&q=80",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
];

const InstagramGallery = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden z-0">
      {/* --- STRICT THEME BACKGROUND BLEND --- */}
      {/* 1. Base gradient ensuring seamless edges (removed for flat design) */  }

      {/* 2. Your requested ambient orbs (using Primary and Secondary theme colors) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Our Promise component is now extracted natively to PrepTimeBanner */}

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 flex flex-col items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6"
          >
            <Badge
              variant="outline"
              className="border-primary/30 text-primary px-5 py-2 rounded-full uppercase tracking-widest text-xs font-bold bg-background/50 backdrop-blur-sm shadow-sm flex items-center gap-2 hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              @laxmibakes
            </Badge>
          </a>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Follow Our Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Get inspired by our latest creations, behind-the-scenes moments, and
            happy customer celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-[0px] group-hover:backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
