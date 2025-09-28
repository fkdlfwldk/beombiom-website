"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { CheckCircle } from "lucide-react"

export function SocialProof() {
  const achievements: string[] = [
    "2025 에코스타트업 예비창업자",
    "2025 컴퍼니빌더 선정 기업",
    "2025 기후테크 공모전 시제품 개발 선정",
    "2024 BLDC + LED 기반 기술 특허 등록",
    "2025 마이크로바이옴 기반 음식물 쓰레기 처리 기술 특허 출원",
    "2025 용산시제품제작소, 과학기술대학교 3D 모델링 자격증 수료",
    "2025 KC 인증",
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
            title="인정받은 기술력"
            subtitle="다양한 프로그램 참여와 성과로 검증된 혁신 기술"
            centered
            className="mb-16"
          />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {achievements.map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-soft-xl bg-card">
                <CardContent className="p-6 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-beombiom-gradient flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
