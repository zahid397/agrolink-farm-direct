import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ContactModal } from "@/components/ContactModal";
import { products, categories, districts, Product } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

function FilterPanel({ category, setCategory, district, setDistrict, priceRange, setPriceRange, sortBy, setSortBy }: any) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Location</label>
        <Select value={district} onValueChange={setDistrict}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Price Range: ৳{priceRange[0]} – ৳{priceRange[1]}/kg</label>
        <Slider value={priceRange} onValueChange={setPriceRange} min={10} max={200} step={5} className="mt-3" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Sort By</label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default function Marketplace() {
  const [contactProduct, setContactProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [district, setDistrict] = useState("All Districts");
  const [priceRange, setPriceRange] = useState([10, 200]);
  const [sortBy, setSortBy] = useState("newest");

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      if (category !== "All" && p.category !== category) return false;
      if (district !== "All Districts" && p.district !== district) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (search && !`${p.name} ${p.farmer} ${p.location}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [search, category, district, priceRange, sortBy]);

  const filterProps = { category, setCategory, district, setDistrict, priceRange, setPriceRange, sortBy, setSortBy };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold">Fresh Marketplace</h1>
          <Badge>{filtered.length} crops</Badge>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search crops, farmers, locations..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden"><SlidersHorizontal className="h-4 w-4" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <h3 className="font-semibold text-lg mb-6">Filters</h3>
              <FilterPanel {...filterProps} />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24 bg-card rounded-lg border p-5">
              <h3 className="font-semibold mb-4">Filters</h3>
              <FilterPanel {...filterProps} />
            </div>
          </aside>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} onContact={setContactProduct} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-lg">No crops found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <ContactModal product={contactProduct} open={!!contactProduct} onClose={() => setContactProduct(null)} />
    </div>
  );
}
