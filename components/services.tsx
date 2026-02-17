import { Card, CardContent } from '@/components/ui/card'
import { Server, Code, Shield, Cloud, Database, Network } from 'lucide-react'

const services = [
  {
    icon: Network,
    title: '네트워크 설계',
    description: '안정적이고 확장 가능한 네트워크 인프라를 설계하고 구축합니다.',
  },
  {
    icon: Server,
    title: '서버 구축',
    description: '최적화된 서버 환경을 구축하여 비즈니스 연속성을 보장합니다.',
  },
  {
    icon: Code,
    title: '웹/앱 개발',
    description: '사용자 중심의 웹사이트와 모바일 애플리케이션을 개발합니다.',
  },
  {
    icon: Shield,
    title: '보안 솔루션',
    description: '기업 데이터를 보호하는 통합 보안 시스템을 제공합니다.',
  },
  {
    icon: Cloud,
    title: '클라우드 전환',
    description: '효율적인 클라우드 마이그레이션과 운영 관리를 지원합니다.',
  },
  {
    icon: Database,
    title: '데이터 관리',
    description: '데이터베이스 설계부터 빅데이터 분석까지 지원합니다.',
  },
]

export function Services() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            {'핵심 서비스'}
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
            {'포괄적인 IT 서비스'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'기업의 IT 인프라부터 소프트웨어 개발까지, 전방위적인 IT 솔루션을 제공합니다.'}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
