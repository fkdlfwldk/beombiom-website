"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  description: string
  image: string
  specs: Record<string, string>
  features: string[]
  onLearnMore?: () => void
}

export function ProductCard({ name, description, image, specs, features, onLearnMore }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-soft-xl border-0 bg-card">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">주요 사양</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted-foreground">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground">주요 기능</h4>
          <div className="flex flex-wrap gap-1">
            {features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={onLearnMore} className="w-full bg-beombiom-primary hover:bg-beombiom-primary/90">
          자세히 보기
        </Button>
      </CardFooter>
    </Card>
  )
}
