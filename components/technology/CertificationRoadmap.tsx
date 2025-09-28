"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Target } from "lucide-react"

export function CertificationRoadmap() {
  const certifications = [
    {
      name: "KC 인증",
      description: "국내 전기용품 안전 인증",
      status: "planned",
      date: "2025.09",
      type: "안전",
    },
    {
      name: "특허 출원",
      description: "마이크로바이옴 기반 처리 기술",
      status: "in-progress",
      date: "2025.10",
      type: "지적재산권",
    },
    {
      name: "환경부 인증",
      description: "친환경 기술 인증",
      status: "planned",
      date: "2026.12",
      type: "환경",
    },
    {
      name: "CE 마킹",
      description: "유럽 안전 인증",
      status: "planned",
      date: "2026.12",
      type: "국제",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "planned":
        return <Target className="w-5 h-5 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "planned":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "완료"
      case "in-progress":
        return "진행중"
      case "planned":
        return "계획"
      default:
        return ""
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-soft-xl bg-card h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(cert.status)}
                    <h3 className="font-bold text-foreground">{cert.name}</h3>
                  </div>
                  <Badge className={getStatusColor(cert.status)}>{getStatusText(cert.status)}</Badge>
                </div>

                <p className="text-sm text-muted-foreground">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {cert.type}
                  </Badge>
                  <span className="text-sm font-medium text-beombiom-primary">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
