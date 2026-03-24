import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { ContactModal } from "@/components/ContactModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buyerStats, products, buyerActivity, Product } from "@/data/mockData";
import { Bookmark, Package, Users, DollarSign, LayoutDashboard, Heart, ShoppingCart, MessageSquare, User, Search } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Heart, label: "Saved Crops" },
  { icon: ShoppingCart, label: "My Orders" },
  { icon: MessageSquare, label: "Messages" },
  { icon: User, label: "Profile" },
];

export default function BuyerDashboard() {
  const [contactProduct, setContactProduct] = useState<Product | null>(null);
  const savedProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <aside className="hidden md:flex flex-col w-56 border-r bg-card p-4 gap-1">
          {sidebarItems.map(item => (
            <button key={item.label} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </aside>

        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Welcome back, Hasan Traders 👋</h1>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Saved Listings", value: buyerStats.saved, emoji: "🔖" },
              { label: "Orders Placed", value: buyerStats.orders, emoji: "📦" },
              { label: "Farmers Contacted", value: buyerStats.farmersContacted, emoji: "👨‍🌾" },
              { label: "Total Purchased", value: `৳${buyerStats.totalPurchased.toLocaleString()}`, emoji: "💸" },
            ].map(stat => (
              <Card key={stat.label}>
                <CardContent className="p-5">
                  <div className="text-2xl mb-2">{stat.emoji}</div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Quick search marketplace..." className="pl-10" />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-8" size="sm" asChild>
              <Link to="/marketplace">Search</Link>
            </Button>
          </div>

          {/* Saved Crops */}
          <Card className="mb-8">
            <CardHeader><CardTitle>Saved Crops</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {savedProducts.map(product => (
                  <ProductCard key={product.id} product={product} onContact={setContactProduct} showRemove onRemove={() => {}} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {buyerActivity.map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm flex-1">{a.action}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
      <ContactModal product={contactProduct} open={!!contactProduct} onClose={() => setContactProduct(null)} />
    </div>
  );
}
