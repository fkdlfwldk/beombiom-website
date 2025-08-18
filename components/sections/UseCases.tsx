"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Building2, MapPin, Home, Dumbbell } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      category: "B2B",
      title: "요식업·호텔",
      description: "대용량 음식물쓰레기 처리로 운영비 절감 및 친환경 경영 실현",
      icon: Building2,
      examples: ["레스토랑", "호텔", "카페", "급식업체"],
    },
    {
      category: "B2G",
      title: "지자체·공공시설",
      description: "지역 단위 폐기물 관리 시스템으로 환경 정책 목표 달성",
      icon: MapPin,
      examples: ["시청", "학교", "병원", "공공기관"],
    },
    {
      category: "B2C",
      title: "가정·홈케어",
      description: "가정용 소형 처리기로 일상 속 지속가능한 라이프스타일 구현",
      icon: Home,
      examples: ["아파트", "단독주택", "펜션", "카페"],
    },
    {
      category: "Wellness",
      title: "피트니스·웰니스",
      description: "ZenOxy로 운동 후 회복과 건강 관리 서비스 제공",
      icon: Dumbbell,
      examples: ["헬스장", "스파", "재활센터", "요가원"],
    },
  ]

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
            title="다양한 적용 분야"
            subtitle="B2B, B2G, B2C 전 영역에서 지속가능한 솔루션을 제공합니다"
            centered
            className="mb-16"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-soft-xl bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-beombiom-gradient flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-beombiom-primary bg-beombiom-primary/10 px-2 py-1 rounded">
                        {useCase.category}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-foreground">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-foreground">적용 사례</h4>
                      <div className="flex flex-wrap gap-1">
                        {useCase.examples.map((example) => (
                          <span key={example} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
