<div align="center">

<!-- LOGO / BANNER -->
<img src="https://img.shields.io/badge/🌿-Agrolink-4A7C59?style=for-the-badge&labelColor=1C2B20&color=4A7C59" height="50" alt="Agrolink"/>

# 🌾 Agrolink — Direct Farmer-to-Buyer Marketplace

### *Empowering Farmers. Feeding the Future.*

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-agrolink--farm--direct.lovable.app-4A7C59?style=for-the-badge&logo=vercel&logoColor=white)](https://agrolink-farm-direct.lovable.app)
[![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Lovable](https://img.shields.io/badge/Built_with-Lovable-FF6B6B?style=for-the-badge)](https://lovable.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

> **Agrolink** is a modern agricultural digital marketplace that connects small and medium-scale farmers **directly** with buyers — eliminating middlemen, ensuring fair pricing, and increasing farmer income.

<br/>

---

</div>

## 📸 Preview

<div align="center">

| 🏠 Landing Page | 🛒 Marketplace | 👨‍🌾 Farmer Dashboard |
|:-:|:-:|:-:|
| Hero + Problem Statement | Browse & Filter Crops | List & Manage Produce |

</div>

<br/>

---

## 🚨 The Problem

Small-scale farmers across Bangladesh and South Asia face a **broken supply chain**:

| ❌ Problem | 📉 Impact |
|---|---|
| Heavy dependency on middlemen | Farmers earn 30–40% less than market price |
| Unfair & non-transparent pricing | Unstable income for farming families |
| Limited access to direct buyers | Food supply inefficiency & waste |
| No digital market presence | Poverty & food insecurity increases |

<br/>

---

## ✅ Our Solution

**Agrolink** builds a transparent digital bridge between farmers and buyers:

```
 👨‍🌾 Farmer                    🌐 Agrolink                    🛒 Buyer
 Lists Produce   ──────────►   Fair Pricing Platform   ──────────►   Finds Crops
 Sets Own Price               No Middlemen                          Contacts Directly
 Gets Full Value              Transparent System                    Gets Fresh Produce
```

<br/>

---

## ✨ Features

### 🌐 Public Pages
- **Landing Page** — Hero section, problem statement, how it works, SDG alignment
- **Marketplace** — Browse all listings with search, filter by category, location & price
- **Product Detail** — Full crop info, farmer profile, contact modal

### 👨‍🌾 Farmer Dashboard
- ➕ List new produce (name, category, price/kg, quantity, location, harvest date)
- 📋 Manage listings with status (Available / Sold Out)
- 📊 Stats — total listings, views, inquiries, estimated revenue
- 📬 View buyer inquiries and messages

### 🛒 Buyer Dashboard
- 🔖 Save favourite listings
- 📦 Track orders and purchase history
- 👨‍🌾 View all contacted farmers
- 🔍 Quick search directly from dashboard

### 🎯 Core Capabilities
- ✅ Direct farmer-to-buyer contact (no middlemen)
- ✅ Real-time transparent pricing in ৳ BDT
- ✅ Product categories: Vegetables, Fruits, Grains, Spices
- ✅ Filter by location, price range, crop type
- ✅ Mobile-first responsive design
- ✅ Toast notifications on user actions

<br/>

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS 3 |
| **UI Components** | shadcn/ui |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **State** | React useState / Context |
| **Build Tool** | Vite |
| **Platform** | Lovable.dev |
| **Deployment** | Lovable Hosting (CDN) |

<br/>

---

## 🌍 Social Impact — SDG Alignment

<div align="center">

| 🔴 SDG 1 — No Poverty | 🟠 SDG 2 — Zero Hunger | 🟤 SDG 8 — Decent Work |
|:-:|:-:|:-:|
| Increases farmer income | Reduces food waste & supply gaps | Promotes rural entrepreneurship |
| Strengthens livelihoods | Improves supply chain efficiency | Creates sustainable rural jobs |
| Enhances market access | Improves smallholder market access | Provides access to digital tools |

</div>

<br/>

---

## 📊 Impact Numbers (Demo)

```
 🌾 1,200+          🤝 340+           ⭐ 98%            📍 8
  Farmers            Buyers            Satisfaction       Districts
  Registered         Connected         Rate               Covered
```

<br/>

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/zahid397/agrolink.git
cd agrolink

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

<br/>

---

## 📁 Project Structure

```
agrolink/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui base components
│   │   ├── Navbar.jsx        # Sticky navigation
│   │   ├── ProductCard.jsx   # Marketplace listing card
│   │   ├── ContactModal.jsx  # Farmer contact dialog
│   │   └── FilterSidebar.jsx # Search & filter panel
│   ├── pages/
│   │   ├── Landing.jsx       # Home / landing page
│   │   ├── Marketplace.jsx   # Browse all listings
│   │   ├── ProductDetail.jsx # Single product view
│   │   ├── FarmerDashboard.jsx
│   │   └── BuyerDashboard.jsx
│   ├── data/
│   │   └── mockData.js       # Demo farmers, products, buyers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

<br/>

---

## 👥 Demo Data — Meet the Farmers

| 👨‍🌾 Farmer | 📍 Location | 🌾 Crop | 💰 Price |
|---|---|---|---|
| Rahim Mia | Gazipur | 🍅 Tomatoes | ৳45/kg |
| Fatema Begum | Manikganj | 🥬 Spinach | ৳30/kg |
| Karim Ahmed | Rajshahi | 🌾 Aman Rice | ৳38/kg |
| Hasan Ali | Munshiganj | 🥔 Potato | ৳22/kg |
| Saleha Khatun | Bogura | 🌶️ Green Chili | ৳60/kg |
| Jalal Uddin | Sylhet | 🫛 Beans | ৳55/kg |

<br/>

---

## 🎯 Roadmap

- [x] MVP Landing Page
- [x] Marketplace with filters
- [x] Farmer & Buyer Dashboards
- [x] Product Detail + Contact Modal
- [ ] 🔐 Real authentication (Supabase)
- [ ] 💬 Real-time messaging (WebSockets)
- [ ] 🗺️ Map-based farmer discovery
- [ ] 📱 React Native mobile app
- [ ] 💳 Payment integration (SSLCommerz / bKash)
- [ ] 🤖 AI crop price prediction
- [ ] 🌐 Bangla language support

<br/>

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "feat: add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

<br/>

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<br/>

---

## 👨‍💻 Author

<div align="center">

**MD. Zahid Hasan**

[![GitHub](https://img.shields.io/badge/GitHub-zahid397-181717?style=for-the-badge&logo=github)](https://github.com/zahid397)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-md--zahid--hasan-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/md-zahid-hasan-7b15ba20b)
[![Email](https://img.shields.io/badge/Email-zh05698@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zh05698@gmail.com)

*Full-Stack Developer | Dhaka, Bangladesh*

</div>

<br/>

---

<div align="center">

**⭐ Star this repo if you found it useful!**

*Agrolink — Empowering Farmers. Feeding the Future.* 🌾

[![Live Demo](https://img.shields.io/badge/🌐%20Try%20It%20Live-agrolink--farm--direct.lovable.app-4A7C59?style=for-the-badge)](https://agrolink-farm-direct.lovable.app)

</div>
