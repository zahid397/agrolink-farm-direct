import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Product } from "@/data/mockData";

interface ProductCardProps {
  product: Product;
  onContact?: (product: Product) => void;
  showRemove?: boolean;
  onRemove?: () => void;
}

export function ProductCard({ product, onContact, showRemove, onRemove }: ProductCardProps) {
  return (
    <Card className="card-hover overflow-hidden bg-card">
      <CardContent className="p-5">
        <Link to={`/product/${product.id}`} className="block">
          <div className="text-5xl text-center py-4 bg-secondary rounded-lg mb-4">
            {product.emoji}
          </div>
        </Link>
        <div className="flex items-start justify-between mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            <h3 className="font-semibold text-lg">{product.name}</h3>
          </Link>
          <Badge variant={product.status === "Available" ? "default" : "secondary"} className="text-xs">
            {product.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{product.farmer}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          {product.location}
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-primary">৳{product.price}/{product.unit}</span>
          <span className="text-sm text-muted-foreground">{product.quantity}{product.unit} available</span>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" size="sm" onClick={() => onContact?.(product)}>
            Contact Farmer
          </Button>
          {showRemove && (
            <Button variant="outline" size="sm" onClick={onRemove}>
              Remove
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
