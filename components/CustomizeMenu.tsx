'use client'

import { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react'
import { cn } from "@/lib/utils"

const menuItems = {
  appetizers: ['Seasonal Soup', 'Garden Salad', 'Charcuterie Board', 'Oysters'],
  mainCourses: ['Grilled Fish', 'Roasted Chicken', 'Beef Tenderloin', 'Vegetable Risotto'],
  desserts: ['Chocolate Fondant', 'Fruit Tart', 'Cheese Plate', 'Ice Cream Selection']
}

export interface CustomizeMenuHandle {
  getSelections: () => string[]
}

interface CustomizeMenuProps {
  initialSelections?: string[]
  onSelectionsChange?: (selections: string[]) => void
}

const CustomizeMenu = forwardRef<CustomizeMenuHandle, CustomizeMenuProps>(({ initialSelections = [] }, ref) => {
  const [selections, setSelections] = useState<string[]>(initialSelections)
  const [circles, setCircles] = useState<{ [key: string]: { path: string, length: number } }>({})
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const toggleSelection = (item: string) => {
    setSelections(prev => {
      const newSelections = prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
      return newSelections
    })

    if (circles[item]) {
      // Remove circle with fade out effect
      const circlePath = document.getElementById(`circle-${item}`)
      if (circlePath) {
        circlePath.style.transition = 'opacity 0.5s'
        circlePath.style.opacity = '0'
        setTimeout(() => {
          setCircles(prev => {
            const newCircles = { ...prev }
            delete newCircles[item]
            return newCircles
          })
        }, 500)
      }
    } else {
      // Create new circle
      const button = itemRefs.current[item]
      if (button) {
        const rect = button.getBoundingClientRect()
        const circle = generateFreehandCircle(rect.width, rect.height)
        setCircles(prev => ({
          ...prev,
          [item]: circle
        }))
      }
    }
  }

  const generateFreehandCircle = (width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const radiusX = width / 2 + 5 // Add some padding
    const radiusY = height / 2 + 5
    
    let path = `M ${centerX - radiusX * 0.9},${centerY} `
    const points = 20
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2
      const x = centerX + Math.cos(angle) * radiusX * (0.9 + Math.random() * 0.2)
      const y = centerY + Math.sin(angle) * radiusY * (0.9 + Math.random() * 0.2)
      path += `${i === 0 ? 'M' : 'L'} ${x},${y} `
    }
    path += 'Z'

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    pathElement.setAttribute('d', path)
    const length = pathElement.getTotalLength()

    return { path, length }
  }

  const getSelections = () => selections

  useImperativeHandle(ref, () => ({
    getSelections
  }))

  useEffect(() => {
    // Trigger animation for newly added circles
    Object.keys(circles).forEach(item => {
      const circlePath = document.getElementById(`circle-${item}`)
      if (circlePath) {
        circlePath.style.strokeDasharray = `${circles[item].length} ${circles[item].length}`
        circlePath.style.strokeDashoffset = `${circles[item].length}`
        circlePath.getBoundingClientRect() // Force reflow
        circlePath.style.transition = `stroke-dashoffset 0.5s ease-in-out`
        circlePath.style.strokeDashoffset = '0'
      }
    })
  }, [circles])

  return (
    <div className="bg-[#FFF5E6] p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-[var(--olive-green)] mb-6 font-sans">Customize Your Menu</h2>
      
      {Object.entries(menuItems).map(([category, items], index) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-bold mb-4 font-sans">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map(item => (
              <button
                key={item}
                ref={el => itemRefs.current[item] = el}
                onClick={() => toggleSelection(item)}
                className={cn(
                  "p-4 text-left transition-all duration-300 relative",
                  selections.includes(item) && "bg-[var(--olive-green)]/10"
                )}
              >
                <span className="font-cursive text-xl relative z-10">{item}</span>
                {circles[item] && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                    <path
                      id={`circle-${item}`}
                      d={circles[item].path}
                      fill="none"
                      stroke="var(--olive-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: `${circles[item].length} ${circles[item].length}`,
                        strokeDashoffset: circles[item].length,
                      }}
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
          {index < Object.entries(menuItems).length - 1 && (
            <div className="my-6 border-b border-[var(--olive-green)] opacity-30" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='100%25' y2='0' stroke='%235B8C5A' stroke-width='4' stroke-dasharray='1, 10' /%3E%3C/svg%3E\")",
              height: "4px"
            }} />
          )}
        </div>
      ))}
      
      <div className="mt-6 text-center">
        <p className="text-lg mb-2 font-cursive">
          You have selected {selections.length} item{selections.length !== 1 ? 's' : ''}.
        </p>
        <button
          onClick={() => {
            setSelections([])
            setCircles({})
          }}
          className="text-[var(--rust-orange)] hover:underline font-cursive text-lg"
        >
          Clear all selections
        </button>
      </div>
    </div>
  )
})

CustomizeMenu.displayName = 'CustomizeMenu'

export default CustomizeMenu

