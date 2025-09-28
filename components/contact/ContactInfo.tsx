"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "이메일",
      content: "fkdlfwldk@naver.com",
      description: "일반 문의 및 제품 관련 질문",
    },
    {
      icon: Phone,
      title: "전화",
      content: "010-8965-7458",
      description: "평일 09:00 - 18:00",
    },
    {
      icon: MapPin,
      title: "주소",
      content: "서울 서초구 서초동 1308-16",
      description: "방문 상담 시 사전 예약 필수",
    },
    {
      icon: Clock,
      title: "운영시간",
      content: "평일 09:00 - 18:00",
      description: "주말 및 공휴일 휴무",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <Card className="border-0 shadow-soft-xl bg-gradient-to-br from-beombiom-primary/5 to-beombiom-accent/5">
        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">연락처 정보</h3>
            <p className="text-muted-foreground">언제든지 편하게 연락주세요</p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-beombiom-gradient flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{detail.title}</h4>
                    <p className="text-beombiom-primary font-medium">{detail.content}</p>
                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Response Promise */}
      <Card className="border-0 shadow-soft-xl bg-card">
        <CardContent className="p-6 text-center space-y-3">
          <h4 className="font-semibold text-foreground">빠른 응답 약속</h4>
          <p className="text-sm text-muted-foreground">
            모든 문의에 대해 <span className="text-beombiom-primary font-semibold">24시간 이내</span> 답변드립니다.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
