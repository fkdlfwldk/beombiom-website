"use client"

import { motion } from "framer-motion"
import { Recycle, Zap, Settings, Cloud } from "lucide-react"
import { FeatureGrid } from "@/components/ui/FeatureGrid"
import { SectionTitle } from "@/components/ui/SectionTitle"

export function ValueProps() {
  const features = [
    {
      title: "Micro-Circle 자원화",
      description: "음식물쓰레기를 완전한 자원으로 전환",
      icon: Recycle,
    },
    {
      title: "Hybrid Decomposition",
      description: "5가지 핵심 기술의 시너지 효과",
      icon: Zap,
    },
    {
      title: "Modular & Serviceable",
      description: "모듈형 설계로 유지보수 최적화",
      icon: Settings,
    },
    {
      title: "HAAS+SAAS 가능",
      description: "하드웨어와 소프트웨어 서비스 통합",
      icon: Cloud,
    },
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
            title="혁신적인 기술로 지속가능한 미래를 만듭니다"
            subtitle="BEOMBIOM의 핵심 가치와 기술적 우위를 확인하세요"
            centered
            className="mb-16"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeatureGrid features={features} columns={4} />
        </motion.div>
      </div>
    </section>
  )
}
