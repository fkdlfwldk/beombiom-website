"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { Building2, Handshake, Newspaper } from "lucide-react"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("b2b")

  const contactTypes = [
    {
      id: "b2b",
      title: "B2B 도입 문의",
      icon: Building2,
      description: "제품 도입 및 사업 제안을 위한 문의",
    },
    {
      id: "partnership",
      title: "파트너십",
      icon: Handshake,
      description: "투자 및 협력 관련 문의",
    },
    {
      id: "media",
      title: "미디어 문의",
      icon: Newspaper,
      description: "언론 보도 및 인터뷰 관련 문의",
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
              <h1 className="text-4xl md:text-6xl font-bold text-white">문의하기</h1>
              <p className="text-xl text-beombiom-accent max-w-3xl mx-auto">
                BEOMBIOM과 함께 지속가능한 미래를 만들어가세요
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="어떤 도움이 필요하신가요?"
              subtitle="문의 유형에 따라 최적화된 상담을 제공합니다"
              centered
              className="mb-16"
            />

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1">
                  <ContactInfo />
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      {contactTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2">
                            <Icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{type.title}</span>
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>

                    {contactTypes.map((type) => (
                      <TabsContent key={type.id} value={type.id}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
                            <p className="text-muted-foreground">{type.description}</p>
                          </div>
                          <ContactForm contactType={type.id} />
                        </motion.div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
