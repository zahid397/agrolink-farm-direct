import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/data/mockData";
import { MapPin, Phone } from "lucide-react";

interface ContactModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ product, open, onClose }: ContactModalProps) {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  if (!product) return null;

  const handleSend = () => {
    toast({
      title: "Message sent!",
      description: "Farmer will contact you soon.",
    });
    setMessage("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact {product.farmer}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-secondary rounded-lg p-4 space-y-2">
            <p className="font-medium">{product.farmer}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-3 w-3" /> 017XXXXXXXX
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" /> {product.location}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Regarding: {product.emoji} {product.name}</p>
          </div>
          <Textarea
            placeholder="Write your message to the farmer..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <Button className="w-full" onClick={handleSend}>Send Message</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
