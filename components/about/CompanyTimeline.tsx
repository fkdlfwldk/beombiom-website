"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CompanyTimeline() {
  const timeline = [
    {
      date: "2025.07",
      title: "회사 설립",
      description: "BEOMBIOM 설립",
      achievements: ["회사 설립"],
    },
    {
      date: "2025 Q1–Q4",
      title: "기술개발 진행",
      description: "하이브리드 음식물 처리 기술 및 관련 디바이스 개발",
      achievements: ["기술개발 진행"],
    },
    {
      date: "2025.04",
      title: "정부지원 프로그램 선정",
      description: "에코스타트업 예비창업자 선정",
      achievements: ["정부지원 선정 - 에코스타트업"],
    },
    {
      date: "2025.07",
      title: "정부지원 프로그램 선정",
      description: "컴퍼니빌더 1기 선정",
      achievements: ["정부지원 선정 - 컴퍼니빌더"],
    },
    {
      date: "2025.08",
      title: "기후테크 공모전",
      description: "시제품 제작",
      achievements: ["시제품 제작 - 기후테크 공모전"],
    },
    {
      date: "2025.10",
      title: "특허 출원",
      description: "마이크로바이옴 기반 음식물 처리 기술",
      achievements: ["특허 출원"],
    },
    {
      date: "2025 Q4",
      title: "제품 출시 준비",
      description: "BIOLOOP 및 관련 디바이스 시장 출시 준비",
      achievements: ["출시 준비"],
    },
    {
      date: "2026 Q4",
      title: "시장 진출",
      description: "국내 및 글로벌 시장 진출",
      achievements: ["시장 진출"],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-beombiom-primary/30" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start space-x-6"
            >
              {/* Timeline dot */}
              <div className="w-16 h-16 rounded-full bg-beombiom-gradient flex items-center justify-center flex-shrink-0 z-10">
                <div className="text-center">
                  <div className="text-white font-bold text-xs">{item.date.split(" ")[0]}</div>
                  <div className="text-white text-xs opacity-80">{item.date.split(" ")[1] || ""}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <Card className="border-0 shadow-soft-xl bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <Badge className="bg-beombiom-primary/10 text-beombiom-primary">
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
