import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
import { FeaturedProducts } from "@/components/sections/FeaturedProducts" // ← 원래 탭형 섹션
import { TechnologySnapshot } from "@/components/sections/TechnologySnapshot"
import { UseCases } from "@/components/sections/UseCases"
import { SocialProof } from "@/components/sections/SocialProof"
import { LeadCapture } from "@/components/sections/LeadCapture"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <ValueProps />
        <FeaturedProducts />  {/* ← 탭형 UI 복귀 */}
        <TechnologySnapshot />
        <UseCases />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
