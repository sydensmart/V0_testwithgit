'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { name: '회사소개', href: '#about' },
  { name: '솔루션', href: '#solutions' },
  { name: '포트폴리오', href: '#portfolio' },
  { name: '기술스택', href: '#tech' },
  { name: '문의하기', href: '#contact' },
]

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <div className="h-4 w-4 rounded-sm bg-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">TechVision</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="ml-4">
                {'문의하기'}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="w-full">{'문의하기'}</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {'IT 솔루션 전문 기업'}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {'기업의 '}
              <span className="text-primary">{'디지털 혁신'}</span>
              {'을 선도하는 IT 파트너'}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {'네트워크 설계, 서버 구축, 소프트웨어 개발 등 IT 전반의 솔루션을 제공하는 토털 IT 서비스 기업입니다. 최신 기술과 풍부한 경험으로 고객의 비즈니스 성장을 지원합니다.'}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                {'서비스 알아보기'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                {'포트폴리오 보기'}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">{'15+'}</div>
                <div className="text-sm text-muted-foreground">{'년 경력'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{'300+'}</div>
                <div className="text-sm text-muted-foreground">{'프로젝트'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{'98%'}</div>
                <div className="text-sm text-muted-foreground">{'고객만족도'}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 backdrop-blur-sm border border-primary/10">
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary to-primary/70 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-3 rounded-full bg-primary-foreground/80" />
                    <div className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-foreground/60" />
                      <div className="h-2 w-2 rounded-full bg-primary-foreground/60" />
                      <div className="h-2 w-2 rounded-full bg-primary-foreground/60" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded bg-primary-foreground/20" />
                    <div className="h-4 w-full rounded bg-primary-foreground/20" />
                    <div className="h-4 w-2/3 rounded bg-primary-foreground/20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl bg-card border border-border p-4 shadow-sm">
                    <div className="h-3 w-3 rounded-full bg-primary mb-3" />
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded bg-muted" />
                      <div className="h-3 w-4/5 rounded bg-muted" />
                    </div>
                  </div>
                  <div className="h-32 rounded-xl bg-card border border-border p-4 shadow-sm">
                    <div className="h-3 w-3 rounded-full bg-primary mb-3" />
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded bg-muted" />
                      <div className="h-3 w-4/5 rounded bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-accent/10 backdrop-blur-sm border border-border shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
