"use client"

import { motion } from "framer-motion"

export function ExplodedView() {
  const parts = [
    { id: "cover", label: "상단 투입구/커버", y: -60 },
    { id: "blade", label: "분쇄 칼날+UVC", y: -20 },
    { id: "chamber", label: "마이크로바이옴 공간", y: 20 },
    { id: "tray", label: "하단 퇴비 트레이", y: 60 },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto h-96 flex items-center justify-center">
      <svg width="200" height="300" viewBox="0 0 200 300" className="absolute inset-0">
        {parts.map((part, index) => (
          <motion.g
            key={part.id}
            initial={{ y: 0 }}
            animate={{ y: part.y }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <rect
              x="50"
              y={150 + index * 30}
              width="100"
              height="25"
              rx="12"
              fill={index === 0 ? "#00C389" : index === 1 ? "#00A870" : index === 2 ? "#009E66" : "#B7F399"}
              opacity="0.8"
            />
            <text x="100" y={162 + index * 30} textAnchor="middle" className="text-xs fill-white font-medium">
              {part.label.split(" ")[0]}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {parts.map((part, index) => (
          <motion.div
            key={`label-${part.id}`}
            className="absolute text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded"
            style={{
              left: "220px",
              top: `${140 + index * 30}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {part.label}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
