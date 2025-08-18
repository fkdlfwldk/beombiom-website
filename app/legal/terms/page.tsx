import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8 text-center">이용약관</h1>

              <Card className="border-0 shadow-soft-xl bg-card">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">제1조 (목적)</h2>
                    <p className="text-muted-foreground">
                      이 약관은 BEOMBIOM(이하 "회사")이 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및
                      책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">제2조 (정의)</h2>
                    <p className="text-muted-foreground">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>"서비스"라 함은 회사가 제공하는 모든 서비스를 의미합니다.</li>
                      <li>"이용자"라 함은 회사의 서비스를 이용하는 자를 의미합니다.</li>
                      <li>"회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자를 의미합니다.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">제3조 (약관의 효력 및 변경)</h2>
                    <p className="text-muted-foreground">
                      이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다. 회사는 필요한 경우
                      이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지됩니다.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">제4조 (서비스의 제공)</h2>
                    <p className="text-muted-foreground">회사는 이용자에게 다음과 같은 서비스를 제공합니다.</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>제품 정보 제공 서비스</li>
                      <li>문의 및 상담 서비스</li>
                      <li>기타 회사가 정하는 서비스</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">제5조 (이용자의 의무)</h2>
                    <p className="text-muted-foreground">이용자는 다음 행위를 하여서는 안 됩니다.</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>신청 또는 변경 시 허위내용의 등록</li>
                      <li>타인의 정보도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>회사가 금지한 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                    </ul>
                  </div>

                  <div className="text-center text-sm text-muted-foreground mt-8">
                    <p>본 약관은 2024년 1월 1일부터 시행됩니다.</p>
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
