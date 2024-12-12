'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const chefs = [
  {
    name: "Laurent",
    title: "Executive Chef",
    drinkOfChoice: ["Wine", "Cocktail", "Whiskey", "Espresso"],
    selectedDrink: "Wine",
    speciality: "French Contemporary",
    findMeAt: "creating in the test kitchen",
    signatureDish: ["Seafood", "Beef", "Poultry", "Vegetarian"],
    selectedDish: "Seafood",
    quote: "Cooking is an art, the plate is my canvas"
  },
  {
    name: "Maria",
    title: "Pastry Chef",
    drinkOfChoice: ["Tea", "Coffee", "Wine", "Cocktail"],
    selectedDrink: "Tea",
    speciality: "Modern Pastry",
    findMeAt: "experimenting with new dessert concepts",
    signatureDish: ["Pastries", "Cakes", "Chocolates", "Ice Cream"],
    selectedDish: "Pastries",
    quote: "Sweet creations that tell a story"
  }
]

export default function MeetOurChefs() {
  const [selectedChef, setSelectedChef] = useState(0)

  return (
    <div className="min-h-screen bg-[#FFF5F5]">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-[#4169E1] text-6xl font-bold mb-2">OUR CREATIVE TEAM</h1>
          <div className="border border-[#4169E1] p-4 inline-block">
            <h2 className="text-[#4169E1] text-3xl">
              MEET{" "}
              <span className="font-['Playfair_Display'] italic ml-2">
                {chefs[selectedChef].name}
              </span>
            </h2>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Drink of Choice */}
          <div>
            <h3 className="text-[#4169E1] text-xl mb-3">DRINK OF CHOICE</h3>
            <div className="flex gap-4">
              {chefs[selectedChef].drinkOfChoice.map((drink) => (
                <span
                  key={drink}
                  className={cn(
                    "text-xl",
                    drink === chefs[selectedChef].selectedDrink
                      ? "text-[#4169E1] border-2 border-[#4169E1] px-3 py-1 rounded-full"
                      : "text-gray-400"
                  )}
                >
                  {drink}
                </span>
              ))}
            </div>
          </div>

          {/* Speciality */}
          <div>
            <h3 className="text-[#4169E1] text-xl mb-3">SPECIALITY:</h3>
            <p className="font-['Playfair_Display'] italic text-2xl">
              {chefs[selectedChef].speciality}
            </p>
          </div>

          {/* You can always find me... */}
          <div>
            <h3 className="text-[#4169E1] text-xl mb-3">YOU CAN ALWAYS FIND ME...</h3>
            <p className="font-['Playfair_Display'] italic text-2xl">
              {chefs[selectedChef].findMeAt}
            </p>
          </div>

          {/* Signature Dish */}
          <div>
            <h3 className="text-[#4169E1] text-xl mb-3">SIGNATURE DISH</h3>
            <div className="flex gap-4">
              {chefs[selectedChef].signatureDish.map((dish) => (
                <span
                  key={dish}
                  className={cn(
                    "text-xl",
                    dish === chefs[selectedChef].selectedDish
                      ? "text-[#4169E1] border-2 border-[#4169E1] px-3 py-1 rounded-full"
                      : "text-gray-400"
                  )}
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <h3 className="text-[#4169E1] text-xl mb-3">MY CULINARY PHILOSOPHY IS </h3>
            <p className="font-['Playfair_Display'] italic text-2xl">
              {chefs[selectedChef].quote}
            </p>
          </div>
        </div>

        {/* Chef Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          {chefs.map((chef, index) => (
            <Button
              key={chef.name}
              onClick={() => setSelectedChef(index)}
              variant={selectedChef === index ? "default" : "outline"}
              className={cn(
                "min-w-[120px]",
                selectedChef === index
                  ? "bg-[#4169E1] text-white"
                  : "border-[#4169E1] text-[#4169E1]"
              )}
            >
              {chef.name}
            </Button>
          ))}
        </div>

        {/* Book Experience Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-[#4169E1] text-white hover:bg-[#4169E1]/90 px-8 py-6 text-lg"
          >
            <a href="/chefs-table">Book a Chef's Table Experience</a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

