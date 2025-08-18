import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8 text-center">개인정보처리방침</h1>

              <Card className="border-0 shadow-soft-xl bg-card">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">1. 개인정보의 처리목적</h2>
                    <p className="text-muted-foreground">
                      BEOMBIOM은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                      용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를
                      받는 등 필요한 조치를 이행할 예정입니다.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>문의 및 상담 서비스 제공</li>
                      <li>제품 및 서비스 안내</li>
                      <li>마케팅 및 광고에의 활용</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">2. 개인정보의 처리 및 보유기간</h2>
                    <p className="text-muted-foreground">
                      BEOMBIOM은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
                      개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">3. 개인정보의 제3자 제공</h2>
                    <p className="text-muted-foreground">
                      BEOMBIOM은 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의
                      동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게
                      제공합니다.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">4. 정보주체의 권리·의무 및 행사방법</h2>
                    <p className="text-muted-foreground">
                      정보주체는 BEOMBIOM에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>개인정보 처리정지 요구</li>
                      <li>개인정보 열람요구</li>
                      <li>개인정보 정정·삭제요구</li>
                      <li>개인정보 처리정지 요구</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">5. 개인정보보호책임자</h2>
                    <div className="text-muted-foreground space-y-2">
                      <p>성명: 권기범</p>
                      <p>직책: 대표이사</p>
                      <p>연락처: contact@beombiom.com</p>
                    </div>
                  </div>

                  <div className="text-center text-sm text-muted-foreground mt-8">
                    <p>본 방침은 2024년 1월 1일부터 시행됩니다.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
