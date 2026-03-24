import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ContactModal } from "@/components/ContactModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, Product } from "@/data/mockData";
import { MapPin, Calendar, Star, Bookmark, ArrowLeft, Package } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [contactProduct, setContactProduct] = useState<Product | null>(null);
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg text-muted-foreground">Product not found.</p>
            <Button asChild className="mt-4"><Link to="/marketplace">Back to Marketplace</Link></Button>
          </div>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/marketplace"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Marketplace</Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary rounded-xl flex items-center justify-center py-16">
            <span className="text-[8rem] leading-none">{product.emoji}</span>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge>{product.category}</Badge>
              <Badge variant={product.status === "Available" ? "default" : "secondary"}>{product.status}</Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-4xl font-bold text-primary mb-6">৳{product.price}/{product.unit}</p>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="h-4 w-4" /> {product.quantity}{product.unit} available
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" /> Harvest: {product.harvestDate}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {product.location}, {product.district}
              </div>
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <Card className="mb-6">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="text-4xl">👨‍🌾</div>
                <div className="flex-1">
                  <p className="font-semibold">{product.farmer}</p>
                  <p className="text-sm text-muted-foreground">Member since {product.memberSince}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-3 w-3 fill-current text-accent" /> {product.rating} · {product.totalListings} listings
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button className="flex-1" size="lg" onClick={() => setContactProduct(product)}>Contact Farmer</Button>
              <Button variant="outline" size="lg"><Bookmark className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} onContact={setContactProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ContactModal product={contactProduct} open={!!contactProduct} onClose={() => setContactProduct(null)} />
    </div>
  );
}
