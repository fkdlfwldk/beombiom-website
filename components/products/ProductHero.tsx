"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/data/products"

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-muted to-muted/50 rounded-3xl overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Badge className="bg-beombiom-primary text-white">신제품</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{product.name}</h1>
              <p className="text-xl text-muted-foreground">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">주요 특징</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-beombiom-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-beombiom-primary hover:bg-beombiom-primary/90">
                견적 문의
              </Button>
              <Button size="lg" variant="outline">
                카탈로그 다운로드
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
