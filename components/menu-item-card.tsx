import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { MenuItem } from '@/types/menu'

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="bg-beige overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
          {item.tags?.map((tag) => (
            <Badge
              key={tag}
              className="absolute top-2 right-2 bg-[#E2FF7E] text-olive-green font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-olive-green mb-2">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {item.ingredients.join(', ')}
          </p>
          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            <div>
              <p className="font-bold text-rust-orange">{item.nutrition.calories}</p>
              <p className="text-gray-600">CALORIES</p>
            </div>
            <div>
              <p className="font-bold text-rust-orange">{item.nutrition.protein}G</p>
              <p className="text-gray-600">PROTEIN</p>
            </div>
            <div>
              <p className="font-bold text-rust-orange">{item.nutrition.carbs}G</p>
              <p className="text-gray-600">CARBS</p>
            </div>
            <div>
              <p className="font-bold text-rust-orange">{item.nutrition.fat}G</p>
              <p className="text-gray-600">FAT</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

