"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

interface ContactFormProps {
  contactType: string
}

export function ContactForm({ contactType }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "문의가 성공적으로 전송되었습니다!",
      description: "24시간 이내에 답변드리겠습니다.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const getInquiryOptions = () => {
    switch (contactType) {
      case "b2b":
        return [
          { value: "product-inquiry", label: "제품 도입 문의" },
          { value: "pricing", label: "가격 및 견적 문의" },
          { value: "demo", label: "데모 및 시연 요청" },
          { value: "technical", label: "기술 지원" },
        ]
      case "partnership":
        return [
          { value: "investment", label: "투자 문의" },
          { value: "collaboration", label: "사업 협력" },
          { value: "distribution", label: "유통 파트너십" },
          { value: "technology", label: "기술 제휴" },
        ]
      case "media":
        return [
          { value: "interview", label: "인터뷰 요청" },
          { value: "press-release", label: "보도자료 문의" },
          { value: "event", label: "행사 및 전시 관련" },
          { value: "other", label: "기타 미디어 문의" },
        ]
      default:
        return []
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="border-0 shadow-soft-xl bg-card">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">이름 *</label>
                <Input placeholder="홍길동" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">회사명</label>
                <Input placeholder="회사명을 입력하세요" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">이메일 *</label>
                <Input type="email" placeholder="example@company.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">연락처</label>
                <Input placeholder="010-1234-5678" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">문의 세부 유형 *</label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="세부 문의 유형을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {getInquiryOptions().map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">메시지 *</label>
              <Textarea placeholder="문의 내용을 자세히 작성해 주세요..." className="min-h-[120px]" required />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy" className="text-xs text-muted-foreground">
                  개인정보 수집 및 이용에 동의합니다. (필수)
                  <br />
                  <span className="text-beombiom-primary cursor-pointer hover:underline">개인정보처리방침 보기</span>
                </label>
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="marketing" className="mt-1" />
                <label htmlFor="marketing" className="text-xs text-muted-foreground">
                  마케팅 정보 수신에 동의합니다. (선택)
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-beombiom-primary hover:bg-beombiom-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "전송 중..."
              ) : (
                <>
                  문의 보내기
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
