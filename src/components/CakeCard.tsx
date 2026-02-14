import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Cake } from "@/data/cakes";

interface CakeCardProps {
  cake: Cake;
  index?: number;
}

const CakeCard = ({ cake, index = 0 }: CakeCardProps) => {
  return (
    <div
      className="cake-card group gradient-card animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {cake.isPopular && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Popular
            </span>
          )}
          {cake.isNew && (
            <span className="px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
              New
            </span>
          )}
        </div>

        {/* Prep time badge */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="prep-badge backdrop-blur-sm bg-background/80">
            <Clock className="w-3 h-3" />
            <span>Freshly Baked • 2-Hour Prep</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3">
        <div className="space-y-1">
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {cake.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {cake.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Starting at</span>
            <span className="text-xl font-bold text-foreground">
              ₹{cake.startingPrice}
            </span>
          </div>
          
          <Link to={`/customize/${cake.id}`}>
            <Button variant="default" size="sm">
              Customize & Order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
