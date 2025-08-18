"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "권기범",
      position: "대표이사 / CEO",
      background: "건축공학",
      expertise: ["건축공학", "H/W 제조", "마케팅", "특허"],
      description:
        "건축공학 전문가로서 환경 문제에 대한 깊은 관심을 바탕으로 BEOMBIOM을 설립했습니다. 하드웨어 제조와 마케팅 경험을 통해 기술과 시장을 연결하는 역할을 담당하고 있습니다.",
      image: "/placeholder-tyu5j.png",
    },
  ]

  const advisors = [
    {
      name: "김환경",
      position: "기술 고문",
      expertise: "환경공학 박사, 20년 경력",
      description: "환경기술연구원에서 폐기물 처리 기술 연구를 담당하며 BEOMBIOM의 기술 개발을 지원합니다.",
    },
    {
      name: "이창업",
      position: "사업 고문",
      expertise: "스타트업 투자 전문가",
      description: "다수의 기술 스타트업 투자 경험을 바탕으로 사업 전략과 투자 유치를 지원합니다.",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Core Team */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground text-center mb-12">핵심 팀</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-0 shadow-soft-xl bg-card">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Profile Image */}
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-beombiom-primary/20 to-beombiom-accent/20 flex items-center justify-center mb-4">
                        <div className="w-24 h-24 rounded-full bg-beombiom-gradient flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">{member.name[0]}</span>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-beombiom-primary hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-beombiom-primary hover:text-white transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-foreground">{member.name}</h4>
                        <p className="text-beombiom-primary font-medium">{member.position}</p>
                        <p className="text-sm text-muted-foreground">{member.background}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-foreground">전문 분야</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <Badge key={idx} className="bg-beombiom-primary/10 text-beombiom-primary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advisors */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground text-center mb-12">자문단</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-soft-xl bg-card h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-beombiom-gradient flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-lg">{advisor.name[0]}</span>
                    </div>
                    <h4 className="font-bold text-foreground">{advisor.name}</h4>
                    <p className="text-beombiom-primary font-medium text-sm">{advisor.position}</p>
                    <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{advisor.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
