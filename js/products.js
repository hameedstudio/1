/* ============================================================
   HAMEED STUDIO — Product data
   ------------------------------------------------------------
   HOW TO ADD / EDIT A PRODUCT
   Each product is one object in the PRODUCTS array below.

   - images: gallery photos. Keep them 16:9 (e.g. 800x450) so they
     line up with the CSS aspect-ratio boxes. Just replace the src
     with your own photo URL / local path.
   - options.color: ONLY add this if the product needs a colour /
     design picker. Each entry can show either a real "img"
     (a photo swatch, like the mug designs) or a plain "hex"
     (a colour dot, like a cushion colour).
   - options.size: ONLY add this if the product needs a size picker.
   - A product can have BOTH options.color and options.size (e.g.
     the cushion), ONLY ONE of them (e.g. the mug = color only,
     the lamp = size only), or NEITHER (just quantity, e.g. the
     hanging frame / combo pack).
   - Leave out the whole "options" key (or the one you don't need)
     and the product page will automatically hide that picker.
   ============================================================ */

const PRODUCTS = [
  {
    id: "fathers-day-mugs",
    name: "Father's Day Mugs",
    category: "Mugs",
    badge: "50% OFF",
    price: 499,
    oldPrice: 998,
    rating: 5,
    reviews: 128,
    desc: "",
    specs: ["Premium Quality Ceramic", "Microwave Safe", "Dishwasher Safe", "High Quality Print"],
    images: [
      { src: "https://placehold.co/800x450/16244f/f4ead2?text=Father%27s+Day+Mug", label: "Photo Mug" },
      { src: "https://placehold.co/800x450/0e1a3f/d9a95e?text=Best+Dad+Ever", label: "Best Dad Ever" },
      { src: "https://placehold.co/800x450/16244f/ffffff?text=Mug+Side+View", label: "Side view" }
    ],
    options: {
      color: [
        { name: "Photo Mug", img: "https://placehold.co/160x90/16244f/f4ead2?text=Photo" },
        { name: "Best Dad Ever", img: "https://placehold.co/160x90/0e1a3f/d9a95e?text=Dad" }
      ]
    }
  },
  {
    id: "led-photo-frame",
    name: "LED Photo Frame",
    category: "Frames",
    badge: "30% OFF",
    price: 1699,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 76,
    desc: "",
    specs: ["Warm LED Lighting", "USB Powered", "Wooden Stand Included", "Scratch-resistant Glass"],
    images: [
      { src: "https://placehold.co/800x450/1d2c5c/d9a95e?text=LED+Photo+Frame", label: "Lit up" },
      { src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Frame+Off", label: "Lights off" }
    ],
    options: {
      size: ["Small (6x8 in)", "Medium (8x10 in)", "Large (10x12 in)"]
    }
  },
  {
    id: "hanging-photo-frame",
    name: "Hanging Photo Frame",
    category: "Frames",
    badge: "50% OFF",
    price: 499,
    oldPrice: 998,
    rating: 4.7,
    reviews: 54,
    desc: "A beautiful decorative hanging frame string to display a run of favourite memories together.",
    specs: ["3 Photo Slots", "Ready to Hang", "Lightweight Frame", "Easy Wall Mount"],
    images: [
      { src: "https://placehold.co/800x450/16244f/f4ead2?text=Hanging+Photo+Frame", label: "Main" },
      { src: "../", label: "Close up" }
     
     
    ]
    /* no options object at all → page shows only quantity + add to cart */
  },
  {
    id: "super-dad-mug",
    name: "Super Dad Mug",
    category: "Mugs",
    badge: "50% OFF",
    price: 499,
    oldPrice: 998,
    rating: 4.8,
    reviews: 91,
    desc: "A bold 'Super Dad' print on a sturdy ceramic mug — because every dad deserves a cape.",
    specs: ["Premium Quality Ceramic", "Microwave Safe", "Dishwasher Safe", "Fade-resistant Print"],
    images: [
      { src: "https://placehold.co/800x450/16244f/ffffff?text=Super+Dad+Mug", label: "Front" },
      { src: "https://placehold.co/800x450/0e1a3f/d9a95e?text=Mug+Handle", label: "Handle side" }
    ],
    options: {
      color: [
        { name: "Black Handle", hex: "#16244f" },
        { name: "Gold Handle", hex: "#b9873c" },
        { name: "White", hex: "#ffffff" }
      ]
    }
  },
  {
    id: "collage-photo-frame",
    name: "Collage Photo Frame",
    category: "Frames",
    badge: "40% OFF",
    price: 1299,
    oldPrice: 2199,
    rating: 4.6,
    reviews: 63,
    desc: "Multiple memories, one clean frame. A gallery-style collage frame for your favourite moments.",
    specs: ["Multiple Memories, Clear Frame", "Sturdy MDF Backing", "Wall or Table Mount", "Easy Photo Swap"],
    images: [
      { src: "https://placehold.co/800x450/16244f/f4ead2?text=Collage+Photo+Frame", label: "Main" },
      { src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Collage+Layout", label: "Layout" }
    ],
    options: {
      size: ["4-Photo Layout", "6-Photo Layout", "9-Photo Layout"],
      color: [
        { name: "Black", hex: "#1b2233" },
        { name: "Walnut Wood", hex: "#7a5230" },
        { name: "White", hex: "#ffffff" }
      ]
    }
  },
  {
    id: "led-photo-lamp",
    name: "LED Photo Lamp",
    category: "Frames",
    badge: "32% OFF",
    price: 1899,
    oldPrice: 2799,
    rating: 4.4,
    reviews: 38,
    desc: "An elegant round photo lamp that keeps a cherished picture glowing on your bedside or shelf.",
    specs: ["Elegant Lamp with Photo", "Touch Dimmer", "USB Rechargeable", "Acrylic Photo Panel"],
    images: [
      { src: "https://placehold.co/800x450/1d2c5c/d9a95e?text=LED+Photo+Lamp", label: "Lit" },
      { src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Lamp+Base", label: "Base" }
    ],
    options: {
      size: ["Small (4 in)", "Large (6 in)"]
    }
  },
  {
    id: "printed-cushion",
    name: "Printed Cushion",
    category: "Cushion",
    badge: "46% OFF",
    price: 799,
    oldPrice: 1499,
    rating: 4.3,
    reviews: 47,
    desc: "A soft and premium quality cushion, printed with your favourite photo or a 'Best Dad Ever' design.",
    specs: ["Soft & Premium Quality", "Hidden Zip Closure", "Machine Washable Cover", "Fade-resistant Print"],
    images: [
      { src: "https://placehold.co/800x450/f4ead2/16244f?text=Printed+Cushion", label: "Main" },
      { src: "https://placehold.co/800x450/16244f/ffffff?text=Cushion+Back", label: "Back" }
    ],
    options: {
      size: ["12 x 12 in", "16 x 16 in", "18 x 18 in"],
      color: [
        { name: "White", hex: "#ffffff" },
        { name: "Grey", hex: "#9aa0ac" },
        { name: "Navy", hex: "#16244f" }
      ]
    }
  },
  {
    id: "photo-combo-pack",
    name: "Photo Combo Pack",
    category: "Combo",
    badge: "50% OFF",
    price: 499,
    oldPrice: 998,
    rating: 4.9,
    reviews: 102,
    desc: "Our best-selling bundle — a mug, a cushion and a frame, all featuring the same cherished photo.",
    specs: ["Mug + Cushion + Frame", "Matching Photo Print", "Gift-ready Packaging", "Great Value Bundle"],
    images: [
      { src: "https://placehold.co/800x450/16244f/f4ead2?text=Photo+Combo+Pack", label: "Main" },
      { src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Combo+Contents", label: "Contents" }
    ]
    /* no options → quantity only */
  }
];

// Additional products requested by user
PRODUCTS.push(
  { id: "white-mug", name: "White Mug", category: "Mugs", badge: "", price: 349, oldPrice: 449, rating: 4.4, reviews: 12, desc: "", specs: ["Ceramic","Photo Print"], images: [{ src: "https://placehold.co/800x450/ffffff/16244f?text=White+Mug", label: "White Mug" }] },
  { id: "coloured-mug", name: "Coloured Mug", category: "Mugs", badge: "", price: 399, oldPrice: 499, rating: 4.5, reviews: 18, desc: "", specs: ["Coloured Handle","High quality print"], images: [{ src: "https://placehold.co/800x450/f4ead2/16244f?text=Coloured+Mug", label: "Coloured Mug" }] },
  { id: "heart-mug", name: "Heart Mug", category: "Mugs", badge: "", price: 449, oldPrice: 549, rating: 4.6, reviews: 9, desc: "", specs: ["Heart-shaped print","Ceramic"], images: [{ src: "https://placehold.co/800x450/ffdde1/16244f?text=Heart+Mug", label: "Heart Mug" }] },
  { id: "magic-mug", name: "Magic Mug", category: "Mugs", badge: "", price: 549, oldPrice: 699, rating: 4.3, reviews: 7, desc: "", specs: ["Heat reveal","Photo print"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Magic+Mug", label: "Magic Mug" }] },

  { id: "square-cushion", name: "Square Cushion", category: "Cushion", badge: "", price: 799, oldPrice: 999, rating: 4.5, reviews: 22, desc: "", specs: ["Soft cover","Hidden zip"], images: [{ src: "https://placehold.co/800x450/f4ead2/16244f?text=Square+Cushion", label: "Square Cushion" }] },
  { id: "magic-cushion", name: "Magic Cushion", category: "Cushion", badge: "", price: 899, oldPrice: 1099, rating: 4.4, reviews: 11, desc: "", specs: ["Glow effect","Printed cover"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Magic+Cushion", label: "Magic Cushion" }] },
  { id: "heart-cushion", name: "Heart Cushion", category: "Cushion", badge: "", price: 749, oldPrice: 899, rating: 4.2, reviews: 6, desc: "", specs: ["Heart design","Soft fill"], images: [{ src: "https://placehold.co/800x450/ffdde1/16244f?text=Heart+Cushion", label: "Heart Cushion" }] },

  { id: "mirror-frame", name: "Mirror Frame", category: "Frames", badge: "", price: 1299, oldPrice: 1599, rating: 4.1, reviews: 8, desc: "", specs: ["Mirror finish","Wall mount"], images: [{ src: "https://placehold.co/800x450/1d2c5c/d9a95e?text=Mirror+Frame", label: "Mirror Frame" }] },
  { id: "couple-frame", name: "Couple Frame", category: "Frames", badge: "", price: 1199, oldPrice: 1399, rating: 4.6, reviews: 14, desc: "", specs: ["Couple layout","Premium print"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Couple+Frame", label: "Couple Frame" }] },
  { id: "simple-frame", name: "Frame", category: "Frames", badge: "", price: 799, oldPrice: 999, rating: 4.0, reviews: 5, desc: "", specs: ["Classic frame","Glass front"], images: [{ src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Frame", label: "Frame" }] },
  { id: "crystal-frame", name: "Crystal Frame", category: "Frames", badge: "", price: 2499, oldPrice: 2999, rating: 4.7, reviews: 20, desc: "", specs: ["Optical crystal","Engraving option"], images: [{ src: "https://placehold.co/800x450/ffffff/16244f?text=Crystal+Frame", label: "Crystal Frame" }] },

  { id: "coloured-shirts", name: "Coloured Shirts", category: "shirts", badge: "", price: 899, oldPrice: 1099, rating: 4.2, reviews: 16, desc: "", specs: ["Comfort fit","Printed options"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Coloured+Shirts", label: "Coloured Shirts" }] },
  { id: "coloured-tshirt", name: "Coloured T Shirt", category: "shirts", badge: "", price: 599, oldPrice: 749, rating: 4.3, reviews: 12, desc: "", specs: ["Cotton","Multiple sizes"], images: [{ src: "https://placehold.co/800x450/f4ead2/16244f?text=Coloured+T+Shirt", label: "Coloured T Shirt" }] },
  { id: "white-tshirt", name: "White T Shirt", category: "shirts", badge: "", price: 549, oldPrice: 699, rating: 4.0, reviews: 9, desc: "", specs: ["Classic white","Comfort cotton"], images: [{ src: "https://placehold.co/800x450/ffffff/16244f?text=White+T+Shirt", label: "White T Shirt" }] },
  { id: "sports-shirt", name: "Sports Shirt", category: "shirts", badge: "", price: 799, oldPrice: 999, rating: 4.4, reviews: 7, desc: "", specs: ["Breathable","Quick dry"], images: [{ src: "https://placehold.co/800x450/0e1a3f/d9a95e?text=Sports+Shirt", label: "Sports Shirt" }] },

  { id: "indian-album", name: "Indian Album", category: "albums", badge: "", price: 1299, oldPrice: 1599, rating: 4.5, reviews: 11, desc: "", specs: ["Hardcover","40 pages"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Indian+Album", label: "Indian Album" }] },
  { id: "photo-album", name: "Photo Album", category: "albums", badge: "", price: 999, oldPrice: 1299, rating: 4.3, reviews: 8, desc: "", specs: ["Lay-flat pages","Custom cover"], images: [{ src: "https://placehold.co/800x450/f4ead2/16244f?text=Photo+Album", label: "Photo Album" }] },

  { id: "lunch-box", name: "Lunch Box", category: "Lunch boxes and waterbottles", badge: "", price: 449, oldPrice: 599, rating: 4.1, reviews: 6, desc: "", specs: ["Insulated","BPA free"], images: [{ src: "https://placehold.co/800x450/ffffff/16244f?text=Lunch+Box", label: "Lunch Box" }] },
  { id: "water-bottle", name: "Water Bottle", category: "Lunch boxes and waterbottles", badge: "", price: 399, oldPrice: 499, rating: 4.2, reviews: 10, desc: "", specs: ["Stainless steel","Leak-proof"], images: [{ src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Water+Bottle", label: "Water Bottle" }] },
  { id: "temp-water-bottle", name: "Temp Water Bottle", category: "Lunch boxes and waterbottles", badge: "", price: 699, oldPrice: 899, rating: 4.4, reviews: 5, desc: "", specs: ["Insulated","Temperature retention"], images: [{ src: "https://placehold.co/800x450/1d2c5c/d9a95e?text=Temp+Water+Bottle", label: "Temp Water Bottle" }] },
  { id: "plates", name: "Plates", category: "Lunch boxes and waterbottles", badge: "", price: 299, oldPrice: 399, rating: 4.0, reviews: 4, desc: "", specs: ["Melamine","Dishwasher safe"], images: [{ src: "https://placehold.co/800x450/f4ead2/16244f?text=Plates", label: "Plates" }] },

  { id: "photo-wallet", name: "Photo Wallet", category: "Wallets", badge: "", price: 549, oldPrice: 699, rating: 4.3, reviews: 9, desc: "", specs: ["Card slots","Photo panel"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Photo+Wallet", label: "Photo Wallet" }] },

  { id: "chain", name: "Chain", category: "jewelery items", badge: "", price: 1299, oldPrice: 1699, rating: 4.2, reviews: 6, desc: "", specs: ["Metal","Polished finish"], images: [{ src: "https://placehold.co/800x450/ffffff/16244f?text=Chain", label: "Chain" }] },
  { id: "ring", name: "Ring", category: "jewelery items", badge: "", price: 999, oldPrice: 1299, rating: 4.1, reviews: 3, desc: "", specs: ["Adjustable","Polished"], images: [{ src: "https://placehold.co/800x450/1d2c5c/d9a95e?text=Ring", label: "Ring" }] },

  { id: "name-pen-silicon", name: "Name Pen Silicon", category: "pens", badge: "", price: 249, oldPrice: 349, rating: 4.0, reviews: 12, desc: "", specs: ["Personalized","Silicone grip"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Name+Pen", label: "Name Pen" }] },
  { id: "glowing-pen", name: "Glowing Pen", category: "pens", badge: "", price: 299, oldPrice: 399, rating: 4.2, reviews: 8, desc: "", specs: ["LED light","Engraveable"], images: [{ src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Glowing+Pen", label: "Glowing Pen" }] },

  { id: "leather-key-ring", name: "Leather Key Ring", category: "keyring", badge: "", price: 349, oldPrice: 449, rating: 4.3, reviews: 6, desc: "", specs: ["Genuine leather","Custom name"], images: [{ src: "https://placehold.co/800x450/7a5230/ffffff?text=Leather+Key+Ring", label: "Leather Key Ring" }] },
  { id: "metal-name-keyring", name: "Metal Name Keyring", category: "keyring", badge: "", price: 399, oldPrice: 499, rating: 4.4, reviews: 7, desc: "", specs: ["Metal","Engraved name"], images: [{ src: "https://placehold.co/800x450/aaaaaa/16244f?text=Metal+Name+Keyring", label: "Metal Name Keyring" }] },
  { id: "metal-key-rings", name: "Metal Key Rings", category: "keyring", badge: "", price: 299, oldPrice: 399, rating: 4.0, reviews: 5, desc: "", specs: ["Sturdy metal","Multiple designs"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Metal+Key+Rings", label: "Metal Key Rings" }] },
  { id: "wooden-key-rings", name: "Wooden Key Rings", category: "keyring", badge: "", price: 349, oldPrice: 449, rating: 4.1, reviews: 4, desc: "", specs: ["Wood finish","Custom engraving"], images: [{ src: "https://placehold.co/800x450/7a5230/ffffff?text=Wooden+Key+Rings", label: "Wooden Key Rings" }] },

  { id: "photo-badge-circle", name: "Photo Badge (Circle)", category: "Badge", badge: "", price: 199, oldPrice: 249, rating: 4.2, reviews: 3, desc: "", specs: ["Metal badge","Pin back"], images: [{ src: "https://placehold.co/800x450/ffffff/16244f?text=Photo+Badge", label: "Photo Badge" }] },

  { id: "mobile-cover", name: "Mobile Covers", category: "Mobile cover", badge: "", price: 499, oldPrice: 649, rating: 4.3, reviews: 15, desc: "", specs: ["Phone specific","Photo print"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Mobile+Cover", label: "Mobile Cover" }] },

  { id: "deal-1", name: "Deal1", category: "Deals", badge: "40% OFF", price: 999, oldPrice: 1499, rating: 4.6, reviews: 21, desc: "", specs: ["Bundle deal"], images: [{ src: "https://placehold.co/800x450/16244f/f4ead2?text=Deal+1", label: "Deal 1" }] },
  { id: "deal-2", name: "Deal2", category: "Deals", badge: "40% OFF", price: 899, oldPrice: 1299, rating: 4.4, reviews: 13, desc: "", specs: ["Bundle deal"], images: [{ src: "https://placehold.co/800x450/1d2c5c/d9a95e?text=Deal+2", label: "Deal 2" }] },
  { id: "deal-3", name: "Deal3", category: "Deals", badge: "40% OFF", price: 799, oldPrice: 1199, rating: 4.2, reviews: 9, desc: "", specs: ["Bundle deal"], images: [{ src: "https://placehold.co/800x450/0e1a3f/ffffff?text=Deal+3", label: "Deal 3" }] },
  { id: "deal-4", name: "Deal4", category: "Deals", badge: "40% OFF", price: 699, oldPrice: 999, rating: 4.0, reviews: 5, desc: "", specs: ["Bundle deal"], images: [{ src: "https://placehold.co/800x450/f4ead2/16244f?text=Deal+4", label: "Deal 4" }] }
);

/* Helper: find a product by id */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
