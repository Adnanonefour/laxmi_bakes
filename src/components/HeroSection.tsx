import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Clock, Sparkles, ChevronDown } from "lucide-react";
import heroCakeImg from "../assets/chb.webp";

const HeroSection = () => {
  const scrollToFeatured = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
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
                Every cake is baked fresh after your order. No preservatives,
                just pure homemade goodness delivered to your doorstep.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/cakes">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Order Fresh Cake Now
                </Button>
              </Link>
              <Link to="/customize">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
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
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mt-12 lg:mt-0">
              {/* Soft glow replacing the old hard decorative circle */}
              <div className="absolute inset-10 bg-primary/20 rounded-full blur-[60px] animate-pulse -z-10" />

              {/* Main image */}
              <img
                src={heroCakeImg}
                alt="Delicious chocolate cake"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(223,1,17,0.15)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 relative z-10"
              />

              {/* Floating elements */}
              {/* <div className="absolute -top-4 right-4 md:right-8 lg:right-0 px-4 py-2 bg-card rounded-full shadow-medium floating-animation z-20 border border-border/50">
                <span className="text-sm font-medium">🎂 Best Seller</span>
              </div>
              <div
                className="absolute bottom-8 left-0 md:left-4 lg:-left-8 px-4 py-2 bg-card rounded-full shadow-medium floating-animation z-20 border border-border/50"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-sm font-medium">⭐ 4.9 Rating</span>
              </div> */}
              {/* <div
                className="absolute top-1/2 -left-4 px-4 py-2 bg-card rounded-full shadow-medium floating-animation"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-sm font-medium">🥧 500+ Orders</span>
              </div> */}
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
