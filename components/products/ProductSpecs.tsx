"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/data/products"

interface ProductSpecsProps {
  product: Product
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">제품 사양</h2>
            <p className="text-muted-foreground">상세한 기술 사양과 성능 정보</p>
          </div>

          <Card className="border-0 shadow-soft-xl bg-card">
            <CardHeader>
              <CardTitle className="text-center text-beombiom-primary">{product.name} 상세 사양</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                    <span className="font-medium text-foreground">{key}</span>
                    <span className="text-beombiom-primary font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
