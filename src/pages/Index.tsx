import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ContactModal } from "@/components/ContactModal";
import { LeafDivider } from "@/components/LeafDivider";
import { products, testimonials, Product } from "@/data/mockData";
import { ArrowRight, CheckCircle } from "lucide-react";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center animate-count-up">
      <div className="stat-counter text-primary-foreground">{value}</div>
      <div className="text-primary-foreground/80 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function Index() {
  const [contactProduct, setContactProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Farmers.<br />Feeding the Future.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8">
            Agrolink connects small-scale farmers directly to buyers — no middlemen, fair prices, better income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-2">
            <Button size="lg" variant="secondary" asChild className="text-primary font-bold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-secondary-foreground/10">
              <Link to="/auth">🌾 List Your Produce <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary font-bold text-base shadow-md hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-200 border border-white/30">
              <Link to="/marketplace">🛒 Find Fresh Crops <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <AnimatedStat value="1,200+" label="Farmers Registered" />
            <AnimatedStat value="340+" label="Buyers Connected" />
            <AnimatedStat value="98%" label="Satisfaction Rate" />
            <AnimatedStat value="8" label="Districts Covered" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <LeafDivider />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Problem Farmers Face</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                "Heavy dependency on middlemen",
                "Unfair and non-transparent pricing",
                "Limited access to direct buyers",
                "Unstable income and market uncertainty",
              ].map((problem) => (
                <Card key={problem} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <span className="text-lg">🔴</span>
                    <span className="font-medium">{problem}</span>
                  </CardContent>
                </Card>
              ))}
              <blockquote className="border-l-4 border-accent pl-4 mt-6 italic text-muted-foreground">
                "Farmers earn 30-40% less than market price due to middlemen." — Agricultural Research BD
              </blockquote>
            </div>
            <div className="text-center text-8xl md:text-[10rem] leading-none select-none opacity-80">
              👨‍🌾🌾
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <LeafDivider />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Agrolink Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", icon: "📋", title: "List Your Produce", desc: "Farmers register and list their available crops with price, quantity, and location." },
              { step: "2", icon: "🤝", title: "Direct Connection", desc: "Buyers browse listings and contact farmers directly through the platform." },
              { step: "3", icon: "💰", title: "Trade Fairly", desc: "Transactions happen directly — no middlemen, transparent pricing, better profits." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <Card className="text-center bg-card h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-primary text-2xl z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <LeafDivider />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Fresh From the Farm</h2>
          <p className="text-center text-muted-foreground mb-12">Browse available crops directly from local farmers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} onContact={setContactProduct} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link to="/marketplace">View All Listings <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <LeafDivider />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Agrolink is Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Direct farmer-to-buyer connection",
              "Zero middlemen exploitation",
              "Transparent, real-time pricing",
              "Farmer-focused simple design",
              "Local-first, scalable model",
            ].map((benefit) => (
              <Card key={benefit} className="bg-card">
                <CardContent className="p-5 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section id="impact" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <LeafDivider />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Social Impact</h2>
          <p className="text-center text-muted-foreground mb-12">Aligned with UN Sustainable Development Goals</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { sdg: "SDG 1", title: "No Poverty", desc: "Increase farmer income, strengthen livelihoods", color: "bg-red-500" },
              { sdg: "SDG 2", title: "Zero Hunger", desc: "Reduce food waste, improve supply chain efficiency", color: "bg-orange-500" },
              { sdg: "SDG 8", title: "Decent Work & Growth", desc: "Support rural entrepreneurship and digital access", color: "bg-rose-700" },
            ].map((sdg) => (
              <Card key={sdg.sdg} className="overflow-hidden">
                <div className={`${sdg.color} text-white px-4 py-2 font-bold text-sm`}>
                  {sdg.sdg} — {sdg.title}
                </div>
                <CardContent className="p-5">
                  <p className="text-muted-foreground">{sdg.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <LeafDivider />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Farmers Are Thriving</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{t.avatar}</div>
                  <p className="italic text-muted-foreground mb-4">"{t.quote}"</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join the Movement?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" variant="secondary" asChild className="text-primary font-semibold">
              <Link to="/farmer-dashboard">🌾 Join as Farmer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/marketplace">🛒 Browse as Buyer</Link>
            </Button>
          </div>
          <p className="text-primary-foreground/80">Agrolink — Empowering Farmers. Feeding the Future.</p>
        </div>
      </section>

      <Footer />
      <ContactModal product={contactProduct} open={!!contactProduct} onClose={() => setContactProduct(null)} />
    </div>
  );
}
