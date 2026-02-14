import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Clock, Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatured = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gold-light/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground">
                <Sparkles className="w-4 h-4 text-gold" />
                Home Bakery • Made with Love
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Freshly Baked Cakes,{" "}
                <span className="gold-accent">Made Just for You</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Every cake is baked fresh after your order. No preservatives, just pure homemade goodness delivered to your doorstep.
              </p>
            </div>

            {/* Prep time banner */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-primary/10 border-2 border-primary/30 rounded-2xl">
                <Clock className="w-5 h-5 text-primary animate-bounce-gentle" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-primary">
                    Freshly Made on Order
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Delivered After Minimum 2 Hours
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/cakes">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Order Fresh Cake Now
                </Button>
              </Link>
              <Link to="/customize">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Create Custom Cake
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>100% Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Eggless Options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span>Same Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full animate-pulse" />
              
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
                alt="Delicious chocolate cake"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full shadow-large"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 right-8 px-4 py-2 bg-card rounded-full shadow-medium floating-animation">
                <span className="text-sm font-medium">🎂 Best Seller</span>
              </div>
              <div className="absolute -bottom-2 left-4 px-4 py-2 bg-card rounded-full shadow-medium floating-animation" style={{ animationDelay: "0.5s" }}>
                <span className="text-sm font-medium">⭐ 4.9 Rating</span>
              </div>
              <div className="absolute top-1/2 -left-4 px-4 py-2 bg-card rounded-full shadow-medium floating-animation" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-medium">🥧 500+ Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce-gentle">
          <span className="text-xs text-muted-foreground">Explore</span>
          <button
            onClick={scrollToFeatured}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Scroll to featured cakes"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
