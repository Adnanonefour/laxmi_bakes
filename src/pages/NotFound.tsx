import { Link } from "react-router-dom";
import { Cake, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="text-center space-y-6 animate-fade-in">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
          <Cake className="w-12 h-12 text-primary" />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="font-display text-6xl font-bold text-foreground">404</h1>
          <p className="text-xl text-muted-foreground">
            Oops! This page got eaten 🍰
          </p>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Link to="/cakes">
            <Button variant="outline" size="lg">
              Browse Cakes
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
