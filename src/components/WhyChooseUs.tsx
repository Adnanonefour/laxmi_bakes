import { Clock, Leaf, Heart, Sparkles, ShieldCheck, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Clock,
    title: "Freshly Baked",
    description:
      "Every cake is made fresh after your order. No pre-made cakes, ever.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Leaf,
    title: "Eggless Options",
    description:
      "Wide range of delicious eggless cakes for vegetarian customers.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Home-style baking with love and attention to every detail.",
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    icon: ShieldCheck,
    title: "100% Hygienic",
    description:
      "Prepared in a clean, sanitized environment with premium ingredients.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    description:
      "Personalized cakes for birthdays, anniversaries & special occasions.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: Truck,
    title: "On time Delivery",
    description:
      "Fresh delivery to your doorstep within the given time.",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-20 relative overflow-hidden">
      {/* Decorative Blur Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-28 md:mb-36">
          <Badge
            variant="outline"
            className="mb-6 border-primary/50 text-primary px-5 py-2 rounded-full uppercase tracking-[0.2em] text-xs font-bold bg-background shadow-sm"
          >
            Our Promise
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            The Art of{" "}
            <span className="text-primary italic font-light">Baking</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            We don't just bake cakes; we craft edible centerpieces for your most
            treasured memories.
          </p>
        </div>

        {/* Spacious Staggered Arch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-14 gap-y-28 lg:pb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative flex flex-col items-center text-center p-8 pt-16 bg-card border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-700 ease-out rounded-t-[7rem] rounded-b-3xl",
                // Stagger effect: Middle cards drop down significantly on large screens
                [1, 4].includes(index) ? "lg:translate-y-16" : "",
              )}
            >
              {/* Subtle background number watermark */}
              <div className="absolute top-12 right-8 text-[7rem] font-serif font-black text-muted/5 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-4">
                0{index + 1}
              </div>

              {/* Larger Floating Overlap Icon */}
              <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 ${feature.bg} rounded-full flex items-center justify-center shadow-lg border-[6px] border-card group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 z-10`}
              >
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-2xl font-bold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
