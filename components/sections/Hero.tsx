"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Clock, Leaf } from "lucide-react"

export function Hero() {
  const stats = [
    { icon: Clock, label: "처리시간", value: "4시간", color: "bg-blue-500" },
    { icon: Zap, label: "전력절감", value: "60%", color: "bg-yellow-500" },
    { icon: Leaf, label: "탄소저감", value: "85%", color: "bg-green-500" },
  ]

  return (
    <section className="relative min-h-screen bg-beombiom-dark overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-beombiom-dark via-beombiom-dark to-slate-900" />
      <div className="absolute inset-0 bg-beombiom-gradient opacity-10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-beombiom-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                BEOMBIOM
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-beombiom-accent font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                지속가능성은 작게 시작해 무한히 확장됩니다.
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                마이크로 서클 자원화 기술로 음식물쓰레기를 가치로 바꿉니다.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="bg-beombiom-primary hover:bg-beombiom-primary/90 text-white">
                솔루션 살펴보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-beombiom-dark bg-transparent"
              >
                자료 요청
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{stat.value}</span>
                    <span className="ml-1 text-sm opacity-80">{stat.label}</span>
                  </Badge>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Product Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Product Silhouette */}
              <motion.div
                className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-beombiom-primary/20 to-beombiom-accent/20 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-48 h-48 rounded-2xl bg-beombiom-gradient opacity-80 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">BIOLOOP</span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-beombiom-accent rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
