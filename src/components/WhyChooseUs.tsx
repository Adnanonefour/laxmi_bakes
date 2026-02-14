import { Clock, Leaf, Heart, Sparkles, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Freshly Baked",
    description: "Every cake is made fresh after your order. No pre-made cakes, ever.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Leaf,
    title: "Eggless Options",
    description: "Wide range of delicious eggless cakes for vegetarian customers.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Home-style baking with love and attention to every detail.",
    color: "text-pink-dark",
    bg: "bg-pink-light",
  },
  {
    icon: ShieldCheck,
    title: "100% Hygienic",
    description: "Prepared in clean, sanitized environment with premium ingredients.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    description: "Personalized cakes for birthdays, anniversaries & special occasions.",
    color: "text-gold",
    bg: "bg-gold-light/30",
  },
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Fresh delivery to your doorstep within the same day of ordering.",
    color: "text-chocolate",
    bg: "bg-accent",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Honey Dukes
          </span>
          <h2 className="section-title mt-2 mb-4">What Makes Us Special</h2>
          <p className="text-muted-foreground">
            We take pride in delivering the freshest, most delicious cakes made with love and care
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
