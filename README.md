# TAJIR TRADER — Wholesale Trading Website

> **Brand Tagline:** Trading with Integrity  
> **Version:** 2.0  
> **Tech Stack:** Pure HTML5, CSS3, Vanilla JavaScript (Zero External Frameworks, No Backend, No Database)

---

## 1. Overview

Tajir Trader is a clean, modern, and fully responsive wholesale trading business website designed to showcase 5 core product categories:
1. **Vegetables**
2. **Fruits**
3. **Drinks**
4. **Spices**
5. **Nuts**

Operating strictly on a **catalog-based wholesale business model**, customers can explore products, filter by category, search in real-time, view detailed wholesale specifications in a modal, and instantly communicate with the business through **prefilled WhatsApp click-to-chat** and **prefilled Email inquiries**.

---

## 2. Project Folder Structure

```text
Tajir/
│
├── index.html              # Homepage (8 sections)
├── about.html              # About Us (Mission, Vision, 5 Core Values)
├── products.html           # Wholesale Catalog (Sidebar, Live Search, Sort, Modal)
├── contact.html            # Contact Us (Direct WhatsApp, Email, Address, Inquiry Assistant)
├── sitemap.xml             # Search Engine Sitemap
├── robots.txt              # Search Engine Crawling Directives
│
├── assets/
│   ├── images/
│   │   ├── logo.svg        # Scalable Vector Brand Logo
│   │   ├── hero-banner.jpg # Homepage Hero Banner
│   │   ├── about.jpg       # Agricultural/Warehouse Visual
│   │   ├── vegetables.jpg  # Vegetables Category Banner
│   │   ├── fruits.jpg      # Fruits Category Banner
│   │   ├── drinks.jpg      # Drinks Category Banner
│   │   ├── spices.jpg      # Spices Category Banner
│   │   ├── nuts.jpg        # Nuts Category Banner
│   │   │
│   │   └── products/       # 22 High-Resolution Product Images
│   │       ├── tomatoes.jpg
│   │       ├── pointed-gourd.jpg
│   │       ├── cluster-beans.jpg
│   │       ├── bottle-gourd.jpg
│   │       ├── long-bottle-gourd.jpg
│   │       ├── coriander-leaves.jpg
│   │       ├── long-beans.jpg
│   │       ├── green-chillies.jpg
│   │       ├── gooseberry.jpg
│   │       ├── jambul.jpg
│   │       ├── custard-apple.jpg
│   │       ├── pomegranate.jpg
│   │       ├── chickoo.jpg
│   │       ├── mangoes.jpg
│   │       ├── evian-water.jpg
│   │       ├── kashmiria-soda.jpg
│   │       ├── cardamom.jpg
│   │       ├── betel-nut-fadcha.jpg
│   │       ├── betel-nut-diamond.jpg
│   │       ├── betel-nut-head.jpg
│   │       ├── betel-nut-whole.jpg
│   │       └── almonds.jpg
│   │
│   └── icons/
│       ├── favicon.svg     # Vector Favicon
│       └── favicon.png     # 64x64 PNG Favicon
│
├── css/
│   ├── style.css           # Design tokens, Typography, Header, Footer, Hero, Modal
│   ├── products.css        # Catalog Sidebar, Grid, Filter Chips, Search, Sort
│   └── responsive.css      # Desktop, Tablet, and Mobile Breakpoints
│
└── js/
    ├── products-data.js    # Business metadata & Full 22-Product Array
    ├── products.js         # Filtering, Instant Search, Sorting, Modal Controller
    └── main.js             # Mobile Menu Drawer, Sticky Header, Scroll-to-Top, Floating WA
```

---

## 3. Brand Identity & Design System

- **Forest Green (`#245C3A`):** Primary brand accent, cards, and primary buttons
- **Dark Green (`#183D2B`):** Elegant headings and dark section backgrounds
- **Warm Beige (`#F7F3EA`):** Warm, inviting, natural background
- **White (`#FFFFFF`):** Clean product card backgrounds
- **Charcoal (`#252525`):** High-contrast body typography
- **Golden (`#D6A642`):** Quality badge accents and divider flourishes
- **WhatsApp Green (`#25D366`):** Instant messaging action buttons

### Typography:
- **Headings:** `Playfair Display` (Classic, prestigious serif)
- **Body & Navigation:** `Poppins` (Clean, geometric, highly legible)

---

## 4. Key Interactive Features

1. **Catalog Filtering:**
   - Desktop: Sticky sidebar with dynamic counts for each category.
   - Mobile: Smooth horizontal swipeable filter chip bar.
   - Deep-linking support: visiting `products.html?category=Vegetables` automatically activates that category filter.
2. **Instant Search:**
   - Live character search by name, category, or description.
   - Clear button (`×`) to immediately reset.
   - Empty state with "Reset All Filters" CTA when no products match.
3. **Product Sorting:**
   - Default, Name A–Z, Name Z–A, Latest Added.
4. **Product Detail Modal:**
   - Full wholesale specs: Packaging, Origin, Grade, Minimum Order, and Shelf Life.
   - Direct "Inquire via WhatsApp" and "Inquire via Email" action buttons.
   - Deep-linking support: visiting `products.html?product=14` automatically opens the Mangoes modal.
5. **WhatsApp & Email Integration:**
   - Official `https://wa.me/PHONE?text=...` format with URL encoding.
   - Prefilled product names and wholesale inquiry text.
   - Floating WhatsApp button with pulsing ring on all pages.
6. **Mobile Navigation:**
   - Animated hamburger toggle opening a right-side drawer with backdrop blur.
7. **Wholesale Inquiry Assistant (Contact Page):**
   - Client-side form allowing customers to compose specific trade requests and automatically launch WhatsApp or Email prefilled with all their inputs.

---

## 5. How to Configure Business Details

Open `js/products-data.js` and edit the `TAJIR_CONFIG` object:

```javascript
const TAJIR_CONFIG = {
    brandName: "Tajir Trader",
    tagline: "Trading with Integrity",
    whatsappNumber: "447886132327",       // Your phone number with country code, no + or spaces
    whatsappDisplay: "+44 7886 132327",  // Visual display formatted
    businessEmail: "info@tajir.uk",
    address: "49 Park Rd, Ilford IG1 1SF, UK",
    hours: "Monday – Saturday: 8:00 AM – 7:00 PM (GMT)"
};
```

---

## 6. How to Add a New Product

In `js/products-data.js`, simply append an object to the `PRODUCTS` array:

```javascript
{
    id: 23,
    name: "Fresh Ginger",
    category: "Vegetables", // Must match one of: Vegetables, Fruits, Drinks, Spices, Nuts
    image: "assets/images/products/ginger.jpg",
    shortDescription: "Fresh, plump ginger roots with bold spicy aroma.",
    fullDescription: "Premium wholesale grade ginger with smooth skin and high oleoresin content.",
    packaging: "10 kg / 20 kg ventilated plastic crates or cartons",
    origin: "Select Regional Farms",
    grade: "Export Grade A",
    minOrder: "Commercial Wholesale Lots",
    shelfLife: "30 – 45 Days under cool dry ventilation",
    featured: false
}
```

---

## 7. Deployment to GitHub Pages

1. Initialize git in this directory (or push to a GitHub repository):
   ```bash
   git init
   git add .
   git commit -m "Initial release of Tajir Trader Wholesale Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
2. In GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `main` / Folder: `/ (root)`.
   - Click **Save**.
3. Your static website is live at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`!

