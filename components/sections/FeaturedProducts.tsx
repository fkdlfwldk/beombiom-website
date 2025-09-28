"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { products } from "@/data/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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

        {/* 원형/탭 선택 UI는 유지 */}
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
              >
                <Card className="border-0 shadow-soft-xl overflow-hidden rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* LEFT: 텍스트/스펙 */}
                    <CardContent className="p-8 md:p-10">
                      <h3 className="text-3xl font-extrabold tracking-tight">{p.name}</h3>
                      <p className="mt-3 text-muted-foreground">{p.description}</p>

                      {/* 주요 사양 */}
                      {p.specs && (
                        <div className="mt-8">
                          <div className="text-sm font-semibold text-foreground/80 mb-3">주요 사양</div>
                          <dl className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
                            {Object.entries(p.specs).map(([label, value]) => (
                              <div key={label} className="flex items-center justify-between">
                                <dt className="text-muted-foreground whitespace-nowrap">{label}</dt>
                                <dd className="font-semibold">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}

                      {/* 주요 기능 */}
                      {!!p.features?.length && (
                        <div className="mt-6">
                          <div className="text-sm font-semibold text-foreground/80 mb-3">주요 기능</div>
                          <div className="flex flex-wrap gap-2">
                            {p.features.map((f) => (
                              <Badge key={f} variant="secondary" className="rounded-2xl">
                                {f}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button
                        className="mt-8 bg-beombiom-primary hover:bg-beombiom-primary/90"
                        onClick={() => (window.location.href = `/products#${p.id}`)}
                      >
                        자세히 보기
                      </Button>
                    </CardContent>

                    {/* RIGHT: 이미지 — 우측 영역을 우선 크롭/포커스 */}
                    <div className="relative">
                      {/* 5:3 비율 유지, 우측 포커스 / 약 60% 쪽으로 시선 이동 */}
                      <div className="relative w-full aspect-[5/3]">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          // object-cover: 꽉 채우되 잘리는 건 허용
                          // objectPosition: "80% center"로 우측 60~80% 부근을 우선 보여줌
                          className="object-cover"
                          style={{ objectPosition: "80% center" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
