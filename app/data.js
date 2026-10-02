export const categories = [
  { slug: "wine", name: "Wine Selection", label: "Wine", description: "Red, white and rosé selections for dinners, gifts and celebrations.", heroImage: "/bottles/wine-red.svg" },
  { slug: "whisky", name: "Whisky Selection", label: "Whisky", description: "Rich, smooth whisky styles for relaxed evenings and special occasions.", heroImage: "/bottles/whisky-reserve.svg" },
  { slug: "sparkling", name: "Sparkling Selection", label: "Sparkling", description: "Bubbly selections for celebrations, toasts and memorable moments.", heroImage: "/bottles/sparkling-brut.svg" },
  { slug: "beer", name: "Beer Selection", label: "Beer", description: "Refreshing beer choices for gatherings, events and everyday enjoyment.", heroImage: "/bottles/beer-lager.svg" },
  { slug: "soft-drinks", name: "Soft Drinks", label: "Soft Drinks", description: "Refreshing non-alcoholic drinks for homes, events and customers of all ages.", heroImage: "/bottles/soft-cola.svg" },
  { slug: "energy-drinks", name: "Energy Drinks", label: "Energy", description: "Energy drink selections for customers looking for a quick refreshment.", heroImage: "/bottles/energy-original.svg" },
];

export const products = [
  { id: "wine-red", name: "Red Wine Selection", category: "Wine", categorySlug: "wine", image: "/bottles/wine-red.svg", description: "A rich red wine option for dinners and celebrations." },
  { id: "wine-white", name: "White Wine Selection", category: "Wine", categorySlug: "wine", image: "/bottles/wine-white.svg", description: "A crisp white wine option for relaxed occasions." },
  { id: "wine-rose", name: "Rosé Wine Selection", category: "Wine", categorySlug: "wine", image: "/bottles/wine-rose.svg", description: "A bright rosé option for social occasions." },

  { id: "whisky-reserve", name: "Reserve Whisky Selection", category: "Whisky", categorySlug: "whisky", image: "/bottles/whisky-reserve.svg", description: "A classic whisky-style bottle for premium occasions." },
  { id: "whisky-gold", name: "Gold Whisky Selection", category: "Whisky", categorySlug: "whisky", image: "/bottles/whisky-gold.svg", description: "A warm, smooth whisky-style selection." },
  { id: "whisky-dark", name: "Dark Whisky Selection", category: "Whisky", categorySlug: "whisky", image: "/bottles/whisky-dark.svg", description: "A bold whisky-style selection for evening occasions." },

  { id: "sparkling-brut", name: "Brut Sparkling Selection", category: "Sparkling", categorySlug: "sparkling", image: "/bottles/sparkling-brut.svg", description: "A bright sparkling selection for celebrations and toasts." },
  { id: "sparkling-rose", name: "Rosé Sparkling Selection", category: "Sparkling", categorySlug: "sparkling", image: "/bottles/sparkling-rose.svg", description: "A colourful sparkling selection for special moments." },
  { id: "sparkling-gold", name: "Gold Sparkling Selection", category: "Sparkling", categorySlug: "sparkling", image: "/bottles/sparkling-gold.svg", description: "A celebratory sparkling selection with a premium look." },

  { id: "beer-lager", name: "Lager Beer Selection", category: "Beer", categorySlug: "beer", image: "/bottles/beer-lager.svg", description: "A refreshing lager-style beer selection." },
  { id: "beer-dark", name: "Dark Beer Selection", category: "Beer", categorySlug: "beer", image: "/bottles/beer-dark.svg", description: "A deeper, richer beer-style selection." },
  { id: "beer-gold", name: "Gold Beer Selection", category: "Beer", categorySlug: "beer", image: "/bottles/beer-gold.svg", description: "A crisp golden beer-style selection for gatherings." },

  { id: "soft-cola", name: "Cola Soft Drink", category: "Soft Drinks", categorySlug: "soft-drinks", image: "/bottles/soft-cola.svg", description: "A classic cola-style soft drink selection." },
  { id: "soft-orange", name: "Orange Soft Drink", category: "Soft Drinks", categorySlug: "soft-drinks", image: "/bottles/soft-orange.svg", description: "A bright citrus soft drink selection." },
  { id: "soft-lemon", name: "Lemon Soft Drink", category: "Soft Drinks", categorySlug: "soft-drinks", image: "/bottles/soft-lemon.svg", description: "A refreshing lemon soft drink selection." },

  { id: "energy-original", name: "Original Energy Drink", category: "Energy Drinks", categorySlug: "energy-drinks", image: "/bottles/energy-original.svg", description: "An energy drink selection for a quick refreshment." },
  { id: "energy-tropical", name: "Tropical Energy Drink", category: "Energy Drinks", categorySlug: "energy-drinks", image: "/bottles/energy-tropical.svg", description: "A tropical energy drink selection." },
  { id: "energy-berry", name: "Berry Energy Drink", category: "Energy Drinks", categorySlug: "energy-drinks", image: "/bottles/energy-berry.svg", description: "A berry-style energy drink selection." },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug) {
  return products.filter((product) => product.categorySlug === slug);
}
