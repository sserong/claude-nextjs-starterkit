import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-32 text-center">
      {/* 배경 그라디언트 장식 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Badge variant="secondary" className="mb-6 gap-1.5">
        <Sparkles className="size-3" />
        Next.js 16 + React 19
      </Badge>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        빠르게 시작하는
        <br />
        <span className="text-primary">모던 웹 개발</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        Next.js App Router, TailwindCSS v4, ShadcnUI가 미리 구성된 프로덕션 레디 스타터킷으로 즉시 개발을 시작하세요.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="/docs">
            시작하기 <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="https://github.com" target="_blank">
            GitHub에서 보기
          </Link>
        </Button>
      </div>
    </section>
  )
}
