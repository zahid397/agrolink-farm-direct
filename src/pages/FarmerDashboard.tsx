import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { farmerStats, farmerListings, recentInquiries, categories, districts } from "@/data/mockData";
import { Package, Eye, Phone, DollarSign, Plus, LayoutDashboard, List, MessageSquare, User, Edit, Trash2 } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: List, label: "My Listings" },
  { icon: Plus, label: "Add Produce" },
  { icon: MessageSquare, label: "Messages" },
  { icon: User, label: "Profile" },
];

export default function FarmerDashboard() {
  const { toast } = useToast();
  const [addOpen, setAddOpen] = useState(false);

  const handleAddProduce = () => {
    toast({ title: "Produce listed!", description: "Your crop has been added to the marketplace." });
    setAddOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 border-r bg-card p-4 gap-1">
          {sidebarItems.map(item => (
            <button key={item.label} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Rahim Mia 👋</h1>
            <Dialog open={addOpen} onOpenChange={setAddOpen}>
              <DialogTrigger asChild>
                <Button><Plus className="h-4 w-4 mr-2" /> Add New Produce</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader><DialogTitle>Add New Produce</DialogTitle></DialogHeader>
                <div className="grid gap-4">
                  <Input placeholder="Crop Name" />
                  <Select><SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger><SelectContent>{categories.filter(c => c !== "All").map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Price per kg (৳)" type="number" />
                    <Input placeholder="Quantity (kg)" type="number" />
                  </div>
                  <Select><SelectTrigger><SelectValue placeholder="District" /></SelectTrigger><SelectContent>{districts.filter(d => d !== "All Districts").map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent></Select>
                  <Input type="date" />
                  <Textarea placeholder="Description..." />
                  <Button onClick={handleAddProduce}>List Produce</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Package, label: "My Listings", value: farmerStats.listings, emoji: "📦" },
              { icon: Eye, label: "Total Views", value: farmerStats.views, emoji: "👁️" },
              { icon: Phone, label: "Inquiries", value: farmerStats.inquiries, emoji: "📞" },
              { icon: DollarSign, label: "Est. Revenue", value: `৳${farmerStats.revenue.toLocaleString()}`, emoji: "💰" },
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

          {/* Listings Table */}
          <Card className="mb-8">
            <CardHeader><CardTitle>My Produce Listings</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">Crop</th>
                      <th className="pb-3 font-medium">Price/kg</th>
                      <th className="pb-3 font-medium">Quantity</th>
                      <th className="pb-3 font-medium hidden sm:table-cell">Location</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {farmerListings.map(item => (
                      <tr key={item.id} className="border-b last:border-0">
                        <td className="py-3">{item.emoji} {item.name}</td>
                        <td className="py-3">৳{item.price}</td>
                        <td className="py-3">{item.quantity}{item.unit}</td>
                        <td className="py-3 hidden sm:table-cell">{item.location}</td>
                        <td className="py-3">
                          <Badge variant={item.status === "Available" ? "default" : "secondary"}>{item.status}</Badge>
                        </td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-3 w-3" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-3 w-3" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Inquiries */}
          <Card>
            <CardHeader><CardTitle>Recent Inquiries</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {recentInquiries.map((inq, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                  <div className="text-2xl">🛒</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{inq.buyerName}</p>
                      <span className="text-xs text-muted-foreground">{inq.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Interested in: {inq.crop}</p>
                    <p className="text-sm mt-1">{inq.message}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
