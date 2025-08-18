"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TechnologyChart } from "@/components/technology/TechnologyChart"
import { CertificationRoadmap } from "@/components/technology/CertificationRoadmap"
import { Thermometer, Zap, Wind, Sun, Microscope, ArrowRight, CheckCircle } from "lucide-react"

export default function TechnologyPage() {
  const technologies = [
    {
      icon: Thermometer,
      name: "고온처리",
      temperature: "120°C",
      description: "고온 환경에서 유기물을 빠르게 분해하여 처리 시간을 단축합니다.",
      details: ["최적 온도 120°C 유지", "균일한 열 분포 시스템", "에너지 효율적 가열 방식", "온도 센서 기반 자동 제어"],
      benefits: ["처리 시간 50% 단축", "완전한 살균 효과", "에너지 효율성 향상"],
    },
    {
      icon: Zap,
      name: "고압시스템",
      pressure: "2.0 ATA",
      description: "고압 환경을 통해 분해 효율을 극대화하고 처리 품질을 향상시킵니다.",
      details: ["최대 2.0 ATA 압력 적용", "정밀 압력 제어 시스템", "안전 밸브 및 모니터링", "압력 단계별 최적화"],
      benefits: ["분해 효율 70% 향상", "처리 품질 개선", "안전성 보장"],
    },
    {
      icon: Wind,
      name: "진공처리",
      vacuum: "0.1 bar",
      description: "산소를 차단한 진공 환경에서 혐기성 분해를 촉진합니다.",
      details: ["0.1 bar 이하 진공도 달성", "산소 차단 환경 조성", "혐기성 미생물 활성화", "가스 배출 최소화"],
      benefits: ["냄새 발생 차단", "가스 배출 90% 감소", "혐기성 분해 촉진"],
    },
    {
      icon: Sun,
      name: "UV 광촉매",
      wavelength: "254nm / 365nm",
      description: "UVC와 UVA를 활용한 강력한 살균 및 탈취 시스템입니다.",
      details: ["UVC 254nm 살균 효과", "UVA 365nm 광촉매 반응", "99.9% 세균 제거", "유해 가스 분해"],
      benefits: ["완전한 살균", "냄새 제거", "유해물질 분해"],
    },
    {
      icon: Microscope,
      name: "마이크로바이옴",
      efficiency: "95%",
      description: "선별된 유익 미생물을 활용한 자연친화적 분해 시스템입니다.",
      details: ["특허받은 미생물 조합", "최적 환경 조성", "자연 분해 과정", "고품질 퇴비 생산"],
      benefits: ["자연친화적 처리", "고품질 퇴비", "지속가능한 순환"],
    },
  ]

  const processSteps = [
    { step: 1, title: "투입", description: "음식물쓰레기 자동 투입" },
    { step: 2, title: "전처리", description: "고온·고압·진공 전처리" },
    { step: 3, title: "살균", description: "UV 광촉매 살균 처리" },
    { step: 4, title: "분해", description: "마이크로바이옴 분해" },
    { step: 5, title: "완성", description: "고품질 퇴비 생성" },
  ]

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-beombiom-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">하이브리드 코어 기술</h1>
              <p className="text-xl text-beombiom-accent max-w-3xl mx-auto">
                5가지 핵심 기술이 결합된 혁신적인 음식물쓰레기 처리 시스템
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="5가지 핵심 기술"
              subtitle="각 기술의 시너지 효과로 최적의 처리 성능을 구현합니다"
              centered
              className="mb-16"
            />

            <div className="space-y-12">
              {technologies.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-soft-xl bg-card overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-3 gap-0">
                          {/* Icon & Title */}
                          <div className="bg-gradient-to-br from-beombiom-primary/10 to-beombiom-accent/10 p-8 flex flex-col justify-center items-center text-center">
                            <div className="w-20 h-20 rounded-3xl bg-beombiom-gradient flex items-center justify-center mb-4">
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{tech.name}</h3>
                            <Badge className="bg-beombiom-primary text-white">
                              {tech.temperature || tech.pressure || tech.vacuum || tech.wavelength || tech.efficiency}
                            </Badge>
                          </div>

                          {/* Description & Details */}
                          <div className="p-8 space-y-6">
                            <p className="text-muted-foreground text-lg">{tech.description}</p>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground">기술 특징</h4>
                              <ul className="space-y-2">
                                {tech.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-beombiom-primary flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Benefits */}
                          <div className="bg-muted/30 p-8 flex flex-col justify-center">
                            <h4 className="font-semibold text-foreground mb-4">핵심 효과</h4>
                            <div className="space-y-3">
                              {tech.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-beombiom-primary rounded-full" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
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

        {/* Process Flow */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionTitle title="처리 공정 순서도" subtitle="5단계 하이브리드 처리 과정" centered className="mb-16" />

            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 rounded-full bg-beombiom-gradient flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center max-w-24">{step.description}</p>

                    {/* Arrow connector */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-8">
                        <ArrowRight className="w-6 h-6 text-beombiom-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Charts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle title="성능 분석" subtitle="에너지 효율성과 비용 절감 효과" centered className="mb-16" />
            <TechnologyChart />
          </div>
        </section>

        {/* Certification Roadmap */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionTitle title="인증 로드맵" subtitle="국내외 인증 획득 계획" centered className="mb-16" />
            <CertificationRoadmap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
