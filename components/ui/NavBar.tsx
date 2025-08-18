"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/products", label: "제품", labelEn: "Products" },
    { href: "/solutions", label: "솔루션", labelEn: "Solutions" },
    { href: "/technology", label: "기술", labelEn: "Technology" },
    { href: "/about", label: "회사소개", labelEn: "About" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-beombiom-gradient flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-bold text-beombiom-primary">BEOMBIOM</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-beombiom-primary transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Globe className="w-4 h-4 mr-1" />
            KO
          </Button>
          <Button className="bg-beombiom-primary hover:bg-beombiom-primary/90">문의하기</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col space-y-6 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-beombiom-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full justify-start mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  한국어 / English
                </Button>
                <Button className="w-full bg-beombiom-primary hover:bg-beombiom-primary/90">문의하기</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
