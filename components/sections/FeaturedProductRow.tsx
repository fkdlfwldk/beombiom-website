"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Spec = { label: string; value: string }
type Feature = string

type Props = {
  name: string
  subtitle?: string
  image: string
  specs: Spec[]
  features?: Feature[]
  href?: string
}

export default function FeaturedProductRow({
  name,
  subtitle,
  image,
  specs,
  features = [],
  href = "/products",
}: Props) {
  return (
    <Card className="border-0 shadow-soft-xl overflow-hidden rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* LEFT: 텍스트/스펙 */}
        <CardContent className="p-8 md:p-10">
          <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}

          {/* 주요 사양 */}
          <div className="mt-8">
            <div className="text-sm font-semibold text-foreground/80 mb-3">주요 사양</div>
            <dl className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 주요 기능 */}
          {!!features.length && (
            <div className="mt-6">
              <div className="text-sm font-semibold text-foreground/80 mb-3">주요 기능</div>
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <Badge key={f} variant="secondary" className="rounded-2xl">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <a
            href={href}
            className="mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-beombiom-gradient text-white"
          >
            자세히 보기
          </a>
        </CardContent>

        {/* RIGHT: 이미지 (5:3, 우측 포커스) */}
        <div className="relative">
          <div className="relative w-full aspect-[5/3]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-right"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
