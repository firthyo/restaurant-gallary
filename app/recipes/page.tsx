"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "ALL" },
  { id: "vegetables", label: "VEGETABLES" },
  { id: "seafood", label: "SEAFOOD" },
  { id: "dessert", label: "DESSERT" },
  { id: "other", label: "OTHER" },
];

const recipes = [
  {
    id: 1,
    category: "vegetables",
    title: "OVEN-BAKED",
    subtitle: "Artichokes",
    description:
      "Prepare a bowl with cold water and add the sprigs of parsley. Remove the tough outer leaves from the artichokes and trim off the ends of the stalks. Peel the stems with a knife...",
    image:
      "https://images.unsplash.com/photo-1606265698533-c17fc6003934?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "seafood",
    title: "STEAMED",
    subtitle: "Clams",
    description:
      "Put the clams in a saucepan with a cup of water, cover and cook on a high heat. remove the clams as soon as they open, leave them to cool and remove half the clams from their shell. Here mignionette. In a bowl...",
    image: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "other",
    title: "FRESH HERB",
    subtitle: "Bread rolls",
    description:
      "In response to the need to preserve fresh fish, the smoking technique emerged in the 7th century. To achieve optimum quality in applying this method, the freshness and quality of the salmon are of...",
    image: "https://images.unsplash.com/photo-1509957879660-dd8846a0b43d?q=80&w=2072&auto=format&fit=crop",
  },
];

const chefs = [
  {
    name: "JULIA CHILD",
    title: "Chef",
    image: "https://images.unsplash.com/photo-1731576089270-9e806089a40f?w=500&auto=format&fit=crop",
    quote:
      "Fresh ingredients are essential for a healthy, balanced diet. If you want to eat better and feel healthier, you should eat food prepared with fresh locally-grown ingredients and avoid prepackaged, processed foods.",
  },
  {
    name: "ALEX OLIVER",
    title: "Chef",
    image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=500&auto=format&fit=crop",
    quote:
      "Healthy meals don't need to be boring with these delicious family friendly recipes and ideas from Jamie Oliver, packed with nutrition and flavour.",
  },
  {
    name: "JOSE RAMSAY",
    title: "Chef",
    image: "https://images.unsplash.com/photo-1669707569583-8d4c8051130a?w=500&auto=format&fit=crop",
    quote:
      "The secret of a good meal is not just the recipe but the passion and attention to detail in its preparation.",
  },
];

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      selectedCategory === "all" || recipe.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12">
          <span className="text-sm text-muted-foreground">2 NEW</span>
          <h1 className="font-serif text-5xl md:text-6xl italic text-primary mt-2">
            ALL
            <br />
            Recipes
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <div>
            {/* Filters */}
            <div className="mb-8">
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
                        ? "bg-foreground text-white"
                        : "border-border text-foreground hover:border-primary"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipe List */}
            <div className="space-y-12">
              {filteredRecipes.map((recipe, index) => (
                <div key={recipe.id} className="border-b border-border pb-12">
                  <div className="text-sm text-muted-foreground mb-4">
                    {String(index + 1).padStart(2, "0")} ·{" "}
                    {recipe.category.toUpperCase()}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                    <div>
                      <h2 className="font-serif text-3xl italic mb-1 text-primary">
                        {recipe.title}
                      </h2>
                      <h3 className="font-serif text-2xl italic text-muted-foreground mb-4">
                        {recipe.subtitle}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>
                    <div className="relative">
                      <Image
                        src={recipe.image}
                        alt={`${recipe.title} ${recipe.subtitle}`}
                        width={160}
                        height={120}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chef Profiles Sidebar */}
          <aside className="space-y-12">
            {chefs.map((chef) => (
              <div key={chef.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1 text-primary">
                  {chef.name}
                </h3>
                <p className="text-muted-foreground mb-4">{chef.title}</p>
                <p className="text-foreground italic text-sm leading-relaxed">
                  {chef.quote}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
