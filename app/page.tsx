import dynamic from "next/dynamic"

import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
import { TechnologySnapshot } from "@/components/sections/TechnologySnapshot"
import { UseCases } from "@/components/sections/UseCases"
import { SocialProof } from "@/components/sections/SocialProof"
import { LeadCapture } from "@/components/sections/LeadCapture"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"

// ✅ FeaturedProducts를 클라이언트 전용으로 직접 동적 임포트 (파일 새로 안 만들어도 됨)
const FeaturedProductsClient = dynamic(
  () => import("@/components/sections/FeaturedProducts").then((m) => m.FeaturedProducts),
  { ssr: false }
)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <ValueProps />
        {/* ✅ 여기만 바뀜 */}
        <FeaturedProductsClient />
        <TechnologySnapshot />
        <UseCases />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
