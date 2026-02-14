import { Instagram } from "lucide-react";

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
    <section className="py-16 md:py-24 gradient-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full mb-4">
            <Instagram className="w-5 h-5 text-pink-dark" />
            <span className="font-medium text-foreground">@honeydukes_bakery</span>
          </div>
          <h2 className="section-title mb-4">Follow Our Journey</h2>
          <p className="text-muted-foreground">
            Get inspired by our latest creations and behind-the-scenes moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
