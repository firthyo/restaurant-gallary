"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "ALL" },
  { id: "appetizers", label: "APPETIZERS" },
  { id: "main", label: "MAIN COURSES" },
  { id: "desserts", label: "DESSERTS" },
  { id: "drinks", label: "DRINKS" },
];

const menuItems = [
  {
    id: 1,
    name: "PEACH + BURRATA",
    ingredients: [
      "Peaches",
      "burrata",
      "tomatoes",
      "cucumbers",
      "basil",
      "mint",
      "roasted almonds",
      "spring mix",
      "shredded kale",
      "balsamic vinaigrette",
    ],
    category: "appetizers",
    image:
      "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2070&auto=format&fit=crop",
    nutrition: {
      calories: 430,
      protein: 11,
      carbs: 25,
      fat: 29,
    },
    price: 16,
  },
  {
    id: 2,
    name: "RENAISSANCE RISOTTO",
    ingredients: [
      "Arborio rice",
      "wild mushrooms",
      "truffle oil",
      "parmesan",
      "fresh herbs",
      "white wine reduction",
    ],
    category: "main",
    image:
      "https://images.unsplash.com/photo-1621341258668-b2bf005a9f97?q=80&w=2070&auto=format&fit=crop",
    nutrition: {
      calories: 520,
      protein: 14,
      carbs: 65,
      fat: 22,
    },
    price: 24,
    tags: ["POPULAR"],
  },
  {
    id: 3,
    name: "IMPRESSIONIST'S SEAFOOD",
    ingredients: [
      "Fresh catch of the day",
      "seasonal vegetables",
      "citrus butter",
      "micro greens",
      "edible flowers",
    ],
    category: "main",
    image:
      "https://images.unsplash.com/photo-1659951226926-a75791782250?q=80&w=2070&auto=format&fit=crop",
    nutrition: {
      calories: 440,
      protein: 38,
      carbs: 12,
      fat: 28,
    },
    price: 32,
    tags: ["CHEF'S SPECIAL"],
  },
  {
    id: 4,
    name: "CUBIST STEAK",
    ingredients: [
      "Prime beef",
      "geometric vegetable cuts",
      "modernist sauces",
      "potato three ways",
      "herb oil",
    ],
    category: "main",
    image:
      "https://images.unsplash.com/photo-1633040248016-a67a78643afe?q=80&w=2070&auto=format&fit=crop",
    nutrition: {
      calories: 580,
      protein: 42,
      carbs: 35,
      fat: 32,
    },
    price: 36,
    tags: ["POPULAR"],
  },
  {
    id: 5,
    name: "SURREALIST SOUFFLÉ",
    ingredients: [
      "Dark chocolate",
      "unexpected spices",
      "vanilla cream",
      "berry compote",
      "gold leaf",
    ],
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1579711220373-155ffc441b36?q=80&w=2070&auto=format&fit=crop",
    nutrition: {
      calories: 380,
      protein: 8,
      carbs: 45,
      fat: 18,
    },
    price: 14,
    tags: ["ONLINE ONLY"],
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = menuItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="font-serif text-5xl md:text-6xl italic text-primary mb-12">
          Our Menu
        </h1>

        {/* Filters */}
        <div className="mb-12">
          <span className="text-sm text-muted-foreground mb-2 block">
            FILTER:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full border text-sm transition-colors",
                  selectedCategory === category.id
                    ? "bg-secondary text-primary-foreground border-primary"
                    : "border-border text-foreground hover:border-primary"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg overflow-hidden border"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                {item.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    className="absolute top-2 left-2 bg-secondary text-accent-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-primary">
                    {item.name}
                  </h2>
                  <span className="text-lg font-bold text-accent">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.ingredients.join(", ")}
                </p>
                <div className="grid grid-cols-4 gap-2 text-center border-t border-border pt-4">
                  <div>
                    <p className="font-bold text-foreground">
                      {item.nutrition.calories}
                    </p>
                    <p className="text-xs text-muted-foreground">CALORIES</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {item.nutrition.protein}G
                    </p>
                    <p className="text-xs text-muted-foreground">PROTEIN</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {item.nutrition.carbs}G
                    </p>
                    <p className="text-xs text-muted-foreground">CARBS</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {item.nutrition.fat}G
                    </p>
                    <p className="text-xs text-muted-foreground">FAT</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
