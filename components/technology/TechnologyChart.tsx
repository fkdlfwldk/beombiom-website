"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

export function TechnologyChart() {
  const energyData = [
    { name: "기존 제품", energy: 100, cost: 100, time: 100 },
    { name: "BIOLOOP", energy: 40, cost: 35, time: 50 },
  ]

  const performanceData = [
    { month: "1월", efficiency: 85, satisfaction: 90 },
    { month: "2월", efficiency: 88, satisfaction: 92 },
    { month: "3월", efficiency: 90, satisfaction: 94 },
    { month: "4월", efficiency: 92, satisfaction: 95 },
    { month: "5월", efficiency: 94, satisfaction: 96 },
    { month: "6월", efficiency: 95, satisfaction: 97 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Energy Efficiency Chart */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 shadow-soft-xl bg-card">
          <CardHeader>
            <CardTitle className="text-center text-beombiom-primary">에너지 효율성 비교</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="energy" fill="#00A870" name="전력소비" />
                <Bar dataKey="cost" fill="#B7F399" name="운영비용" />
                <Bar dataKey="time" fill="#009E66" name="처리시간" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              * 기존 제품 대비 상대적 비교 (기존 제품 = 100%)
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Performance Trend Chart */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="border-0 shadow-soft-xl bg-card">
          <CardHeader>
            <CardTitle className="text-center text-beombiom-primary">성능 개선 추이</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="efficiency" stroke="#00A870" strokeWidth={3} name="처리 효율성 (%)" />
                <Line type="monotone" dataKey="satisfaction" stroke="#B7F399" strokeWidth={3} name="고객 만족도 (%)" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              * 6개월간 성능 개선 및 고객 만족도 추이
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
