import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
import { FeaturedProducts } from "@/components/sections/FeaturedProducts" // ← 그냥 직접 import
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
        <FeaturedProducts />  {/* ← 그대로 사용 */}
        <TechnologySnapshot />
        <UseCases />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
