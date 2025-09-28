import FeaturedProductRow from "@/components/sections/FeaturedProductRow"
import { Hero } from "@/components/sections/Hero"
import { ValueProps } from "@/components/sections/ValueProps"
// import { FeaturedProducts } from "@/components/sections/FeaturedProducts" // ❌ 제거
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

        {/* Featured Products Section (신규) */}
        <section className="container mx-auto px-4 space-y-10 py-14">
          <FeaturedProductRow
            name="BIOLOOP"
            subtitle="하이브리드 음식물 처리기 (Micro-Circle 기반)"
            image="/images/products/bioloop-1920.webp"
            specs={[
              { label: "전력소비", value: "1.2kW" },
              { label: "처리용량", value: "5kg/일" },
              { label: "탈취방식", value: "UV 광촉매" },
              { label: "크기", value: "600×400×800mm" },
            ]}
            features={["Micro-Circle 자원화 기술", "고온·고압·진공 처리", "UVC/UVA 광촉매 시스템"]}
            href="/products#bioloop"
          />

          <FeaturedProductRow
            name="ZenOxy"
            subtitle="고온·고압 산소케어 웰니스 디바이스(비의료용)"
            image="/images/products/zenoxy-1920.webp"
            specs={[
              { label: "압력", value: "1.5 ATA" },
              { label: "산소 농도", value: "최대 95%" },
              { label: "동작 모드", value: "회복/컨디셔닝" },
              { label: "크기", value: "—" },
            ]}
            features={["BLDC 미세진동", "근적외선 LED"]}
            href="/products#zenoxy"
          />

          <FeaturedProductRow
            name="BUTIK"
            subtitle="올인원 AI 뷰티 스킨케어 디바이스"
            image="/images/products/butik-1920.webp"
            specs={[
              { label: "모드", value: "클렌징/LED/리프팅" },
              { label: "UI", value: "OLED 터치" },
              { label: "헤드", value: "모듈 교체형" },
              { label: "충전", value: "—" },
            ]}
            features={["BLDC 진동", "LED 광테라피", "모듈형 설계"]}
            href="/products#butik"
          />
        </section>

        <TechnologySnapshot />
        <UseCases />
        <SocialProof />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
