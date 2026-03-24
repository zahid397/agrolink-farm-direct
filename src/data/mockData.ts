export interface Product {
  id: string;
  name: string;
  emoji: string;
  category: string;
  farmer: string;
  location: string;
  district: string;
  price: number;
  quantity: number;
  unit: string;
  harvestDate: string;
  description: string;
  rating: number;
  memberSince: string;
  totalListings: number;
  status: "Available" | "Sold Out";
}

export const products: Product[] = [
  { id: "1", name: "Tomatoes", emoji: "🍅", category: "Vegetables", farmer: "Rahim Mia", location: "Gazipur", district: "Gazipur", price: 45, quantity: 200, unit: "kg", harvestDate: "2026-03-15", description: "Fresh, organic tomatoes grown without pesticides. Perfect for cooking and salads. Harvested at peak ripeness for the best flavor.", rating: 4.8, memberSince: "2025", totalListings: 8, status: "Available" },
  { id: "2", name: "Spinach", emoji: "🥬", category: "Vegetables", farmer: "Fatema Begum", location: "Manikganj", district: "Dhaka", price: 30, quantity: 50, unit: "kg", harvestDate: "2026-03-18", description: "Nutrient-rich spinach leaves, freshly picked. Great source of iron and vitamins. Ideal for traditional Bangladeshi cooking.", rating: 4.9, memberSince: "2024", totalListings: 12, status: "Available" },
  { id: "3", name: "Rice (Aman)", emoji: "🌾", category: "Grains", farmer: "Karim Ahmed", location: "Rajshahi", district: "Rajshahi", price: 38, quantity: 500, unit: "kg", harvestDate: "2026-02-20", description: "Premium quality Aman rice from the fertile lands of Rajshahi. Known for its aromatic flavor and fine grain texture.", rating: 4.7, memberSince: "2024", totalListings: 6, status: "Available" },
  { id: "4", name: "Potato", emoji: "🥔", category: "Vegetables", farmer: "Hasan Ali", location: "Munshiganj", district: "Dhaka", price: 22, quantity: 800, unit: "kg", harvestDate: "2026-03-01", description: "Large, fresh potatoes from Munshiganj — the potato capital of Bangladesh. Suitable for all types of cooking.", rating: 4.6, memberSince: "2025", totalListings: 4, status: "Available" },
  { id: "5", name: "Green Chili", emoji: "🌶️", category: "Spices", farmer: "Saleha Khatun", location: "Bogura", district: "Bogura", price: 60, quantity: 30, unit: "kg", harvestDate: "2026-03-20", description: "Spicy green chilies, perfect for adding heat to any dish. Grown naturally with traditional farming methods.", rating: 4.5, memberSince: "2025", totalListings: 3, status: "Available" },
  { id: "6", name: "Beans", emoji: "🫛", category: "Vegetables", farmer: "Jalal Uddin", location: "Sylhet", district: "Sylhet", price: 55, quantity: 75, unit: "kg", harvestDate: "2026-03-12", description: "Tender green beans from the lush gardens of Sylhet. Crispy and fresh, harvested daily.", rating: 4.8, memberSince: "2024", totalListings: 7, status: "Available" },
  { id: "7", name: "Onion", emoji: "🧅", category: "Vegetables", farmer: "Rafiq Islam", location: "Pabna", district: "Rajshahi", price: 35, quantity: 400, unit: "kg", harvestDate: "2026-03-10", description: "High quality red onions, essential for Bangladeshi cuisine. Stored properly for extended freshness.", rating: 4.4, memberSince: "2025", totalListings: 5, status: "Available" },
  { id: "8", name: "Mango", emoji: "🥭", category: "Fruits", farmer: "Anwar Hossain", location: "Chapainawabganj", district: "Rajshahi", price: 120, quantity: 150, unit: "kg", harvestDate: "2026-05-15", description: "World-famous Rajshahi mangoes. Sweet, juicy, and aromatic. Pre-order for the upcoming mango season.", rating: 5.0, memberSince: "2024", totalListings: 3, status: "Available" },
  { id: "9", name: "Garlic", emoji: "🧄", category: "Spices", farmer: "Monir Khan", location: "Natore", district: "Rajshahi", price: 90, quantity: 60, unit: "kg", harvestDate: "2026-02-28", description: "Locally grown garlic with strong flavor and aroma. Sun-dried for optimal quality.", rating: 4.6, memberSince: "2025", totalListings: 4, status: "Available" },
  { id: "10", name: "Cucumber", emoji: "🥒", category: "Vegetables", farmer: "Nasima Akter", location: "Comilla", district: "Sylhet", price: 25, quantity: 120, unit: "kg", harvestDate: "2026-03-22", description: "Crispy, fresh cucumbers perfect for salads and raita. Grown in organic conditions.", rating: 4.7, memberSince: "2025", totalListings: 6, status: "Available" },
  { id: "11", name: "Turmeric", emoji: "🟡", category: "Spices", farmer: "Abdul Mannan", location: "Rangpur", district: "Bogura", price: 150, quantity: 25, unit: "kg", harvestDate: "2026-01-15", description: "Pure, organic turmeric powder and roots. Deep golden color with high curcumin content.", rating: 4.9, memberSince: "2024", totalListings: 8, status: "Available" },
  { id: "12", name: "Banana", emoji: "🍌", category: "Fruits", farmer: "Shirin Begum", location: "Narsingdi", district: "Dhaka", price: 40, quantity: 300, unit: "kg", harvestDate: "2026-03-19", description: "Sweet and ripe Sagar bananas. Naturally ripened without any chemicals. Great nutritional value.", rating: 4.5, memberSince: "2025", totalListings: 5, status: "Sold Out" },
];

export const categories = ["All", "Vegetables", "Fruits", "Grains", "Spices"];
export const districts = ["All Districts", "Dhaka", "Rajshahi", "Sylhet", "Bogura", "Gazipur"];

export const farmerStats = {
  listings: 5,
  views: 234,
  inquiries: 18,
  revenue: 42500,
};

export const buyerStats = {
  saved: 8,
  orders: 3,
  farmersContacted: 12,
  totalPurchased: 28400,
};

export const farmerListings = products.slice(0, 5).map((p, i) => ({
  ...p,
  status: i === 4 ? "Sold Out" as const : "Available" as const,
}));

export const testimonials = [
  { name: "Karim Ahmed", location: "Rajshahi", quote: "Before Agrolink, I sold rice at ৳28/kg. Now I get ৳38 directly.", avatar: "👨‍🌾" },
  { name: "Fatema Begum", location: "Manikganj", quote: "Finally I can see real market prices and talk to buyers myself.", avatar: "👩‍🌾" },
  { name: "Rahim Mia", location: "Gazipur", quote: "My income increased by 35% in just 2 months using this platform.", avatar: "👨‍🌾" },
];

export const recentInquiries = [
  { buyerName: "Hasan Traders", crop: "Tomatoes", time: "2 hours ago", message: "I need 100kg of tomatoes. Can you deliver to Dhaka?" },
  { buyerName: "Fresh Foods Ltd", crop: "Rice (Aman)", time: "5 hours ago", message: "Looking for bulk rice purchase. What's your best price for 200kg?" },
  { buyerName: "Green Mart", crop: "Green Chili", time: "1 day ago", message: "Interested in weekly supply of green chili. Please contact." },
];

export const buyerActivity = [
  { action: "Contacted farmer Rahim Mia about Tomatoes", time: "2 hours ago" },
  { action: "Saved listing: Mango by Anwar Hossain", time: "5 hours ago" },
  { action: "Placed order: 200kg Rice (Aman)", time: "1 day ago" },
  { action: "Contacted farmer Fatema Begum about Spinach", time: "2 days ago" },
  { action: "Saved listing: Green Chili by Saleha Khatun", time: "3 days ago" },
];
