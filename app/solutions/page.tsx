"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Home, ArrowRight, BarChart3, Settings, Database, FileText } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      category: "B2B",
      title: "요식업·호텔·피트니스",
      description: "대용량 음식물쓰레기 처리로 운영비 절감 및 친환경 경영 실현",
      icon: Building2,
      benefits: ["운영비 60% 절감", "폐기물 처리비 제로화", "친환경 인증 획득", "브랜드 이미지 향상"],
      applications: ["레스토랑 체인", "호텔 리조트", "대형 카페", "급식업체", "헬스장", "스파"],
      caseStudy: {
        client: "○○호텔 그룹",
        result: "월 폐기물 처리비 300만원 절감, 친환경 호텔 인증 획득",
      },
    },
    {
      category: "B2G",
      title: "지자체·공공시설",
      description: "지역 단위 폐기물 관리 시스템으로 환경 정책 목표 달성",
      icon: MapPin,
      benefits: ["탄소배출 85% 감소", "폐기물 매립량 최소화", "지역 환경 개선", "정책 목표 달성"],
      applications: ["시청·구청", "공립학교", "공공병원", "도서관", "체육시설", "복지시설"],
      caseStudy: {
        client: "○○구청",
        result: "연간 탄소배출 500톤 감소, 폐기물 처리 예산 40% 절감",
      },
    },
    {
      category: "B2C",
      title: "가정·홈케어",
      description: "가정용 소형 처리기로 일상 속 지속가능한 라이프스타일 구현",
      icon: Home,
      benefits: ["음식물쓰레기 제로", "고품질 퇴비 생산", "냄새·해충 차단", "환경보호 실천"],
      applications: ["아파트", "단독주택", "펜션", "카페", "소규모 식당", "농가"],
      caseStudy: {
        client: "○○아파트 단지",
        result: "입주민 만족도 95%, 단지 내 음식물쓰레기 처리비 100% 절감",
      },
    },
  ]

  const processFlow = [
    {
      step: 1,
      title: "설치",
      description: "현장 맞춤형 설치 및 초기 설정",
      icon: Settings,
      details: ["현장 조사", "맞춤 설치", "시운전", "교육"],
    },
    {
      step: 2,
      title: "운영",
      description: "자동화된 처리 시스템 운영",
      icon: ArrowRight,
      details: ["자동 처리", "실시간 모니터링", "원격 제어", "알림 서비스"],
    },
    {
      step: 3,
      title: "유지보수",
      description: "HAAS+SAAS 통합 서비스",
      icon: Database,
      details: ["정기 점검", "부품 교체", "소프트웨어 업데이트", "기술 지원"],
    },
    {
      step: 4,
      title: "데이터 리포트",
      description: "성과 분석 및 최적화 제안",
      icon: BarChart3,
      details: ["처리량 분석", "효율성 리포트", "비용 절감 효과", "개선 제안"],
    },
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
              <h1 className="text-4xl md:text-6xl font-bold text-white">맞춤형 솔루션</h1>
              <p className="text-xl text-beombiom-accent max-w-3xl mx-auto">
                B2B, B2G, B2C 전 영역에서 지속가능한 폐기물 처리 솔루션을 제공합니다
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="분야별 솔루션"
              subtitle="각 분야의 특성에 맞는 최적화된 솔루션을 제공합니다"
              centered
              className="mb-16"
            />

            <div className="space-y-20">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-soft-xl bg-card overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* Content */}
                          <div className="p-8 lg:p-12 space-y-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <Badge className="bg-beombiom-primary text-white">{solution.category}</Badge>
                            </div>

                            <div className="space-y-4">
                              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{solution.title}</h2>
                              <p className="text-muted-foreground text-lg">{solution.description}</p>
                            </div>

                            <div className="space-y-4">
                              <h3 className="font-semibold text-foreground">핵심 혜택</h3>
                              <div className="grid grid-cols-2 gap-2">
                                {solution.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-beombiom-primary rounded-full" />
                                    <span className="text-sm text-muted-foreground">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="font-semibold text-foreground">적용 분야</h3>
                              <div className="flex flex-wrap gap-2">
                                {solution.applications.map((app, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button className="bg-beombiom-primary hover:bg-beombiom-primary/90">
                              상세 문의하기
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>

                          {/* Case Study */}
                          <div className="bg-muted/30 p-8 lg:p-12 flex items-center">
                            <div className="space-y-4">
                              <h3 className="font-semibold text-foreground">성공 사례</h3>
                              <Card className="border-0 bg-card">
                                <CardContent className="p-6 space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <FileText className="w-4 h-4 text-beombiom-primary" />
                                    <span className="font-medium text-foreground">{solution.caseStudy.client}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{solution.caseStudy.result}</p>
                                </CardContent>
                              </Card>
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
            <SectionTitle
              title="서비스 프로세스"
              subtitle="설치부터 운영, 유지보수까지 통합 서비스 제공"
              centered
              className="mb-16"
            />

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processFlow.map((process, index) => {
                  const Icon = process.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Card className="border-0 shadow-soft-xl bg-card text-center h-full">
                        <CardContent className="p-6 space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="space-y-2">
                            <div className="text-xs font-semibold text-beombiom-primary bg-beombiom-primary/10 px-2 py-1 rounded inline-block">
                              STEP {process.step}
                            </div>
                            <h3 className="font-bold text-foreground">{process.title}</h3>
                            <p className="text-sm text-muted-foreground">{process.description}</p>
                          </div>
                          <div className="space-y-1">
                            {process.details.map((detail, idx) => (
                              <div key={idx} className="text-xs text-muted-foreground">
                                • {detail}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Arrow connector */}
                      {index < processFlow.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-beombiom-primary" />
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* HAAS+SAAS Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <SectionTitle
                  title="HAAS + SAAS 통합 서비스"
                  subtitle="하드웨어와 소프트웨어 서비스를 통합한 혁신적인 비즈니스 모델"
                  centered
                />

                <Card className="border-0 shadow-soft-xl bg-gradient-to-br from-beombiom-primary/5 to-beombiom-accent/5">
                  <CardContent className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">HAAS (Hardware as a Service)</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 초기 투자비용 최소화</li>
                          <li>• 정기 유지보수 포함</li>
                          <li>• 부품 교체 및 업그레이드</li>
                          <li>• 24/7 기술 지원</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">SAAS (Software as a Service)</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 실시간 모니터링 대시보드</li>
                          <li>• 데이터 분석 및 리포트</li>
                          <li>• 원격 제어 및 최적화</li>
                          <li>• 지속적인 소프트웨어 업데이트</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
