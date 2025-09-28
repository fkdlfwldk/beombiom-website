"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { products } from "@/data/products"
import Image from "next/image"

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

          {products.map((p) => (
            <TabsContent key={p.id} value={p.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* LEFT: 텍스트 */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                    <p className="text-muted-foreground mb-6">{p.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">주요 사양</h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        {p.specs.map((spec, i) => (
                          <li key={i} className="flex justify-between">
                            <span className="text-muted-foreground">{spec.label}</span>
                            <span className="font-medium">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {p.features && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">주요 기능</h4>
                        <div className="flex flex-wrap gap-2">
                          {p.features.map((f, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-muted text-sm"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => (window.location.href = `/products#${p.id}`)}
                      className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      자세히 보기
                    </button>
                  </div>

                  {/* RIGHT: 이미지 */}
                  <div className="relative md:min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
                    <div className="relative w-full aspect-[5/3] md:aspect-auto md:h-full max-w-[90%] mx-auto">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="
                          object-cover 
                          object-[85%_50%] 
                          rounded-lg
                        "
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
