import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
import { TechnologySnapshot } from "@/components/sections/TechnologySnapshot"
import { UseCases } from "@/components/sections/UseCases"
import { SocialProof } from "@/components/sections/SocialProof"
import { LeadCapture } from "@/components/sections/LeadCapture"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"

// 클라 전용 래퍼만 불러옵니다 (서버 컴포넌트에서 import OK)
import FeaturedProductsClient from "@/components/sections/FeaturedProductsClient"

// (선택) 에러 바운더리 유지하고 싶으면 그대로 사용 가능
import { ClientErrorBoundary } from "@/components/util/ClientErrorBoundary"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <ValueProps />

        {/* 클라 전용 섹션은 래퍼로 렌더 */}
        <ClientErrorBoundary fallback={null}>
          <FeaturedProductsClient />
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
