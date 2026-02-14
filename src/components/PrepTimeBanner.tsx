import { Clock, AlertCircle } from "lucide-react";

interface PrepTimeBannerProps {
  variant?: "default" | "compact" | "alert";
}

const PrepTimeBanner = ({ variant = "default" }: PrepTimeBannerProps) => {
  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/50 rounded-full text-sm">
        <Clock className="w-4 h-4 text-primary animate-bounce-gentle" />
        <span className="text-foreground font-medium">2-Hour Prep Time</span>
      </div>
    );
  }

  if (variant === "alert") {
    return (
      <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-xl">
        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">Please Note:</span> All cakes are freshly prepared after your order. 
          Delivery will be scheduled minimum <span className="font-semibold text-primary">2 hours</span> after order time.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
          <Clock className="w-6 h-6 text-primary animate-bounce-gentle" />
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-semibold text-foreground">
          Freshly Made on Order
        </h4>
        <p className="text-sm text-muted-foreground">
          Every cake is baked fresh. Delivery after minimum 2 hours from order time.
        </p>
      </div>
    </div>
  );
};

export default PrepTimeBanner;
