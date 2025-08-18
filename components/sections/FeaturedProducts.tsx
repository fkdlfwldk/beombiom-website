"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/ui/ProductCard"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { products } from "@/data/products"

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("bioloop")

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="혁신적인 제품 라인업"
            subtitle="지속가능한 기술과 웰니스를 결합한 BEOMBIOM의 제품들을 만나보세요"
            centered
            className="mb-16"
          />
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="bioloop">BIOLOOP</TabsTrigger>
            <TabsTrigger value="zenoxy">ZenOxy</TabsTrigger>
            <TabsTrigger value="butik">BUTIK</TabsTrigger>
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  specs={product.specs}
                  features={product.features}
                  onLearnMore={() => {
                    // Navigate to product detail page
                    window.location.href = `/products#${product.id}`
                  }}
                />
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
