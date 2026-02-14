export interface Cake {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  startingPrice: number;
  image: string;
  category: string;
  flavors: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export const cakes: Cake[] = [
  {
    id: "chocolate-truffle",
    name: "Chocolate Truffle Cake",
    description: "Rich, decadent chocolate layers with Belgian chocolate ganache and truffle filling",
    shortDescription: "Rich chocolate layers with truffle ganache",
    startingPrice: 599,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    category: "Chocolate",
    flavors: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"],
    isPopular: true,
  },
  {
    id: "red-velvet",
    name: "Red Velvet Dream",
    description: "Classic red velvet with cream cheese frosting and delicate cocoa undertones",
    shortDescription: "Velvety red layers with cream cheese frosting",
    startingPrice: 649,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80",
    category: "Classic",
    flavors: ["Classic Red Velvet"],
    isPopular: true,
  },
  {
    id: "butterscotch-crunch",
    name: "Butterscotch Crunch",
    description: "Buttery caramel cake with crunchy butterscotch bits and praline topping",
    shortDescription: "Caramel cake with butterscotch crunch",
    startingPrice: 549,
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80",
    category: "Butterscotch",
    flavors: ["Butterscotch", "Salted Caramel"],
  },
  {
    id: "fresh-fruit",
    name: "Fresh Fruit Delight",
    description: "Light vanilla sponge topped with seasonal fresh fruits and whipped cream",
    shortDescription: "Vanilla sponge with fresh seasonal fruits",
    startingPrice: 699,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    category: "Fruit",
    flavors: ["Vanilla", "Mixed Berry"],
    isNew: true,
  },
  {
    id: "black-forest",
    name: "Black Forest Classic",
    description: "Traditional German chocolate cake with cherries, cream, and chocolate shavings",
    shortDescription: "Chocolate, cherries & cream perfection",
    startingPrice: 599,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80",
    category: "Chocolate",
    flavors: ["Black Forest"],
    isPopular: true,
  },
  {
    id: "mango-passion",
    name: "Mango Passion",
    description: "Tropical mango mousse cake with passion fruit drizzle and fresh mango chunks",
    shortDescription: "Tropical mango mousse with passion fruit",
    startingPrice: 749,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
    category: "Fruit",
    flavors: ["Mango", "Passion Fruit"],
    isNew: true,
  },
  {
    id: "vanilla-bean",
    name: "Vanilla Bean Supreme",
    description: "Madagascar vanilla bean cake with Swiss meringue buttercream",
    shortDescription: "Pure vanilla indulgence",
    startingPrice: 549,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&q=80",
    category: "Classic",
    flavors: ["Vanilla Bean", "French Vanilla"],
  },
  {
    id: "coffee-walnut",
    name: "Coffee Walnut Bliss",
    description: "Espresso-infused cake with roasted walnuts and coffee buttercream",
    shortDescription: "Coffee lovers' paradise with walnuts",
    startingPrice: 649,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&q=80",
    category: "Coffee",
    flavors: ["Espresso", "Mocha"],
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    description: "Light sponge cake with fresh strawberries and Chantilly cream",
    shortDescription: "Fresh strawberries with Chantilly cream",
    startingPrice: 699,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    category: "Fruit",
    flavors: ["Strawberry"],
    isPopular: true,
  },
  {
    id: "pineapple-paradise",
    name: "Pineapple Paradise",
    description: "Moist pineapple cake with glazed pineapple rings and vanilla cream",
    shortDescription: "Tropical pineapple with vanilla cream",
    startingPrice: 549,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    category: "Fruit",
    flavors: ["Pineapple"],
  },
  {
    id: "caramel-drip",
    name: "Caramel Drip Delight",
    description: "Buttery caramel cake with salted caramel drip and caramelized nuts",
    shortDescription: "Salted caramel with caramelized nuts",
    startingPrice: 699,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12f4f?w=600&q=80",
    category: "Butterscotch",
    flavors: ["Salted Caramel", "Butterscotch"],
    isNew: true,
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    description: "Creamy New York style cheesecake with blueberry compote",
    shortDescription: "Creamy cheesecake with blueberry swirl",
    startingPrice: 799,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    category: "Cheesecake",
    flavors: ["Blueberry", "Mixed Berry"],
  },
];

export const categories = [
  "All",
  "Chocolate",
  "Fruit",
  "Classic",
  "Butterscotch",
  "Coffee",
  "Cheesecake",
];

export const weights = [
  { label: "½ kg", value: 0.5, priceMultiplier: 1 },
  { label: "1 kg", value: 1, priceMultiplier: 1.9 },
  { label: "1.5 kg", value: 1.5, priceMultiplier: 2.8 },
  { label: "2 kg", value: 2, priceMultiplier: 3.6 },
  { label: "3 kg", value: 3, priceMultiplier: 5.2 },
];

export const shapes = ["Round", "Heart", "Square", "Rectangle"];

export const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Baby Shower",
  "Graduation",
  "Valentine's Day",
  "Mother's Day",
  "Father's Day",
  "Corporate Event",
  "Other",
];

export const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "The chocolate truffle cake was absolutely divine! Freshly made and delivered right on time. Best bakery in town!",
    rating: 5,
    occasion: "Birthday Party",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    text: "Ordered a custom cake for my wife's anniversary. The design was exactly as requested. Simply amazing!",
    rating: 5,
    occasion: "Anniversary",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    text: "Love that everything is freshly baked! The red velvet cake was moist and the cream cheese frosting was perfect.",
    rating: 5,
    occasion: "Office Celebration",
  },
  {
    id: 4,
    name: "Vikram Singh",
    text: "The eggless options are fantastic. Finally found a bakery that makes delicious eggless cakes!",
    rating: 5,
    occasion: "Family Gathering",
  },
];
