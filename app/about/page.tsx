"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CompanyTimeline } from "@/components/about/CompanyTimeline"
import { TeamSection } from "@/components/about/TeamSection"
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "혁신",
      description: "지속가능한 기술 혁신을 통해 환경 문제 해결에 앞장섭니다.",
    },
    {
      icon: Eye,
      title: "투명성",
      description: "모든 과정을 투명하게 공개하며 신뢰할 수 있는 파트너가 됩니다.",
    },
    {
      icon: Heart,
      title: "지속가능성",
      description: "미래 세대를 위한 지속가능한 환경을 만들어갑니다.",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "에코스타트업 예비창업자",
      organization: "환경부",
      year: "2024",
      description: "친환경 스타트업 지원 프로그램 선정",
    },
    {
      icon: TrendingUp,
      title: "기후테크 공모전 우수상",
      organization: "한국환경산업기술원",
      year: "2024",
      description: "혁신적인 음식물쓰레기 처리 기술 인정",
    },
    {
      icon: Users,
      title: "제조창업 교육 수료",
      organization: "중소벤처기업부",
      year: "2023",
      description: "제조업 전문 창업 교육과정 완료",
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
              <h1 className="text-4xl md:text-6xl font-bold text-white">회사 소개</h1>
              <p className="text-xl text-beombiom-accent max-w-3xl mx-auto">
                지속가능한 미래를 위한 혁신적인 기술로 환경 문제를 해결합니다
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <SectionTitle title="우리의 미션" subtitle="지속가능성은 작게 시작해 무한히 확장됩니다" centered />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-soft-xl bg-card h-full">
                    <CardContent className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-beombiom-primary">Mission</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        미생물 기반 음식물쓰레기 자원화 기술을 통해 지속가능한 순환경제를 실현하고, 모든 사람이 쉽게
                        실천할 수 있는 친환경 솔루션을 제공합니다.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-soft-xl bg-card h-full">
                    <CardContent className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-beombiom-primary">Vision</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        2030년까지 글로벌 음식물쓰레기 처리 기술의 선도 기업이 되어, 전 세계 탄소 배출량 감소에 기여하는
                        지속가능한 기술 생태계를 구축합니다.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Company Story */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-soft-xl bg-gradient-to-br from-beombiom-primary/5 to-beombiom-accent/5">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-foreground text-center">Our Story</h3>
                    <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                      BEOMBIOM은 건축공학 전문가인 권기범 대표의 환경에 대한 깊은 관심에서 시작되었습니다. 건축 현장에서
                      목격한 폐기물 문제를 해결하고자 하는 의지로, 미생물 기반의 혁신적인 음식물쓰레기 처리 기술을
                      개발하게 되었습니다. 작은 아이디어에서 시작된 우리의 기술은 이제 지속가능한 미래를 만들어가는 핵심
                      솔루션으로 성장하고 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionTitle title="핵심 가치" subtitle="BEOMBIOM이 추구하는 가치와 원칙" centered className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-soft-xl bg-card text-center h-full">
                      <CardContent className="p-8 space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle title="회사 연혁" subtitle="BEOMBIOM의 성장 과정과 주요 이정표" centered className="mb-16" />
            <CompanyTimeline />
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionTitle title="프로그램 참여 및 수상" subtitle="인정받은 기술력과 성과" centered className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    <Card className="border-0 shadow-soft-xl bg-card h-full">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-2xl bg-beombiom-gradient flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <Badge className="bg-beombiom-primary text-white">{achievement.year}</Badge>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-foreground">{achievement.title}</h3>
                          <p className="text-sm text-beombiom-primary font-medium">{achievement.organization}</p>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle title="팀 소개" subtitle="BEOMBIOM을 이끌어가는 전문가들" centered className="mb-16" />
            <TeamSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
