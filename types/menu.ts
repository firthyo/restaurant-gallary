export interface MenuItem {
  id: string
  name: string
  ingredients: string[]
  image: string
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  category: string
  tags?: string[]
}

