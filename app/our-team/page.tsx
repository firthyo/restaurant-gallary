'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: "Lauren",
    drinkOfChoice: ["Beer", "Wine", "Cocktail", "Martini"],
    selectedDrink: "Cocktail",
    favoriteBingeShow: "Forensic Files",
    findMeAt: "chillin with my dogs",
    goToOutfit: ["Leggings", "Jeans", "Dress/Skirt"],
    selectedOutfit: "Jeans",
    favoriteThingAboutWork: "the amazing women I get to work with"
  },
  // Add more team members here if needed
]

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(0)

  return (
    <div className="min-h-screen bg-[#FFF5F5]">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto bg-[#FFF5F5] p-8 rounded-lg shadow-lg">
          <h1 className="text-[#4169E1] text-5xl font-bold mb-4">OUR CREATIVE TEAM</h1>
          <div className="border-2 border-[#4169E1] p-4 inline-block mb-8">
            <h2 className="text-[#4169E1] text-3xl">
              MEET{" "}
              <span className="font-['Playfair_Display'] italic ml-2">
                {teamMembers[selectedMember].name}
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Drink of Choice */}
            <div>
              <h3 className="text-[#4169E1] text-xl mb-2">DRINK OF CHOICE</h3>
              <div className="flex gap-4">
                {teamMembers[selectedMember].drinkOfChoice.map((drink) => (
                  <span
                    key={drink}
                    className={cn(
                      "text-xl",
                      drink === teamMembers[selectedMember].selectedDrink
                        ? "text-[#4169E1] border-2 border-[#4169E1] px-3 py-1 rounded-full"
                        : "text-gray-400"
                    )}
                  >
                    {drink.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Favorite Binge Show */}
            <div>
              <h3 className="text-[#4169E1] text-xl mb-2">FAVORITE BINGE SHOW:</h3>
              <p className="font-['Playfair_Display'] italic text-2xl">
                {teamMembers[selectedMember].favoriteBingeShow}
              </p>
            </div>

            {/* You can always find me... */}
            <div>
              <h3 className="text-[#4169E1] text-xl mb-2">YOU CAN ALWAYS FIND ME...</h3>
              <p className="font-['Playfair_Display'] italic text-2xl">
                {teamMembers[selectedMember].findMeAt}
              </p>
            </div>

            {/* Go-to Outfit */}
            <div>
              <h3 className="text-[#4169E1] text-xl mb-2">MY GO-TO OUTFIT</h3>
              <div className="flex gap-4">
                {teamMembers[selectedMember].goToOutfit.map((outfit) => (
                  <span
                    key={outfit}
                    className={cn(
                      "text-xl",
                      outfit === teamMembers[selectedMember].selectedOutfit
                        ? "text-[#4169E1] border-2 border-[#4169E1] px-3 py-1 rounded-full"
                        : "text-gray-400"
                    )}
                  >
                    {outfit.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Favorite thing about working at HBI */}
            <div>
              <h3 className="text-[#4169E1] text-xl mb-2">FAVORITE THING ABOUT WORKING AT HBI IS...</h3>
              <p className="font-['Playfair_Display'] italic text-2xl">
                {teamMembers[selectedMember].favoriteThingAboutWork}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

