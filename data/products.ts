// data/products.ts
export interface Product {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  features: string[]
  featuresEn: string[]
  specs: Record<string, string>
  specsEn: Record<string, string>
  image: string
}

export const products: Product[] = [
  {
    id: "bioloop",
    name: "BIOLOOP",
    nameEn: "BIOLOOP",
    description: "하이브리드 음식물 처리기 (Micro-Circle 기반)",
    descriptionEn: "Hybrid Food Waste Processor (Micro-Circle Based)",
    features: [
      "Micro-Circle 자원화 기술",
      "고온·고압·진공 처리",
      "UVC/UVA 광촉매 시스템",
      "마이크로바이옴 분해",
      "모듈형 설계",
    ],
    featuresEn: [
      "Micro-Circle Resource Technology",
      "High Temperature, Pressure, Vacuum Processing",
      "UVC/UVA Photocatalyst System",
      "Microbiome Decomposition",
      "Modular Design",
    ],
    specs: {
      전력소비: "1.2kW",
      처리용량: "5kg/일",
      탈취방식: "UV 광촉매",
      크기: "600×400×800mm",
    ],
    specsEn: {
      "Power Consumption": "1.2kW",
      "Processing Capacity": "5kg/day",
      Deodorization: "UV Photocatalyst",
      Size: "600×400×800mm",
    },
    // ✅ 변경
    image: "/images/products/bioloop-1920.webp",
  },
  {
    id: "zenoxy",
    name: "ZenOxy",
    nameEn: "ZenOxy",
    description: "고온·고압 산소케어 (스포츠 회복/웰니스) 디바이스",
    descriptionEn: "High-Temperature, High-Pressure Oxygen Care (Sports Recovery/Wellness) Device",
    features: ["비의료용 스포츠 회복", "고압 산소 공급", "BLDC 미세진동", "근적외선 LED", "스마트 제어 시스템"],
    featuresEn: [
      "Non-Medical Sports Recovery",
      "High-Pressure Oxygen Supply",
      "BLDC Micro Vibration",
      "Near-Infrared LED",
      "Smart Control System",
    ],
    specs: {
      산소농도: "95%",
      압력범위: "1.3-2.0 ATA",
      진동주파수: "20-200Hz",
      세션시간: "30-90분",
    },
    specsEn: {
      "Oxygen Concentration": "95%",
      "Pressure Range": "1.3-2.0 ATA",
      "Vibration Frequency": "20-200Hz",
      "Session Time": "30-90min",
    },
    // ✅ 변경
    image: "/images/products/zenoxy-1920.webp",
  },
  {
    id: "butik",
    name: "BUTIK",
    nameEn: "BUTIK",
    description: "올인원 AI 뷰티 스킨케어 디바이스",
    descriptionEn: "All-in-One AI Beauty Skincare Device",
    features: ["BLDC 진동 마사지", "LED 광테라피", "OLED 터치 UI", "모듈 교체 헤드", "AI 스킨 분석"],
    featuresEn: [
      "BLDC Vibration Massage",
      "LED Light Therapy",
      "OLED Touch UI",
      "Modular Replacement Heads",
      "AI Skin Analysis",
    ],
    specs: {
      "LED 파장": "630nm, 850nm",
      진동강도: "3단계 조절",
      배터리: "2시간 연속사용",
      방수등급: "IPX6",
    },
    specsEn: {
      "LED Wavelength": "630nm, 850nm",
      "Vibration Intensity": "3-Level Adjustment",
      Battery: "2 Hours Continuous Use",
      "Water Resistance": "IPX6",
    },
    // ✅ 변경
    image: "/images/products/butik-1920.webp",
  },
]
