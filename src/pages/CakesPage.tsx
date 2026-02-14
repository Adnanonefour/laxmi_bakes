import { useState } from "react";
import { Search } from "lucide-react";
import CakeCard from "@/components/CakeCard";
import PrepTimeBanner from "@/components/PrepTimeBanner";
import { cakes, categories } from "@/data/cakes";
import { Input } from "@/components/ui/input";

const CakesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCakes = cakes.filter((cake) => {
    const matchesSearch =
      cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cake.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || cake.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background pt-20 md:pt-24">
      {/* Header */}
      <section className="py-8 md:py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="section-title mb-4">Our Delicious Cakes</h1>
            <p className="text-muted-foreground">
              Every cake is freshly baked after your order. Choose your favorite and make it perfect for your celebration.
            </p>
          </div>

          {/* Prep Time Banner */}
          <div className="max-w-xl mx-auto">
            <PrepTimeBanner variant="compact" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-secondary/30 sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search cakes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border rounded-full"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cakes Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filteredCakes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCakes.map((cake, index) => (
                <CakeCard key={cake.id} cake={cake} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No cakes found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CakesPage;
