"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, ImageIcon, Video } from "lucide-react"
import type { Product } from "@/data/products"

interface ProductDownloadsProps {
  product: Product
}

export function ProductDownloads({ product }: ProductDownloadsProps) {
  const downloads = [
    {
      title: "제품 카탈로그",
      description: "상세한 제품 정보와 사양서",
      icon: FileText,
      fileType: "PDF",
      fileSize: "2.3MB",
    },
    {
      title: "기술 자료",
      description: "기술적 세부사항과 설치 가이드",
      icon: FileText,
      fileType: "PDF",
      fileSize: "1.8MB",
    },
    {
      title: "제품 이미지",
      description: "고해상도 제품 이미지 팩",
      icon: ImageIcon,
      fileType: "ZIP",
      fileSize: "15.2MB",
    },
    {
      title: "데모 영상",
      description: "제품 작동 원리 및 사용법 영상",
      icon: Video,
      fileType: "MP4",
      fileSize: "45.7MB",
    },
  ]

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
            <h2 className="text-3xl font-bold text-foreground mb-4">자료 다운로드</h2>
            <p className="text-muted-foreground">{product.name} 관련 기술 자료와 문서를 다운로드하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download, index) => {
              const Icon = download.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-soft-xl bg-card h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-beombiom-gradient flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{download.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{download.description}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span className="bg-muted px-2 py-1 rounded">{download.fileType}</span>
                            <span>{download.fileSize}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-beombiom-primary hover:bg-beombiom-primary/90">
                        <Download className="w-4 h-4 mr-2" />
                        다운로드
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
