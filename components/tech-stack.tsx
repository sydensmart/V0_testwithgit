import { Card, CardContent } from '@/components/ui/card'

const techCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'Express', '.NET'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Flutter', 'iOS', 'Android', 'Ionic'],
  },
  {
    title: 'Security',
    items: ['SSL/TLS', 'OAuth', 'Firewall', 'VPN', 'IDS/IPS'],
  },
]

export function TechStack() {
  return (
    <section id="tech" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            {'기술 스택'}
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
            {'최신 기술로 구현하는 솔루션'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'업계 표준 기술과 최신 트렌드를 반영한 개발 환경을 제공합니다.'}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                      {item}
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
