import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-3">
              <span className="text-2xl">🌿</span> Agrolink
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Empowering Farmers. Feeding the Future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-primary-foreground transition-colors">About</Link>
              <Link to="/marketplace" className="hover:text-primary-foreground transition-colors">Marketplace</Link>
              <Link to="/#impact" className="hover:text-primary-foreground transition-colors">Impact</Link>
              <Link to="/" className="hover:text-primary-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 text-2xl">
              <span className="cursor-pointer hover:opacity-80">📘</span>
              <span className="cursor-pointer hover:opacity-80">🐦</span>
              <span className="cursor-pointer hover:opacity-80">📸</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          © 2026 Agrolink. Built for farmers, by farmers.
        </div>
      </div>
    </footer>
  );
}
