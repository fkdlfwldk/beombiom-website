import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-beombiom-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-beombiom-primary">BEOMBIOM</span>
            </div>
            <p className="text-sm text-muted-foreground">지속가능성은 작게 시작해 무한히 확장됩니다.</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>사업자 등록 번호: 849-79-00492</p>
              <p>대표: 권기범</p>
              <p>주소: 서울 서초구 서초동 1308-16</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">빠른 링크</h3>
            <div className="space-y-2 text-sm">
              <Link href="/products" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                제품
              </Link>
              <Link href="/solutions" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                솔루션
              </Link>
              <Link href="/technology" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                기술
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                회사소개
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                문의하기
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">법적 고지</h3>
            <div className="space-y-2 text-sm">
              <Link href="/legal/privacy" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/legal/terms" className="block text-muted-foreground hover:text-beombiom-primary transition-colors">
                이용약관
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">뉴스레터</h3>
            <p className="text-sm text-muted-foreground">최신 소식과 기술 업데이트를 받아보세요.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="이메일 주소" className="flex-1" />
              <Button size="sm" className="bg-beombiom-primary hover:bg-beombiom-primary/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BEOMBIOM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
