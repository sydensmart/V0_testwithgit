import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Solutions } from '@/components/solutions'
import { Portfolio } from '@/components/portfolio'
import { TechStack } from '@/components/tech-stack'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Solutions />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
