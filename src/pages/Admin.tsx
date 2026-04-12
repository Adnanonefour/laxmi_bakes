import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Loader2, PlusCircle, Trash2, Database, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Admin() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [cakes, setCakes] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);

  // 1. Fetch Inventory
  const fetchInventory = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from("cakes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setCakes(data || []);
    setFetching(false);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // 2. Toggle Homepage Feature (The "Star" Logic)
  const togglePopular = async (id: string, currentStatus: boolean) => {
    // Note: We use the snake_case 'is_popular' here to match Supabase
    const { error } = await supabase
      .from("cakes")
      .update({ is_popular: !currentStatus })
      .eq("id", id);

    if (error) {
      toast({
        title: "Update Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Updated!", description: "Homepage status changed." });
      fetchInventory();
    }
  };

  // 3. Delete Logic
  const handleDelete = async (id: string, cakeName: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${cakeName}"?`,
    );
    if (!confirmDelete) return;

    const { error } = await supabase.from("cakes").delete().eq("id", id);

    if (error) {
      toast({ title: "Delete Failed", variant: "destructive" });
    } else {
      toast({ title: "Deleted!", description: `${cakeName} removed.` });
      fetchInventory();
    }
  };

  // 4. Add Cake Logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const rawFlavors = formData.get("flavors") as string;

    // IMPORTANT: These keys match Supabase exactly (snake_case)
    const newCake = {
      name: formData.get("name"),
      short_description: formData.get("shortDescription"),
      description: formData.get("description"),
      starting_price: Number(formData.get("price")),
      category: formData.get("category"),
      image: formData.get("image"),
      flavors: rawFlavors ? rawFlavors.split(",").map((f) => f.trim()) : [],
      is_popular: formData.get("isPopular") === "on",
    };

    const { error } = await supabase.from("cakes").insert([newCake]);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Success!", description: "Cake added successfully." });
      (e.target as HTMLFormElement).reset();
      fetchInventory();
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-secondary/5">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ADD FORM */}
          <div className="space-y-8">
            <h1 className="text-3xl font-serif font-bold text-primary flex items-center gap-2">
              <PlusCircle /> Add New Cake
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-card p-6 rounded-xl border shadow-md"
            >
              <Input name="name" placeholder="Cake Name" required />
              <Input
                name="shortDescription"
                placeholder="Short Hook (Description)"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="price"
                  type="number"
                  placeholder="Price (₹)"
                  required
                />
                <Input name="category" placeholder="Category" required />
              </div>
              <Input name="image" placeholder="Image URL" required />
              <Input name="flavors" placeholder="Flavors (comma separated)" />
              <label className="flex items-center space-x-2 cursor-pointer p-3 bg-secondary/20 rounded-lg">
                <input type="checkbox" name="isPopular" className="w-4 h-4" />
                <span className="text-sm font-medium">Feature on Homepage</span>
              </label>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : "Save Cake"}
              </Button>
            </form>
          </div>

          {/* INVENTORY LIST */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-2">
              <Database /> Inventory
            </h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {fetching ? (
                <div className="flex justify-center py-10">
                  <Loader2 className="animate-spin text-primary" />
                </div>
              ) : cakes.length === 0 ? (
                <p className="text-muted-foreground text-center py-10">
                  No cakes found in shop.
                </p>
              ) : (
                cakes.map((cake) => (
                  <Card
                    key={cake.id}
                    className="border-primary/10 overflow-hidden"
                  >
                    <CardContent className="p-0 flex items-center">
                      <img
                        src={cake.image}
                        className="w-20 h-20 object-cover"
                        alt={cake.name}
                      />
                      <div className="flex-1 px-4">
                        <h3 className="font-bold text-sm">{cake.name}</h3>
                        {/* Use snake_case starting_price here */}
                        <p className="text-xs text-primary font-semibold">
                          ₹{cake.starting_price}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 pr-2">
                        {/* Use snake_case is_popular here */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            togglePopular(cake.id, cake.is_popular)
                          }
                          className={
                            cake.is_popular
                              ? "text-yellow-500"
                              : "text-muted-foreground"
                          }
                        >
                          <Star
                            className={cake.is_popular ? "fill-current" : ""}
                            size={20}
                          />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:bg-destructive/10"
                          onClick={() => handleDelete(cake.id, cake.name)}
                        >
                          <Trash2 size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
