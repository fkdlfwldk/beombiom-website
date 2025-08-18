"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Zap, Wind, Sun, Microscope } from "lucide-react"

export function TechnologySnapshot() {
  const technologies = [
    { icon: Thermometer, name: "고온처리", description: "120°C 고온 분해" },
    { icon: Zap, name: "고압시스템", description: "2.0 ATA 압력 적용" },
    { icon: Wind, name: "진공처리", description: "산소 차단 환경" },
    { icon: Sun, name: "UV 광촉매", description: "UVC/UVA 살균" },
    { icon: Microscope, name: "마이크로바이옴", description: "미생물 분해 촉진" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="하이브리드 코어 기술"
            subtitle="5가지 핵심 기술이 결합된 혁신적인 처리 시스템"
            centered
            className="mb-16"
          />
        </motion.div>

        {/* Technology Pipeline */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="w-40 h-40 border-0 shadow-soft-xl bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{tech.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow connector */}
                  {index < technologies.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <motion.div
                        className="w-4 h-0.5 bg-beombiom-primary"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      />
                      <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-beombiom-primary transform rotate-45" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Process Flow Description */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground max-w-2xl mx-auto">
              음식물쓰레기 투입 → 고온·고압·진공 전처리 → UV 광촉매 살균 → 마이크로바이옴 분해 → 고품질 퇴비 생성
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
