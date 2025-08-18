"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CompanyTimeline() {
  const timeline = [
    {
      year: "2023",
      quarter: "Q1",
      title: "회사 설립",
      description: "BEOMBIOM 법인 설립 및 초기 기술 개발 시작",
      achievements: ["법인 설립", "초기 팀 구성", "기술 개발 착수"],
    },
    {
      year: "2023",
      quarter: "Q3",
      title: "기술 개발 완료",
      description: "마이크로바이옴 기반 하이브리드 처리 기술 개발 완료",
      achievements: ["핵심 기술 개발", "프로토타입 제작", "성능 테스트"],
    },
    {
      year: "2023",
      quarter: "Q4",
      title: "교육 프로그램 참여",
      description: "중소벤처기업부 제조창업 교육과정 수료",
      achievements: ["제조창업 교육 수료", "멘토링 프로그램 참여", "사업 모델 구체화"],
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "특허 출원",
      description: "마이크로바이옴 기반 음식물쓰레기 처리 기술 특허 출원",
      achievements: ["특허 출원", "지적재산권 확보", "기술 보호"],
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "정부 지원 프로그램 선정",
      description: "환경부 에코스타트업 예비창업자 프로그램 선정",
      achievements: ["정부 지원 선정", "자금 지원 확보", "사업 가속화"],
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "수상 및 인정",
      description: "기후테크 공모전 우수상 수상",
      achievements: ["공모전 우수상", "기술력 인정", "시장 관심 증대"],
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "제품 출시 준비",
      description: "BIOLOOP 제품 상용화 및 시장 출시 준비",
      achievements: ["제품 상용화", "양산 준비", "시장 진출"],
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "시장 진출",
      description: "국내 시장 본격 진출 및 글로벌 확장 계획",
      achievements: ["시장 진출", "글로벌 확장", "파트너십 구축"],
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
                  <div className="text-white font-bold text-xs">{item.year}</div>
                  <div className="text-white text-xs opacity-80">{item.quarter}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <Card className="border-0 shadow-soft-xl bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <Badge className="bg-beombiom-primary/10 text-beombiom-primary">
                        {item.year} {item.quarter}
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
