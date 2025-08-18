"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { ProductHero } from "@/components/products/ProductHero"
import { ProductSpecs } from "@/components/products/ProductSpecs"
import { ProductFeatures } from "@/components/products/ProductFeatures"
import { ProductFAQ } from "@/components/products/ProductFAQ"
import { ProductDownloads } from "@/components/products/ProductDownloads"
import { ExplodedView } from "@/components/ui/ExplodedView"
import { products } from "@/data/products"
import { productFAQs } from "@/data/faq"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("bioloop")

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        {/* Page Header */}
        <section className="py-20 bg-beombiom-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">혁신적인 제품 라인업</h1>
              <p className="text-xl text-beombiom-accent max-w-2xl mx-auto">
                지속가능한 기술과 웰니스를 결합한 BEOMBIOM의 제품들을 자세히 알아보세요
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Tabs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="bioloop">BIOLOOP</TabsTrigger>
                <TabsTrigger value="zenoxy">ZenOxy</TabsTrigger>
                <TabsTrigger value="butik">BUTIK</TabsTrigger>
              </TabsList>

              {products.map((product) => (
                <TabsContent key={product.id} value={product.id} className="space-y-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Product Hero */}
                    <ProductHero product={product} />

                    {/* Product Specifications */}
                    <ProductSpecs product={product} />

                    {/* BIOLOOP Exploded View */}
                    {product.id === "bioloop" && (
                      <section className="py-20 bg-muted/30">
                        <div className="container mx-auto px-4">
                          <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">제품 구조</h2>
                            <p className="text-muted-foreground">BIOLOOP의 혁신적인 하이브리드 처리 시스템</p>
                          </div>
                          <ExplodedView />
                        </div>
                      </section>
                    )}

                    {/* Product Features */}
                    <ProductFeatures product={product} />

                    {/* FAQ */}
                    <ProductFAQ productId={product.id} faqs={productFAQs[product.id] || []} />

                    {/* Downloads */}
                    <ProductDownloads product={product} />
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
