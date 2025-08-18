"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Mail, Phone, Building } from "lucide-react"

export function LeadCapture() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="파트너십 문의"
            subtitle="BEOMBIOM과 함께 지속가능한 미래를 만들어가세요"
            centered
            className="mb-16"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">함께 성장할 파트너를 찾습니다</h3>
                <p className="text-muted-foreground">
                  B2B 도입, 투자 및 협력, 미디어 문의 등 다양한 형태의 파트너십을 통해 지속가능한 기술을 확산시키고
                  있습니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-beombiom-gradient flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">이메일</div>
                    <div className="text-muted-foreground">contact@beombiom.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-beombiom-gradient flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">전화</div>
                    <div className="text-muted-foreground">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-beombiom-gradient flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">주소</div>
                    <div className="text-muted-foreground">서울특별시 강남구 테헤란로 123</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-soft-xl bg-card">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">이름 *</label>
                        <Input placeholder="홍길동" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">회사명</label>
                        <Input placeholder="회사명을 입력하세요" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">이메일 *</label>
                        <Input type="email" placeholder="example@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">연락처</label>
                        <Input placeholder="010-1234-5678" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">문의 유형 *</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="문의 유형을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="b2b">B2B 도입 문의</SelectItem>
                          <SelectItem value="partnership">파트너십 (VC/협력)</SelectItem>
                          <SelectItem value="media">미디어 문의</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">메시지 *</label>
                      <Textarea placeholder="문의 내용을 자세히 작성해 주세요..." className="min-h-[120px]" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <input type="checkbox" id="privacy" className="mt-1" />
                        <label htmlFor="privacy" className="text-xs text-muted-foreground">
                          개인정보 수집 및 이용에 동의합니다. (필수)
                        </label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <input type="checkbox" id="marketing" className="mt-1" />
                        <label htmlFor="marketing" className="text-xs text-muted-foreground">
                          마케팅 정보 수신에 동의합니다. (선택)
                        </label>
                      </div>
                    </div>

                    <Button className="w-full bg-beombiom-primary hover:bg-beombiom-primary/90">문의 보내기</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
