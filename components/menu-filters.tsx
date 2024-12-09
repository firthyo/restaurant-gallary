'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MenuFiltersProps {
  search: string
  category: string
  onSearchChange: (value: string) => void
  onCategoryChange: (value: string) => void
}

export function MenuFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange
}: MenuFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Label htmlFor="search" className="text-olive-green mb-2">Search</Label>
        <Input
          id="search"
          placeholder="Search menu items..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-soft-cream border-olive-green"
        />
      </div>
      <div className="w-full md:w-48">
        <Label htmlFor="category" className="text-olive-green mb-2">Category</Label>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger id="category" className="bg-soft-cream border-olive-green">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Items</SelectItem>
            <SelectItem value="salads">Salads</SelectItem>
            <SelectItem value="main">Main Courses</SelectItem>
            <SelectItem value="desserts">Desserts</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

