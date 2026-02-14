import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import CakeCard from "./CakeCard";
import { cakes } from "@/data/cakes";

const FeaturedCakes = () => {
  const featuredCakes = cakes.filter((cake) => cake.isPopular).slice(0, 4);

  return (
    <section id="featured" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div className="space-y-2">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Customer Favorites
            </span>
            <h2 className="section-title">Our Best Sellers</h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our most loved cakes, freshly baked with premium ingredients
            </p>
          </div>
          <Link to="/cakes">
            <Button variant="outline" className="group">
              View All Cakes
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCakes.map((cake, index) => (
            <CakeCard key={cake.id} cake={cake} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
