import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Impact", href: "/#impact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleAnchorClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (link: typeof navLinks[0]) => {
    if (link.href.startsWith("/#")) {
      return (
        <Link
          key={link.label}
          to={link.href}
          onClick={() => handleAnchorClick(link.href)}
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
        >
          {link.label}
        </Link>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        className={`hover:text-primary transition-colors font-medium ${location.pathname === link.href ? "text-primary" : "text-foreground/80"}`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <span className="text-2xl">🌿</span>
          Agrolink
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(renderLink)}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild>
            <Link to="/farmer-dashboard">Join as Farmer</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/marketplace">Browse as Buyer</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => {
                    handleAnchorClick(link.href);
                    setOpen(false);
                  }}
                  className="text-lg font-medium text-foreground/80 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button asChild onClick={() => setOpen(false)}>
                  <Link to="/farmer-dashboard">Join as Farmer</Link>
                </Button>
                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                  <Link to="/marketplace">Browse as Buyer</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
