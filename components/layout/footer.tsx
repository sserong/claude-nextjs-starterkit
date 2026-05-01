import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 브랜드 */}
          <div className="col-span-1 md:col-span-2">
            <p className="font-bold text-lg mb-2">StarterKit</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              빠르게 웹 개발을 시작할 수 있는 Next.js 모던 스타터킷입니다.
            </p>
          </div>

          {/* Resources */}
          <div>
            <p className="font-semibold text-sm mb-3">Resources</p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <p className="font-semibold text-sm mb-3">Community</p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 StarterKit. All rights reserved.</p>
          <p>Built with Next.js & ShadcnUI</p>
        </div>
      </div>
    </footer>
  )
}
