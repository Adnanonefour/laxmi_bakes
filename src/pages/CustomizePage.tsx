import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format, addHours, setHours, setMinutes, isAfter, isSameDay } from "date-fns";
import { Calendar, Clock, Upload, ArrowLeft, MessageCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import PrepTimeBanner from "@/components/PrepTimeBanner";
import { cakes, weights, shapes, occasions, timeSlots } from "@/data/cakes";
import { cn } from "@/lib/utils";

const ADMIN_PHONE = "918920572245"; // Replace with actual admin number
const MIN_PREP_HOURS = 2;

const CustomizePage = () => {
  const { cakeId } = useParams();
  const navigate = useNavigate();

  // Find cake or use default
  const selectedCake = cakeId 
    ? cakes.find((c) => c.id === cakeId) 
    : null;

  // Form state
  const [cake, setCake] = useState(selectedCake?.id || "");
  const [weight, setWeight] = useState("0.5");
  const [flavor, setFlavor] = useState(selectedCake?.flavors[0] || "");
  const [eggless, setEggless] = useState("eggless");
  const [shape, setShape] = useState("Round");
  const [occasion, setOccasion] = useState("Birthday");
  const [customMessage, setCustomMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState("cod");

  // Update flavor when cake changes
  useEffect(() => {
    if (cake) {
      const found = cakes.find((c) => c.id === cake);
      if (found && found.flavors.length > 0) {
        setFlavor(found.flavors[0]);
      }
    }
  }, [cake]);

  // Calculate minimum delivery date/time
  const now = new Date();
  const minDeliveryTime = addHours(now, MIN_PREP_HOURS);
  const minDeliveryDate = new Date(minDeliveryTime);
  minDeliveryDate.setHours(0, 0, 0, 0);

  // Get available time slots for selected date
  const availableTimeSlots = useMemo(() => {
    if (!deliveryDate) return [];

    const isToday = isSameDay(deliveryDate, now);

    return timeSlots.filter((slot) => {
      // Parse slot start time
      const [startTime] = slot.split(" - ");
      const [time, period] = startTime.split(" ");
      let [hours] = time.split(":").map(Number);
      
      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;

      const slotDate = setMinutes(setHours(deliveryDate, hours), 0);

      // If today, only show slots that start at least 2 hours from now
      if (isToday) {
        return isAfter(slotDate, minDeliveryTime);
      }

      return true;
    });
  }, [deliveryDate, now, minDeliveryTime]);

  // Reset time when date changes
  useEffect(() => {
    setDeliveryTime("");
  }, [deliveryDate]);

  // Calculate price
  const currentCake = cakes.find((c) => c.id === cake);
  const currentWeight = weights.find((w) => w.value.toString() === weight);
  const price = currentCake && currentWeight 
    ? Math.round(currentCake.startingPrice * currentWeight.priceMultiplier)
    : 0;

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setReferenceImage(file);
    }
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const cakeName = currentCake?.name || "Custom Cake";
    const weightLabel = currentWeight?.label || weight + " kg";

    const message = `
CAKE *HONEY DUKES - NEW ORDER* CAKE

*Cake Details:*
━━━━━━━━━━━━━━━
Cake: ${cakeName}
Weight: ${weightLabel}
Flavor: ${flavor}
Type: ${eggless === "eggless" ? "Eggless" : "With Egg"}
Shape: ${shape}
Occasion: ${occasion}
${customMessage ? `Message on Cake: "${customMessage}"` : ""}

*Delivery Details:*
━━━━━━━━━━━━━━━
Date: ${deliveryDate ? format(deliveryDate, "EEEE, MMMM d, yyyy") : "Not selected"}
Time Slot: ${deliveryTime || "Not selected"}

*Customer Details:*
━━━━━━━━━━━━━━━
Name: ${customerName}
Phone: ${phone}
Address: ${address}
${notes ? `Notes: ${notes}` : ""}
${referenceImage ? `Reference Image: Attached separately` : ""}

*Payment:*
━━━━━━━━━━━━━━━
Amount: ₹${price}
Mode: ${payment === "cod" ? "Cash on Delivery" : "UPI"}

*Freshly baked on order. Delivery after minimum 2 hours.*
`.trim();

    return encodeURI(message);
  };

  // Handle order submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!cake) {
      toast({ title: "Please select a cake", variant: "destructive" });
      return;
    }
    if (!deliveryDate) {
      toast({ title: "Please select a delivery date", variant: "destructive" });
      return;
    }
    if (!deliveryTime) {
      toast({ title: "Please select a delivery time slot", variant: "destructive" });
      return;
    }
    if (!customerName.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    if (!address.trim()) {
      toast({ title: "Please enter delivery address", variant: "destructive" });
      return;
    }

    // Generate and open WhatsApp
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Order Initiated! 🎂",
      description: "Complete your order on WhatsApp",
    });
  };

  return (
    <main className="min-h-screen bg-background pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="section-title mb-2">
            {selectedCake ? `Customize ${selectedCake.name}` : "Create Your Perfect Cake"}
          </h1>
          <p className="text-muted-foreground">
            Personalize every detail and we'll bake it fresh for you
          </p>
        </div>

        {/* Prep Time Banner */}
        <div className="mb-8">
          <PrepTimeBanner variant="alert" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Cake Selection (if not pre-selected) */}
          {!selectedCake && (
            <div className="p-6 bg-card rounded-2xl shadow-soft space-y-4">
              <h2 className="font-display text-xl font-semibold">Select Cake</h2>
              <Select value={cake} onValueChange={setCake}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Choose a cake" />
                </SelectTrigger>
                <SelectContent>
                  {cakes.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name} - Starting ₹{c.startingPrice}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Customization Options */}
          <div className="p-6 bg-card rounded-2xl shadow-soft space-y-6">
            <h2 className="font-display text-xl font-semibold">Cake Details</h2>

            {/* Weight */}
            <div className="space-y-3">
              <Label>Weight</Label>
              <div className="grid grid-cols-5 gap-2">
                {weights.map((w) => (
                  <button
                    key={w.value}
                    type="button"
                    onClick={() => setWeight(w.value.toString())}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-medium transition-all",
                      weight === w.value.toString()
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-muted text-foreground hover:bg-accent"
                    )}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor */}
            {currentCake && currentCake.flavors.length > 0 && (
              <div className="space-y-3">
                <Label>Flavor</Label>
                <Select value={flavor} onValueChange={setFlavor}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currentCake.flavors.map((f) => (
                      <SelectItem key={f} value={f}>
                        {f}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Egg/Eggless */}
            <div className="space-y-3">
              <Label>Type</Label>
              <RadioGroup value={eggless} onValueChange={setEggless} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="eggless" id="eggless" />
                  <Label htmlFor="eggless" className="cursor-pointer">Eggless</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="egg" id="egg" />
                  <Label htmlFor="egg" className="cursor-pointer">With Egg</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Shape */}
            <div className="space-y-3">
              <Label>Shape</Label>
              <div className="grid grid-cols-4 gap-2">
                {shapes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setShape(s)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-medium transition-all",
                      shape === s
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-muted text-foreground hover:bg-accent"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div className="space-y-3">
              <Label>Occasion</Label>
              <Select value={occasion} onValueChange={setOccasion}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {occasions.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Custom Message */}
            <div className="space-y-3">
              <Label>Message on Cake (Optional)</Label>
              <Input
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="e.g., Happy Birthday!"
                maxLength={50}
                className="rounded-xl"
              />
              <p className="text-xs text-muted-foreground">{customMessage.length}/50 characters</p>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="p-6 bg-card rounded-2xl shadow-soft space-y-6">
            <h2 className="font-display text-xl font-semibold">Delivery Details</h2>

            {/* Date */}
            <div className="space-y-3">
              <Label>Delivery Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal rounded-xl",
                      !deliveryDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {deliveryDate ? format(deliveryDate, "EEEE, MMMM d, yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={deliveryDate}
                    onSelect={setDeliveryDate}
                    disabled={(date) => date < minDeliveryDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Slot */}
            <div className="space-y-3">
              <Label>Delivery Time Slot</Label>
              {!deliveryDate ? (
                <p className="text-sm text-muted-foreground">Please select a date first</p>
              ) : availableTimeSlots.length === 0 ? (
                <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-xl text-destructive text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>No available time slots for this date. Please select a different date.</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setDeliveryTime(slot)}
                      className={cn(
                        "flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-medium transition-all",
                        deliveryTime === slot
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-muted text-foreground hover:bg-accent"
                      )}
                    >
                      <Clock className="w-4 h-4" />
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Reference Image */}
            <div className="space-y-3">
              <Label>Reference Image (Optional)</Label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="reference-image"
                />
                <label
                  htmlFor="reference-image"
                  className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {referenceImage ? referenceImage.name : "Upload design reference (Max 5MB)"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="p-6 bg-card rounded-2xl shadow-soft space-y-6">
            <h2 className="font-display text-xl font-semibold">Your Details</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your full name"
                  className="rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className="rounded-xl"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Full delivery address with landmark"
                className="rounded-xl min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special instructions for the baker"
                className="rounded-xl"
              />
            </div>

            {/* Payment */}
            <div className="space-y-3">
              <Label>Payment Method</Label>
              <RadioGroup value={payment} onValueChange={setPayment} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="cursor-pointer">Cash on Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="cursor-pointer">UPI</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-gradient-card rounded-2xl shadow-medium space-y-4">
            <h2 className="font-display text-xl font-semibold">Order Summary</h2>
            
            <div className="flex items-center justify-between py-4 border-b border-border">
              <div>
                <p className="font-medium">{currentCake?.name || "Select a cake"}</p>
                <p className="text-sm text-muted-foreground">
                  {currentWeight?.label} • {eggless === "eggless" ? "Eggless" : "With Egg"} • {shape}
                </p>
              </div>
              <p className="text-2xl font-bold text-primary">₹{price}</p>
            </div>

            {/* Prep Time Reminder */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>All cakes are freshly prepared. Delivery scheduled minimum 2 hours after order.</span>
            </div>

            <Button
              type="submit"
              variant="whatsapp"
              size="xl"
              className="w-full"
              disabled={!cake || !deliveryDate || !deliveryTime}
            >
              <MessageCircle className="w-5 h-5" />
              Place Order via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CustomizePage;
