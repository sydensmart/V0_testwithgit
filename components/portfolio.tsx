import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: '문자전송 시스템',
    category: '시스템 개발',
    description: '대량 문자 발송 및 관리를 위한 통합 플랫폼 구축',
    tags: ['Web', 'API', 'SMS'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: '휴대폰 녹취관리 시스템',
    category: '시스템 개발',
    description: '통화 녹음 및 품질 관리를 위한 솔루션 개발',
    tags: ['Backend', 'Storage', 'Real-time'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: '근태관리 시스템',
    category: '시스템 개발',
    description: '직원 출퇴근 및 근무 시간 관리 자동화 시스템',
    tags: ['Web', 'Mobile', 'Cloud'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: '이커머스 플랫폼',
    category: '웹 개발',
    description: '반응형 쇼핑몰 구축 및 결제 시스템 연동',
    tags: ['E-commerce', 'Payment', 'Responsive'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    title: '기업 ERP 시스템',
    category: '시스템 개발',
    description: '통합 자원 관리를 위한 맞춤형 ERP 솔루션',
    tags: ['Enterprise', 'Database', 'Integration'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'IT 인프라 유지보수',
    category: '운영/관리',
    description: '24/7 모니터링 및 장애 대응 서비스',
    tags: ['Monitoring', 'Support', 'DevOps'],
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            {'포트폴리오'}
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
            {'성공적인 프로젝트 실적'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'다양한 산업 분야에서 축적한 풍부한 프로젝트 경험을 확인하세요.'}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div
                className="h-48 w-full transition-transform duration-300 group-hover:scale-105"
                style={{ background: project.image }}
              >
                <div className="h-full w-full bg-gradient-to-b from-transparent to-card flex items-end p-6">
                  <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
