import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Zap, Shield, Palette, Layers } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '빠른 개발',
    description:
      'App Router와 Server Components로 최적화된 성능과 빠른 개발 경험을 제공합니다.',
  },
  {
    icon: Palette,
    title: '커스텀 테마',
    description:
      'TailwindCSS v4 CSS-first 방식과 ShadcnUI로 완전히 커스터마이징 가능한 디자인 시스템.',
  },
  {
    icon: Shield,
    title: 'TypeScript 완전 지원',
    description:
      'strict 모드 TypeScript로 타입 안전성을 보장하고 개발자 경험을 향상시킵니다.',
  },
  {
    icon: Layers,
    title: '모듈화된 구조',
    description:
      '컴포넌트, 레이아웃, 섹션이 명확히 분리된 확장하기 쉬운 프로젝트 구조.',
  },
] as const

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            주요 기능
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            스타터킷에 포함된 핵심 기능들을 살펴보세요.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
