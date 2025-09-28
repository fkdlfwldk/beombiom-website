"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { Product } from "@/data/products"

interface ProductFeaturesProps {
  product: Product
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">핵심 기능</h2>
            <p className="text-muted-foreground">{product.name}의 혁신적인 기능들</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-soft-xl bg-card h-full">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-beombiom-gradient flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
                      <p className="text-sm text-muted-foreground">{getFeatureDescription(feature, product.id)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getFeatureDescription(feature: string, productId: string): string {
  const descriptions: Record<string, Record<string, string>> = {
    bioloop: {
      "Micro-Circle 자원화 기술": "음식물쓰레기를 완전한 자원으로 전환하는 순환형 처리 시스템",
      "고온·고압·진공 처리": "120°C 고온과 1.5 ATA 고압, 진공 환경을 통한 효율적 분해",
      "UVC/UVA 광촉매 시스템": "자외선을 이용한 강력한 살균 및 탈취 효과",
      "마이크로바이옴 분해": "유익한 미생물을 활용한 자연친화적 분해 과정",
      "모듈형 설계": "부품별 교체 및 유지보수가 용이한 모듈형 구조",
    },
    zenoxy: {
      "비의료용 스포츠 회복": "운동 후 근육 회복과 피로 해소를 위한 전문 케어",
      "고압 산소 공급": "95% 고농도 산소를 1.3-1.5 ATA 압력으로 공급",
      "BLDC 미세진동": "정밀한 진동 마사지로 혈액순환 개선",
      "근적외선 LED": "깊은 조직까지 침투하는 치료용 LED 광선",
      "스마트 제어 시스템": "개인 맞춤형 프로그램과 자동 제어 기능",
    },
    butik: {
      "BLDC 진동 마사지": "정밀한 진동으로 피부 탄력과 혈액순환 개선",
      "LED 광테라피": "630nm, 850nm 파장의 전문 스킨케어 광선",
      "OLED 터치 UI": "직관적인 터치 인터페이스로 간편한 조작",
      "모듈 교체 헤드": "다양한 스킨케어 목적에 맞는 교체형 헤드",
      "AI 스킨 분석": "인공지능 기반 피부 상태 분석 및 맞춤 케어",
    },
  }

  return descriptions[productId]?.[feature] || "혁신적인 기술로 최적의 성능을 제공합니다."
}
