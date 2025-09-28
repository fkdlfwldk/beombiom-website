import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
import FeaturedProductRow from "@/components/sections/FeaturedProductRow"
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
        <FeaturedProductRow />
        <TechnologySnapshot />
        <UseCases />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
