import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ features, columns = 4 }: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <Card key={index} className="border-0 shadow-soft-xl bg-card">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
