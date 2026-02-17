import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const solutions = [
  {
    title: '인터넷 망 분리 솔루션',
    description: '내부망과 외부망을 효과적으로 분리하여 보안성을 강화합니다.',
    features: [
      '물리적/논리적 망 분리',
      '안전한 데이터 전송',
      '통합 관리 시스템',
      '실시간 모니터링',
    ],
  },
  {
    title: '자료유출 방지 시스템',
    description: '민감한 기업 정보의 외부 유출을 차단하고 보호합니다.',
    features: [
      'DLP(Data Loss Prevention)',
      '암호화 솔루션',
      '접근 권한 관리',
      '감사 로그 관리',
    ],
  },
  {
    title: '통합 관리 솔루션',
    description: 'IT 자산을 효율적으로 관리하고 운영 비용을 절감합니다.',
    features: [
      '자산 관리 시스템',
      '원격 모니터링',
      '자동화 백업',
      '성능 최적화',
    ],
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            {'주요 솔루션'}
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
            {'검증된 IT 솔루션'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'기업의 보안과 효율성을 극대화하는 맞춤형 솔루션을 제공합니다.'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 text-balance">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
