/**
 * TAJIR — Product Catalog Data & Wholesale Business Configuration
 * Brand Tagline: Trading with Integrity
 * 
 * Configurable Wholesale Business Details & Product Catalog
 */

const TAJIR_CONFIG = {
    brandName: "Tajir",
    tagline: "Trading with Integrity",
    // Configurable WhatsApp Number: Country code without '+' or spaces for wa.me
    // Example: 447886132327 (UK)
    whatsappNumber: "447886132327",
    whatsappDisplay: "+44 7886 132327",
    
    // Configurable Business Email
    businessEmail: "info@tajir.uk",
    
    // Physical & Commercial Office
    address: "49 Park Rd, Ilford IG1 1SF, UK",
    hours: "Monday – Saturday: 8:00 AM – 7:00 PM (GMT)",
    tradingScope: "Wholesale, Bulk Supply, Import & Export",
    
    // Social / Quick Links
    social: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com"
    }
};

/**
 * 5 Core Wholesale Product Categories
 */
const CATEGORIES = [
    {
        id: "vegetables",
        name: "Vegetables",
        slug: "vegetables",
        image: "assets/images/vegetables.jpg",
        description: "Farm-fresh wholesale vegetables sourced daily from certified agricultural producers.",
        icon: "carrot"
    },
    {
        id: "fruits",
        name: "Fruits",
        slug: "fruits",
        image: "assets/images/fruits.jpg",
        description: "Premium grade seasonal and tropical fruits selected for superior freshness and flavor.",
        icon: "apple"
    },
    {
        id: "drinks",
        name: "Drinks",
        slug: "drinks",
        image: "assets/images/drinks.jpg",
        description: "Wholesale beverage distributions including natural mineral water and refreshing specialty sodas.",
        icon: "glass-water"
    },
    {
        id: "spices",
        name: "Spices",
        slug: "spices",
        image: "assets/images/spices.jpg",
        description: "Hand-harvested, aromatic whole spices known for intense essential oil potency and purity.",
        icon: "sparkles"
    },
    {
        id: "nuts",
        name: "Nuts",
        slug: "nuts",
        image: "assets/images/nuts.jpg",
        description: "High-grade whole, split, and specialty-cut nuts for wholesale culinary and commercial processing.",
        icon: "nut"
    }
];

/**
 * Complete Product Catalog (22 Products)
 */
const PRODUCTS = [
    // ---------------- VEGETABLES ----------------
    {
        id: 1,
        name: "Tomatoes",
        category: "Vegetables",
        image: "assets/images/products/tomatoes.jpg",
        shortDescription: "Fresh, firm, vine-ripened red tomatoes ideal for commercial and food service buyers.",
        fullDescription: "Premium wholesale grade red tomatoes harvested at optimal maturity to guarantee firm texture, rich natural acidity, and outstanding shelf life during long-distance transit. Cleaned, graded, and packed in ventilated export-grade cartons.",
        packaging: "6 kg / 10 kg ventilated corrugated cartons or plastic crates",
        origin: "Direct Farm Source (Select Regional Cultivars)",
        grade: "Export Grade A – Sorted & Calibrated",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "14 – 21 Days (Refrigerated 10°C – 12°C)",
        featured: true
    },
    {
        id: 2,
        name: "Pointed Gourd",
        category: "Vegetables",
        image: "assets/images/products/pointed-gourd.png",
        shortDescription: "Fresh green Parwal with tender skin and firm pulp, packed for culinary freshness.",
        fullDescription: "Pointed Gourd (Parwal) sourced directly from specialized growers. Hand-selected for uniform size, vibrant green skin, and minimal seeds, ensuring high yield and visual appeal for ethnic grocers and commercial hospitality kitchens.",
        packaging: "5 kg / 10 kg aerated export boxes",
        origin: "Subcontinental Agricultural Belts",
        grade: "Fresh Harvest Grade A",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "7 – 10 Days under cold chain",
        featured: false
    },
    {
        id: 3,
        name: "Cluster Beans",
        category: "Vegetables",
        image: "assets/images/products/cluster-beans.png",
        shortDescription: "Tender, crisp Gwar Phali pods free of fibrous strings and blemishes.",
        fullDescription: "Young, slender cluster beans (Gwar Phali) harvested early for utmost tenderness and deep green pigmentation. Meticulously sorted to remove mature or fibrous pods, delivering high culinary value to wholesale distributors.",
        packaging: "5 kg / 10 kg breathable bulk packaging",
        origin: "Direct Grower Contracts",
        grade: "Select Tender Pods",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "8 – 12 Days (Controlled atmosphere)",
        featured: false
    },
    {
        id: 4,
        name: "Bottle Gourd",
        category: "Vegetables",
        image: "assets/images/products/bottle-gourd.png",
        shortDescription: "Smooth, cylindrical light green Lauki with succulent, tender white flesh.",
        fullDescription: "Classic round-to-cylindrical Bottle Gourd (Lauki / Doodhi) chosen for pale green tender rind, high water content, and sweet delicate flavor. Each gourd is individually sleeve-protected to prevent transit bruising.",
        packaging: "10 kg / 15 kg cushioned master cartons",
        origin: "Certified Farm Cooperatives",
        grade: "Grade A Export Standard",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "12 – 18 Days (Cool storage)",
        featured: false
    },
    {
        id: 5,
        name: "Long Bottle Gourd",
        category: "Vegetables",
        image: "assets/images/products/long-bottle-gourd.png",
        shortDescription: "Straight, elongated premium gourds with uniform diameter and pristine skins.",
        fullDescription: "Specially cultivated elongated bottle gourds boasting straight profiles, minimal seed core, and firm flesh. Ideal for high-volume commercial slicing, institutional catering, and international vegetable distribution.",
        packaging: "10 kg / 12 kg foam-net wrapped export cartons",
        origin: "Farm Direct",
        grade: "Premium Elongated Selection",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "14 – 20 Days (Optimal 12°C)",
        featured: false
    },
    {
        id: 6,
        name: "Coriander Leaves",
        category: "Vegetables",
        image: "assets/images/products/coriander-leaves.png",
        shortDescription: "Aromatic, bright green fresh cilantro bunches with crisp stems and intact roots.",
        fullDescription: "High-fragrance fresh coriander bunches harvested at sunrise, quickly hydro-cooled to lock in moisture, crispness, and volatile essential oils. Shipped in moisture-retaining perforated liners to maintain garden freshness.",
        packaging: "4 kg / 8 kg bunches in moisture-retaining ice-pack cartons",
        origin: "Hydro-Cooled Regional Farms",
        grade: "Supreme Aromatic Bunches",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "5 – 8 Days (Refrigerated 2°C – 4°C)",
        featured: false
    },
    {
        id: 7,
        name: "Long Beans",
        category: "Vegetables",
        image: "assets/images/products/long-beans.png",
        shortDescription: "Flexible, crisp yardlong green beans packed in uniform bunches.",
        fullDescription: "Long cowpea beans (Bora / Yardlong beans) hand-picked when tender and pliable. Free of pitting and insect defects, these long beans retain deep chlorophyll color and crisp snap through bulk supply chains.",
        packaging: "5 kg / 10 kg wrapped bundles in ventilated cartons",
        origin: "Subtropical Agricultural Zones",
        grade: "Extra Tender Grade A",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "7 – 10 Days under cold chain",
        featured: false
    },
    {
        id: 8,
        name: "Green Chillies",
        category: "Vegetables",
        image: "assets/images/products/green-chillies.png",
        shortDescription: "Pungent, glossy green hot chillies with strong calyx and fiery aroma.",
        fullDescription: "Carefully sorted hot green chillies known for vibrant emerald color, high Scoville heat units, and firm, waxy skin. Harvested with stems intact to seal in essential pungency and prevent post-harvest spoilage.",
        packaging: "3 kg / 5 kg corrugated export boxes with aeration holes",
        origin: "Spice Belt Farms",
        grade: "Export Hot Grade A",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "14 – 21 Days (Cool 8°C – 10°C)",
        featured: true
    },
    {
        id: 9,
        name: "Gooseberry",
        category: "Vegetables",
        image: "assets/images/products/gooseberry.png",
        shortDescription: "Nutrient-dense Indian Gooseberry (Amla) with crisp, astringent flesh.",
        fullDescription: "Traditional Indian Amla (Gooseberry) recognized for exceptionally high natural Vitamin C and antioxidant concentration. Firm, round, translucent yellow-green drupes suited for fresh retail distribution, herbal processing, and juicing.",
        packaging: "5 kg / 10 kg rigid corrugated cartons",
        origin: "Commercial Orchard Plantations",
        grade: "Select Large Diameter",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "15 – 25 Days (Cool dry storage)",
        featured: false
    },

    // ---------------- FRUITS ----------------
    {
        id: 10,
        name: "Jambul",
        category: "Fruits",
        image: "assets/images/products/jambul.png",
        shortDescription: "Rich purple-black Jamun fruit with juicy, tangy-sweet medicinal pulp.",
        fullDescription: "Seasonal black plums (Jambul / Jamun) harvested at peak ripeness. Famous for deep anthocyanin pigmentation, unique sweet-astringent flavor profile, and esteemed therapeutic reputation in wellness and premium fruit markets.",
        packaging: "2 kg / 4 kg cushioned clamshells in master cartons",
        origin: "Seasonal Tropical Groves",
        grade: "Selected Ripe Grade A",
        minOrder: "Seasonal Wholesale Lots",
        shelfLife: "4 – 6 Days (Requires cold chain 4°C)",
        featured: false
    },
    {
        id: 11,
        name: "Custard Apple",
        category: "Fruits",
        image: "assets/images/products/custard-apple.png",
        shortDescription: "Creamy, fragrant Sitaphal with embossed green skin and velvety sweet pulp.",
        fullDescription: "Premium Custard Apple (Sitaphal / Sharifa) boasting large tuberculated carpels that yield delicious, custardy white segments with delicate floral aroma. Packed in individual protective foam socks to prevent transit pressure.",
        packaging: "3 kg / 5 kg single-layer foam-cushioned boxes",
        origin: "Semi-Arid Orchard Belts",
        grade: "Premium Table Grade",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "5 – 8 Days (Firm to ripe staging)",
        featured: false
    },
    {
        id: 12,
        name: "Pomegranate",
        category: "Fruits",
        image: "assets/images/products/pomegranate.png",
        shortDescription: "Ruby red, sweet-tart pomegranates bursting with juicy arils and glossy rind.",
        fullDescription: "Export-standard pomegranates (Bhagwa variety) renowned worldwide for lustrous crimson rind, soft edible seeds, high brix sweetness, and antioxidant-rich ruby juice. Stringently calibrated for uniform weight and defect-free crowns.",
        packaging: "3.5 kg / 5 kg presentation master cartons (8, 10, 12 count)",
        origin: "Global Arid Fruit Basins",
        grade: "Super-Fine Export Grade",
        minOrder: "Pallet / Commercial Wholesale",
        shelfLife: "30 – 45 Days (Controlled 5°C – 7°C)",
        featured: true
    },
    {
        id: 13,
        name: "Chickoo",
        category: "Fruits",
        image: "assets/images/products/chickoo.png",
        shortDescription: "Sweet, malty Sapota with granular brown flesh and honeyed sweetness.",
        fullDescription: "Sun-ripened Sapodilla (Chickoo) known for its thin velvety skin, luscious brown pulp, and natural brown sugar caramel notes. Carefully washed, destemmed, and packed at firm maturity for controlled ripening at destination.",
        packaging: "4 kg / 6 kg foam-padded corrugated cartons",
        origin: "Coastal Plantation Orchards",
        grade: "Sweet Round Grade A",
        minOrder: "Commercial Wholesale Lots",
        shelfLife: "7 – 10 Days (Cool storage)",
        featured: false
    },
    {
        id: 14,
        name: "Mangoes",
        category: "Fruits",
        image: "assets/images/products/mangoes.png",
        shortDescription: "King of fruits: golden, fragrant wholesale mangoes with unmatched sweetness.",
        fullDescription: "Exquisite commercial wholesale mangoes, featuring world-celebrated cultivars (Alphonso, Kesar, Chaunsa). Hand-harvested, hot-water or vapor-heat treated for export compliance, delivering buttery fiberless pulp and heavenly tropical perfume.",
        packaging: "3 kg / 5 kg presentation boxes with individual fruit sleeves",
        origin: "Designated Mango Producing Valleys",
        grade: "Export Class 1 Supreme",
        minOrder: "Air Cargo & Commercial Wholesale",
        shelfLife: "10 – 16 Days (Ripening stage dependent)",
        featured: true
    },

    // ---------------- DRINKS ----------------
    {
        id: 15,
        name: "Evian Water",
        category: "Drinks",
        image: "assets/images/products/evian-water.png",
        shortDescription: "Pristine French Alpine natural mineral water with balanced electrolyte profile.",
        fullDescription: "World-renowned Evian Natural Mineral Water, naturally filtered through glacial rocks in the French Alps over 15 years. Characterized by neutral pH balance, pristine mineral composition, and international luxury hospitality demand.",
        packaging: "Cases of 12 x 750ml / 24 x 500ml / 24 x 330ml bottles",
        origin: "Évian-les-Bains, French Alps",
        grade: "Original Certified Bottling",
        minOrder: "Pallet / Container Loads",
        shelfLife: "24 Months (Store in cool, dry place)",
        featured: true
    },
    {
        id: 16,
        name: "Kashmiria Soda",
        category: "Drinks",
        image: "assets/images/products/kashmiria-soda.png",
        shortDescription: "Crisp, intensely carbonated specialty club soda for refreshing wholesale distribution.",
        fullDescription: "Premium Kashmiria Club Soda & carbonated beverages, crafted with ultra-purified water and fine carbonation beads that deliver long-lasting fizz. The premier mixer choice for upscale beverage bars, catering events, and retail stores.",
        packaging: "24 x 300ml glass bottles / 24 x 330ml cans per tray",
        origin: "Certified Beverage Bottling Facilities",
        grade: "Commercial Beverage Standard",
        minOrder: "Wholesale Pallet Batches",
        shelfLife: "12 Months (Ambient storage)",
        featured: false
    },

    // ---------------- SPICES ----------------
    {
        id: 17,
        name: "Cardamom",
        category: "Spices",
        image: "assets/images/products/cardamom.png",
        shortDescription: "Bold green cardamom pods (Elaichi) with intense aromatic essential oil content.",
        fullDescription: "Super-bold whole green cardamom pods (8mm+ diameter) harvested from high-elevation misty plantations. Naturally dried to preserve radiant jade green color, full seed maturity, and complex eucalyptus-citrus fragrance.",
        packaging: "1 kg / 5 kg food-grade poly bags in 25 kg master cartons",
        origin: "High Altitude Spice Plantations",
        grade: "Super Bold 8mm+ Extra Green",
        minOrder: "Commercial Wholesale Quantities",
        shelfLife: "24 Months (Airtight dry storage)",
        featured: true
    },

    // ---------------- NUTS ----------------
    {
        id: 18,
        name: "Betel Nut – Fadcha / Half Cut",
        category: "Nuts",
        image: "assets/images/products/betel-nut-fadcha.png",
        shortDescription: "Clean, machine-sliced half-cut Areca nuts with uniform thickness and moisture.",
        fullDescription: "Premium Fadcha (half-cut) Areca Betel Nuts, systematically sliced to reveal the marble-patterned endosperm. Thoroughly cured and sundried under strict moisture controls to guarantee clean edges, firmness, and absence of mold.",
        packaging: "25 kg / 50 kg heavy-duty jute bags or woven PP bags",
        origin: "Prime Areca Growing Regions",
        grade: "Machine Cleaned Fadcha Cut",
        minOrder: "Commercial Bag Lots",
        shelfLife: "18 Months (Dry ventilated warehouse)",
        featured: false
    },
    {
        id: 19,
        name: "Betel Nut – Diamond Cut",
        category: "Nuts",
        image: "assets/images/products/betel-nut-diamond.png",
        shortDescription: "Precision geometric diamond-sliced betel nuts for confectionery and processing.",
        fullDescription: "High-demand Diamond Cut Betel Nuts processed with precision cutters to create uniform geometric diamond pieces. Preferred by commercial processing houses for consistent piece size, appealing chew texture, and clean processing purity.",
        packaging: "25 kg / 50 kg double-lined export bags",
        origin: "Selected Areca Plantations",
        grade: "Specialty Diamond Cut Grade A",
        minOrder: "Commercial Bag Lots",
        shelfLife: "18 Months (Dry warehouse storage)",
        featured: true
    },
    {
        id: 20,
        name: "Betel Nut – Head Cut",
        category: "Nuts",
        image: "assets/images/products/betel-nut-head.png",
        shortDescription: "Solid head-cut areca nuts featuring dense kernel structure and rich color.",
        fullDescription: "Carefully selected Head Cut Betel Nut pieces derived from the crown of mature areca nuts. Exceptionally dense, robust, and clean, providing optimal yield for commercial processors and traditional wholesale markets.",
        packaging: "25 kg / 50 kg woven polypropylene sacks",
        origin: "Certified Tropical Areca Basins",
        grade: "Commercial Head Cut Standard",
        minOrder: "Commercial Bag Lots",
        shelfLife: "18 Months (Dry ventilated condition)",
        featured: false
    },
    {
        id: 21,
        name: "Betel Nut",
        category: "Nuts",
        image: "assets/images/products/betel-nut-whole.png",
        shortDescription: "Whole cured Supari nuts with intact shells and solid, well-matured centers.",
        fullDescription: "Whole unsliced Betel Nuts (Supari) harvested from fully mature areca palms, properly husked, boiled or sun-cured according to traditional grading benchmarks. Free from fungus, moisture damage, and excessive shrinkage.",
        packaging: "50 kg export quality jute / gunny sacks",
        origin: "Tropical Plantation Belts",
        grade: "Whole Matured Supari Grade 1",
        minOrder: "Container / Metric Ton Lots",
        shelfLife: "24 Months (Moisture-controlled storage)",
        featured: false
    },
    {
        id: 22,
        name: "Almonds",
        category: "Nuts",
        image: "assets/images/products/almonds.png",
        shortDescription: "Whole, sweet, crunch-filled wholesale almonds rich in natural oils and nutrients.",
        fullDescription: "Superior wholesale almonds (California Nonpareil / Premium Mamra grade) sorted for large caliber, intact kernels, and golden-brown skins. Zero bitterness, clean nutty crunch, and packed in nitrogen-flushed or vacuum liners to lock in freshness.",
        packaging: "10 kg / 25 kg carton boxes with poly-liner or bulk bags",
        origin: "Global Almond Orchards",
        grade: "Supreme / Extra No. 1 Grade",
        minOrder: "Commercial Wholesale Quantities",
        shelfLife: "12 – 18 Months (Cool dry storage below 15°C)",
        featured: true
    }
];

/**
 * WhatsApp Click-to-Chat Link Generator
 * Complies with Section 11.1 of PRD:
 * https://wa.me/COUNTRYCODEPHONENUMBER?text=ENCODED_MESSAGE
 */
function getWhatsAppInquiryUrl(productName, customNotes = "") {
    const phone = TAJIR_CONFIG.whatsappNumber;
    let message = "";
    
    if (productName && productName.trim() !== "") {
        message = `Hello Tajir, I am interested in purchasing ${productName.trim()}. Please share the wholesale price, available quantity, and delivery details.`;
        if (customNotes && customNotes.trim() !== "") {
            message += ` Note: ${customNotes.trim()}`;
        }
    } else {
        message = "Hello Tajir, I would like to know more about your products and wholesale purchasing options.";
    }
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Email Mailto Link Generator
 * Complies with Section 11.2 of PRD:
 * mailto:businessEmail?subject=ENCODED_SUBJECT&body=ENCODED_BODY
 */
function getEmailInquiryUrl(productName, customNotes = "") {
    const email = TAJIR_CONFIG.businessEmail;
    let subject = "";
    let body = "";
    
    if (productName && productName.trim() !== "") {
        subject = `Product Inquiry – ${productName.trim()}`;
        body = `Hello Tajir,\n\nI am interested in purchasing ${productName.trim()}.\n\nPlease share the wholesale pricing, minimum order quantity, availability, and delivery details.`;
        if (customNotes && customNotes.trim() !== "") {
            body += `\n\nAdditional Requirements:\n${customNotes.trim()}`;
        }
        body += "\n\nThank you.";
    } else {
        subject = "General Wholesale Inquiry – Tajir";
        body = "Hello Tajir,\n\nI am interested in learning more about your wholesale product catalog, volume pricing, and supply capabilities.\n\nPlease get in touch with your latest wholesale terms.\n\nThank you.";
    }
    
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Direct WhatsApp trigger handler
 */
function contactOnWhatsApp(productName, customNotes = "") {
    const url = getWhatsAppInquiryUrl(productName, customNotes);
    window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Direct Email trigger handler
 * Dispatches mailto via an authentic anchor element to ensure modern browsers 
 * delegate cleanly to the user's default email app (Outlook, Apple Mail, etc.)
 */
function contactByEmail(productName, customNotes = "") {
    const url = getEmailInquiryUrl(productName, customNotes);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        link.remove();
    }, 300);
}

/**
 * Direct Gmail Web Compose trigger handler
 * Opens a new tab directly in Gmail compose with prefilled recipient, subject, and body
 */
function contactOnGmail(productName, customNotes = "") {
    const email = TAJIR_CONFIG.businessEmail;
    let subject = "";
    let body = "";
    
    if (productName && productName.trim() !== "") {
        subject = `Product Inquiry – ${productName.trim()}`;
        body = `Hello Tajir,\n\nI am interested in purchasing ${productName.trim()}.\n\nPlease share the wholesale pricing, minimum order quantity, availability, and delivery details.`;
        if (customNotes && customNotes.trim() !== "") {
            body += `\n\nAdditional Requirements:\n${customNotes.trim()}`;
        }
        body += "\n\nThank you.";
    } else {
        subject = "General Wholesale Inquiry – Tajir";
        body = "Hello Tajir,\n\nI am interested in learning more about your wholesale product catalog, volume pricing, and supply capabilities.\n\nPlease get in touch with your latest wholesale terms.\n\nThank you.";
    }
    
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

