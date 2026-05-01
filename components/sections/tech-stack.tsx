import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const techStack = [
  { name: 'Next.js 16', category: 'Framework' },
  { name: 'React 19', category: 'UI Library' },
  { name: 'TypeScript 5', category: 'Language' },
  { name: 'TailwindCSS v4', category: 'Styling' },
  { name: 'ShadcnUI', category: 'Components' },
  { name: 'lucide-react', category: 'Icons' },
  { name: 'next-themes', category: 'Theming' },
  { name: 'Radix UI', category: 'Primitives' },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="px-4 py-24 bg-muted/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          기술 스택
        </h2>
        <p className="mt-4 mb-12 text-muted-foreground text-lg">
          검증된 최신 기술들로 구성된 스타터킷
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map(({ name, category }) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {name}
              </Badge>
              <span className="text-xs text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
