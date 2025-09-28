import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
import { TechnologySnapshot } from "@/components/sections/TechnologySnapshot"
import { UseCases } from "@/components/sections/UseCases"
import { SocialProof } from "@/components/sections/SocialProof"
import { LeadCapture } from "@/components/sections/LeadCapture"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { ClientErrorBoundary } from "@/components/util/ClientErrorBoundary"

// ✅ 클라이언트 전용(SSR 비활성화)으로 로드
const FeaturedProducts = dynamic(
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

        {/* ✅ 여기서만 에러가 나도 페이지 전체는 안 죽음 */}
        <ClientErrorBoundary fallback={null}>
          <FeaturedProducts />
        </ClientErrorBoundary>

        <TechnologySnapshot />
        <UseCases />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
