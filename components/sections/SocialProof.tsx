"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Award, Users, TrendingUp, Star } from "lucide-react"

export function SocialProof() {
  const achievements = [
    {
      icon: Award,
      title: "에코스타트업 예비창업자",
      description: "환경부 주관 친환경 스타트업 지원 프로그램 선정",
      year: "2024",
    },
    {
      icon: TrendingUp,
      title: "기후테크 공모전 우수상",
      description: "혁신적인 음식물쓰레기 처리 기술로 우수상 수상",
      year: "2024",
    },
    {
      icon: Users,
      title: "제조창업 교육 수료",
      description: "중소벤처기업부 제조창업 전문 교육과정 수료",
      year: "2023",
    },
    {
      icon: Star,
      title: "특허 출원",
      description: "마이크로바이옴 기반 음식물쓰레기 처리 기술 특허 출원",
      year: "2023",
    },
  ]

  const testimonial = {
    quote:
      "BEOMBIOM의 기술은 단순한 폐기물 처리를 넘어 진정한 자원 순환을 실현합니다. 지속가능한 미래를 위한 혁신적인 솔루션입니다.",
    author: "김환경",
    position: "환경기술연구원 선임연구원",
  }

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
            subtitle="다양한 프로그램 참여와 수상 경력으로 검증된 혁신 기술"
            centered
            className="mb-16"
          />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-soft-xl bg-card text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-beombiom-primary bg-beombiom-primary/10 px-2 py-1 rounded inline-block">
                        {achievement.year}
                      </div>
                      <h3 className="font-bold text-foreground text-sm">{achievement.title}</h3>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-soft-xl bg-gradient-to-br from-beombiom-primary/5 to-beombiom-accent/5">
            <CardContent className="p-8 text-center space-y-6">
              <div className="text-4xl text-beombiom-primary">"</div>
              <blockquote className="text-lg text-foreground italic leading-relaxed">{testimonial.quote}</blockquote>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
